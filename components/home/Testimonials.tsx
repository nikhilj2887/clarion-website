'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Akhilesh Krishna', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1', text: 'Clarion Talent Forge truly understands the struggles of aspiring accountants. Their comprehensive courses have transformed my understanding of financial reporting!' },
  { id: 2, name: 'Sai Kiran', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1', text: "Thanks to Clarion, I've gained hands-on experience with accounting software. The real-world scenarios in the course are invaluable for my career!" },
  { id: 3, name: 'Sai Keerthi', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1', text: 'I was lost in my accounting journey, but Clarion helped me unlock my potential. Their 30-day course is well-structured and incredibly effective!' },
  { id: 4, name: 'Kumar Rayudu', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1', text: "The practical training at Clarion is unmatched. I've seen a significant improvement in my skills, which has boosted my confidence in the workplace." },
  { id: 5, name: 'Uma Maheshwar Reddy', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1', text: 'Clarion Talent Forge offers the perfect blend of theory and practice. Their approach has made complex topics easy to grasp and apply.' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const getVisible = () => [
    (current - 1 + testimonials.length) % testimonials.length,
    current,
    (current + 1) % testimonials.length,
  ].map((i) => testimonials[i]);

  return (
    <section className="section-padding" style={{ backgroundColor: '#050506' }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
            <span className="eyebrow" style={{ color: '#048DD1' }}>Testimonials</span>
            <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
          </div>
          <h2 className="heading-lg text-white mb-4">Testimonials</h2>
          <p className="body-md text-slate-400 max-w-xl mx-auto">Hear from the students and professionals who have gone through our programme.</p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          {getVisible().map((t, idx) => (
            <div key={`${t.id}-${idx}`} className={`rounded-xl p-6 transition-all duration-500 ${idx === 1 ? 'bg-white scale-105 shadow-2xl' : ''}`} style={idx !== 1 ? { backgroundColor: '#0d1117', border: '1px solid #1e293b' } : {}}>
              <Quote size={28} className="mb-4" style={{ color: idx === 1 ? '#ED7E1A' : '#265788' }} />
              <p className={`text-sm leading-relaxed mb-5 ${idx === 1 ? 'text-slate-700' : 'text-slate-400'}`}>&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className={`font-semibold text-sm ${idx === 1 ? 'text-slate-900' : 'text-white'}`}>{t.name}</div>
                </div>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="#ED7E1A" style={{ color: '#ED7E1A' }} />)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mb-8">
          <div className="bg-white rounded-xl p-6">
            <Quote size={28} className="mb-4" style={{ color: '#ED7E1A' }} />
            <p className="text-sm leading-relaxed text-slate-700 mb-5">&ldquo;{testimonials[current].text}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-10 h-10 rounded-full object-cover" />
                <div className="font-semibold text-sm text-slate-900">{testimonials[current].name}</div>
              </div>
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="#ED7E1A" style={{ color: '#ED7E1A' }} />)}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.2)', border: '1px solid rgba(4,141,209,0.4)' }} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300" style={{ width: i === current ? '24px' : '8px', height: '8px', backgroundColor: i === current ? '#048DD1' : 'rgba(255,255,255,0.25)' }} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.2)', border: '1px solid rgba(4,141,209,0.4)' }} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
