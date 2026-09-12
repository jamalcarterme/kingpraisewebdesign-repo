'use client';

import { useMemo, useState } from 'react';
import { useFetch } from '@/hooks';
import { truncate } from '@/lib/utils';

interface Project {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  client?: string;
  country?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  order?: number;
  tags?: string[];
  image?: { url?: string };
}

export default function PortfolioGrid() {
  const { data, isLoading } = useFetch<{ projects?: Project[]; data?: Project[] }>('/projects', { auth: false });
  const [category, setCategory] = useState('All');

  const all = useMemo(
    () => (data?.projects || data?.data || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0)),
    [data]
  );
  const categories = useMemo(() => ['All', ...Array.from(new Set(all.map((p) => p.category).filter(Boolean) as string[]))], [all]);
  const list = category === 'All' ? all : all.filter((p) => p.category === category);

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton rounded-2xl" style={{ height: 340 }} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-lg text-sm ${category === c ? 'btn-primary' : 'btn-ghost'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="text-slate-400 col-span-full text-center py-12">No projects in this category yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {list.map((p) => (
            <div key={p._id} className="glass rounded-2xl overflow-hidden card-hover group">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-2)] relative">
                {p.image?.url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image.url} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                )}
                {p.isFeatured && <span className="absolute top-3 left-3 badge bg-[var(--brand)] text-white">Featured</span>}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--brand-2)] uppercase tracking-wide">{p.category || 'Website'}</span>
                  {p.country && <span className="text-xs text-slate-500">{p.country}</span>}
                </div>
                <h3 className="font-display text-lg font-semibold text-white mt-1">{p.title}</h3>
                {p.client && <p className="text-slate-500 text-xs mt-1">for {p.client}</p>}
                {p.description && <p className="text-slate-400 text-sm mt-2 clamp-3">{truncate(p.description, 160)}</p>}
                <div className="flex flex-wrap gap-2 mt-4">
                  {(p.tags || []).slice(0, 4).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-300">{t}</span>
                  ))}
                </div>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-2)] hover:underline">
                    Visit live site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
