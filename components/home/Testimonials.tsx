'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  designation?: string;
  testimonial_text: string;
  profile_image?: string | null;
  rating?: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-scroll testimonials every 4 seconds
  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
        return;
      }

      setTestimonials(data || []);
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  const prev = () => {
    if (!testimonials.length) return;
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    if (!testimonials.length) return;
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getVisible = () => {
    if (testimonials.length === 0) return [];

    if (testimonials.length === 1) {
      return [testimonials[0]];
    }

    if (testimonials.length === 2) {
      return [testimonials[0], testimonials[1]];
    }

    return [
      (current - 1 + testimonials.length) % testimonials.length,
      current,
      (current + 1) % testimonials.length,
    ].map((i) => testimonials[i]);
  };

  if (loading) {
    return (
      <section className="section-padding bg-black text-white text-center">
        Loading testimonials...
      </section>
    );
  }

  if (!testimonials.length) {
    return (
      <section className="section-padding bg-black text-white text-center">
        No testimonials found
      </section>
    );
  }

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#050506' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#048DD1]" />
            <span className="eyebrow text-[#048DD1]">Testimonials</span>
            <div className="h-px w-8 bg-[#048DD1]" />
          </div>

          <h2 className="heading-lg text-white mb-4">Testimonials</h2>

          <p className="body-md text-slate-400 max-w-xl mx-auto">
            Hear from the students and professionals who have gone through our programme.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          {getVisible().map((t, idx) => (
            <div
  key={`${t.id}-${idx}`}
  className={`rounded-xl p-6 h-[280px] flex flex-col justify-between transition-all duration-500 ${
    idx === 1 ? 'bg-white scale-105 shadow-2xl' : ''
  }`}
              style={
                idx !== 1
                  ? {
                      backgroundColor: '#0d1117',
                      border: '1px solid #1e293b',
                    }
                  : {}
              }
            >
              <Quote
                size={28}
                className="mb-4"
                style={{
                  color: idx === 1 ? '#ED7E1A' : '#265788',
                }}
              />

              <p
  className={`text-sm leading-relaxed mb-5 line-clamp-4 min-h-[96px] ${
    idx === 1 ? 'text-slate-700' : 'text-slate-400'
  }`}
>
                &ldquo;{t.testimonial_text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.profile_image ? (
                    <img
                      src={t.profile_image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full"></div>
                  )}

                  <div>
                    <div
                      className={`font-semibold text-sm ${
                        idx === 1 ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {t.name}
                    </div>

                    {t.designation && (
                      <div className="text-xs text-gray-500">
                        {t.designation}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-0.5">
                  {Array.from({
                    length: t.rating || 5,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#ED7E1A"
                      className="text-[#ED7E1A]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-xl p-6 min-h-[280px] flex flex-col justify-between">
            <Quote size={28} className="mb-4 text-[#ED7E1A]" />

           <p className="text-sm leading-relaxed text-slate-700 mb-5 line-clamp-5 min-h-[120px]">
              &ldquo;{testimonials[current]?.testimonial_text}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {testimonials[current]?.profile_image ? (
                  <img
                    src={testimonials[current]?.profile_image}
                    alt={testimonials[current]?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full"></div>
                )}

                <div>
                  <div className="font-semibold text-sm text-slate-900">
                    {testimonials[current]?.name}
                  </div>

                  {testimonials[current]?.designation && (
                    <div className="text-xs text-gray-500">
                      {testimonials[current]?.designation}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-0.5">
                {Array.from({
                  length: testimonials[current]?.rating || 5,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="#ED7E1A"
                    className="text-[#ED7E1A]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{
              backgroundColor: 'rgba(4,141,209,0.2)',
              border: '1px solid rgba(4,141,209,0.4)',
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  backgroundColor:
                    i === current
                      ? '#048DD1'
                      : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{
              backgroundColor: 'rgba(4,141,209,0.2)',
              border: '1px solid rgba(4,141,209,0.4)',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}