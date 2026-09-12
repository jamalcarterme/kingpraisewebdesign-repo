/**
 * Contact Form Component
 * Client Component ("use client")
 * Handles form submission to Web3Forms or backend API
 */

'use client';

import { FormEvent, useState } from 'react';
import { useFormSubmit } from '@/hooks';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  access_key?: string; // Web3Forms requirement
}

/**
 * Submit function
 * Can use either Web3Forms or backend API
 * Web3Forms is simpler for static contact forms
 */
async function submitContactForm(data: FormData) {
  const formData = new FormData();
  formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'default_key');
  formData.append('name', data.name);
  formData.append('email', data.email);
  if (data.phone) formData.append('phone', data.phone);
  formData.append('subject', data.subject);
  formData.append('message', data.message);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to send message. Please try again.');
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || 'Form submission failed');
  }

  return result;
}

/**
 * ContactForm Component
 */
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const { submit, isLoading, error, success, clearError, clearSuccess } =
    useFormSubmit(submitContactForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) clearError();
    if (success) clearSuccess();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }

    const success = await submit(formData);
    if (success) {
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full"
        />
      </div>

      {/* Phone (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+234 903 023 2048"
          className="w-full"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full"
        >
          <option value="">Select a subject...</option>
          <option value="Website Inquiry">Website Inquiry</option>
          <option value="E-Commerce Project">E-Commerce Project</option>
          <option value="SEO Services">SEO Services</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Custom Development">Custom Development</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={6}
          required
          className="w-full resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-sm">
          ✓ Message sent! We'll reply within 24 hours.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary w-full"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-slate-500 text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
