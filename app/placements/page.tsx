'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { supabase, type Placement } from '@/lib/supabase';
import { Award, Building2, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const ALL = 'All';
const FEATURED = 'Featured';

function PlacementCard({ p }: { p: Placement }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-card group cursor-default"
      style={{ aspectRatio: '4/5' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={p.image_url}
        alt={p.candidate_name || 'Placement'}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {p.is_featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
            <Star size={10} fill="currentColor" /> Featured
          </span>
        </div>
      )}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-400"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(7,15,32,0.95) 0%, rgba(7,15,32,0.6) 60%, transparent 100%)'
            : 'linear-gradient(to top, rgba(7,15,32,0.75) 0%, transparent 60%)',
        }}
      >
        {(p.candidate_name || p.company_name) && (
          <div className={`transition-all duration-400 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}`}>
            {p.candidate_name && (
              <p className="text-white font-display font-semibold text-base leading-tight">{p.candidate_name}</p>
            )}
            {p.role && (
              <p className="text-orange-400 text-xs font-medium mt-0.5">{p.role}</p>
            )}
            {p.company_name && (
              <div className="flex items-center gap-1.5 mt-2">
                <Building2 size={12} className="text-slate-400" />
                <p className="text-slate-300 text-xs">{p.company_name}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlacementsPage() {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(ALL);

  useEffect(() => {
    supabase
      .from('placements')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => { setPlacements(data || []); setLoading(false); });
  }, []);

  const filtered = filter === FEATURED ? placements.filter((p) => p.is_featured) : placements;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=1" alt="Placements" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-orange-400" />
            <span className="eyebrow text-orange-400">Successful Placements</span>
            <div className="h-px w-8 bg-orange-400" />
          </div>
          <h1 className="heading-xl text-white mb-8">Successful Placements</h1>
          <blockquote className="max-w-3xl mx-auto">
            <div className="text-orange-400 text-5xl font-display leading-none mb-4">&ldquo;</div>
            <p className="body-lg text-slate-200 leading-relaxed italic">
              Watching careers flourish and teams thrive is the most fulfilling part of what we do. Every placement tells a story of growth, collaboration, and shared success. We&apos;re proud to play a part in connecting people with opportunities that inspire them — and companies with the talent that drives them forward.
            </p>
            <div className="text-orange-400 text-5xl font-display leading-none mt-4 flex justify-end">&rdquo;</div>
          </blockquote>
        </div>
      </section>

      <section className="container-custom py-10">
        <div className="flex items-center gap-3 mb-8">
          <Award size={16} className="text-slate-400" />
          <div className="flex gap-2">
            {[ALL, FEATURED].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs font-medium px-5 py-2 rounded-full border transition-all duration-200 ${
                  filter === f
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-400'
                }`}
              >
                {f} {f === ALL ? `(${placements.length})` : `(${placements.filter((p) => p.is_featured).length})`}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-400 ml-auto">{loading ? 'Loading...' : `${filtered.length} profile${filtered.length !== 1 ? 's' : ''}`}</span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
              <div key={i} className="rounded-xl bg-slate-200 animate-pulse" style={{ aspectRatio: '4/5' }} />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((p) => <PlacementCard key={p.id} p={p} />)}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
            <Award size={32} className="mx-auto mb-4 text-slate-300" />
            <h3 className="font-display font-semibold text-slate-900 mb-2">No Placements Yet</h3>
            <p className="text-slate-500 text-sm">Check back soon — we&apos;re updating our gallery.</p>
          </div>
        )}
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ backgroundColor: '#050506' }}>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange-400" />
                <span className="eyebrow text-orange-400">Your Turn</span>
                <div className="h-px w-8 bg-orange-400" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Your Story Could Be Next
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                Whether you are looking for an accounting job or want to enrol in our training programme, we are here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/jobs" className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
                  Browse Openings <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
