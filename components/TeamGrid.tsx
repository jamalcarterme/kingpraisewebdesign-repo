'use client';

import { useFetch } from '@/hooks';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  isActive?: boolean;
  order?: number;
  photo?: { url?: string };
  socials?: { linkedin?: string; twitter?: string; github?: string; instagram?: string };
}

export default function TeamGrid() {
  const { data, isLoading } = useFetch<{ team?: TeamMember[]; data?: TeamMember[] }>('/team', { auth: false });

  const list = (data?.team || data?.data || [])
    .filter((t) => t.isActive !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton rounded-2xl" style={{ height: 280 }} />
        ))}
      </div>
    );
  }

  if (!list.length) {
    return <p className="text-slate-400 col-span-full text-center mt-12">Team profiles coming soon.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {list.map((m) => (
        <div key={m._id} className="glass rounded-2xl p-6 text-center card-hover">
          {m.photo?.url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.photo.url} alt={m.name || 'Team member'} className="avatar w-24 h-24 rounded-full object-cover mx-auto bg-[var(--surface-2)]" loading="lazy" />
          )}
          <h3 className="font-display font-semibold text-white mt-4">{m.name}</h3>
          <p className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-wide mt-1">{m.role}</p>
          {m.bio && <p className="text-slate-400 text-sm mt-3 clamp-3">{m.bio}</p>}
          <div className="flex justify-center gap-3 mt-4 text-slate-500">
            {m.socials?.linkedin && <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">in</a>}
            {m.socials?.twitter && <a href={m.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">tw</a>}
            {m.socials?.github && <a href={m.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">gh</a>}
            {m.socials?.instagram && <a href={m.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ig</a>}
          </div>
        </div>
      ))}
    </div>
  );
}
