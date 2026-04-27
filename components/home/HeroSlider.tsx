'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Users, Building2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    eyebrow: 'Clarion Talentforge',
    title: 'Bridging the Gap between',
    highlight: 'Accountants and Accounting Jobs.',
    subtitle: 'Bridging the gap between accountants and accounting jobs in MSME markets in Hyderabad.',
    cta1: { label: 'Explore Training', href: '/training' },
    cta2: { label: 'Learn About Us', href: '/about' },
    stat1: { value: '6-Weeks', label: 'Training Programme' },
    stat2: { value: '~100%', label: 'Placement Guaranteed *' },
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    eyebrow: 'For Employers',
    title: 'We help companies',
    highlight: 'hire accounting talent.',
    subtitle: 'We connect MSME businesses and CA firms with trained, job-ready accounting professionals who hit the ground running.',
    cta1: { label: 'Get In Touch', href: '/clients' },
    cta2: { label: 'About Us', href: '/about' },
    stat1: { value: '6-Weeks', label: 'Training Programme' },
    stat2: { value: '~100%', label: 'Placement Guaranteed *' },
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1181404/pexels-photo-1181404.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    eyebrow: 'For Candidates',
    title: 'We help accountants',
    highlight: 'find the right job.',
    subtitle: 'Whether you are a seasoned professional or a budding accountant, Clarion Talentforge guides you to the right opportunity.',
    cta1: { label: 'Browse Opportunities', href: '/job-seekers' },
    cta2: { label: 'Contact Us', href: '/contact' },
    stat1: { value: '6-Weeks', label: 'Training Programme' },
    stat2: { value: '~100%', label: 'Placement Guaranteed *' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => setCurrent(i), []);
  const next = useCallback(() => go((current + 1) % slides.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const s = slides[current];

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div key={slide.id} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" style={{ transform: i === current ? 'scale(1.03)' : 'scale(1)', transition: 'transform 6s ease-out' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(5,5,6,0.93) 0%, rgba(38,87,136,0.78) 55%, rgba(38,87,136,0.45) 100%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(5,5,6,0.65) 0%, transparent 50%)' }} />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-3xl">
            <div key={`e-${current}`} className="inline-flex items-center gap-2 mb-5 animate-fade-in">
              <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#ED7E1A' }}>{s.eyebrow}</span>
            </div>

            <h1 key={`t-${current}`} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-5 animate-fade-in-up">
              {s.title}
              {s.highlight && <span className="block" style={{ color: '#048DD1' }}>{s.highlight}</span>}
            </h1>

            <p key={`s-${current}`} className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl animate-fade-in-up">{s.subtitle}</p>

            <div key={`c-${current}`} className="flex flex-wrap items-center gap-4 mb-12 animate-fade-in-up">
              <Link href={s.cta1.href} className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ backgroundColor: '#048DD1' }}>
                {s.cta1.label} <ArrowRight size={16} />
              </Link>
              <Link href={s.cta2.href} className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                {s.cta2.label}
              </Link>
            </div>

            <div key={`st-${current}`} className="flex items-center gap-8 animate-fade-in-up">
              {[s.stat1, s.stat2].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i === 1 && <div className="w-px h-10 bg-white/20" />}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(4,141,209,0.18)', border: '1px solid rgba(4,141,209,0.4)' }}>
                    {i === 0 ? <Users size={18} style={{ color: '#048DD1' }} /> : <Building2 size={18} style={{ color: '#048DD1' }} />}
                  </div>
                  <div>
                    <div className="text-xl font-display font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.25)', border: '1px solid rgba(4,141,209,0.4)' }} aria-label="Previous">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.25)', border: '1px solid rgba(4,141,209,0.4)' }} aria-label="Next">
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => go(i)} className="rounded-full transition-all duration-300" style={{ width: i === current ? '28px' : '8px', height: '8px', backgroundColor: i === current ? '#ED7E1A' : 'rgba(255,255,255,0.4)' }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div key={`p-${current}`} className={`h-full ${!paused ? 'hero-progress-animate' : ''}`} style={{ backgroundColor: '#ED7E1A' }} />
      </div>
    </section>
  );
}
