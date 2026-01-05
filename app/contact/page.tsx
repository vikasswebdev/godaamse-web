'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1f2d3d] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#446888]">
            Have questions about Godam SE? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-[#EBF0F5]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1f2d3d]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-[#C9D7E3] bg-white px-3 py-2 text-[#1f2d3d] placeholder-[#779bbb] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1f2d3d]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-[#C9D7E3] bg-white px-3 py-2 text-[#1f2d3d] placeholder-[#779bbb] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#1f2d3d]"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-[#C9D7E3] bg-white px-3 py-2 text-[#1f2d3d] placeholder-[#779bbb] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1f2d3d]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-lg border border-[#C9D7E3] bg-white px-3 py-2 text-[#1f2d3d] placeholder-[#779bbb] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    placeholder="Your message"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-lg bg-[#44CE4B]/10 border border-[#44CE4B]/20 p-4 text-sm text-[#2ea834]">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-lg bg-[#FFCCD1] border border-[#ff382d]/20 p-4 text-sm text-[#ff382d]">
                    Something went wrong. Please try again.
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B8941F] disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
              Contact Information
            </h2>
            <div className="mt-8 space-y-4 text-lg text-[#446888]">
              <p>
                <span className="font-semibold text-[#1f2d3d]">Email:</span>{' '}
                <a
                  href="mailto:info@godamse.com"
                  className="text-[#D4AF37] underline hover:text-[#B8941F]"
                >
                  info@godamse.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#1f2d3d]">Phone:</span>{' '}
                <a
                  href="tel:+1234567890"
                  className="text-[#D4AF37] underline hover:text-[#B8941F]"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
