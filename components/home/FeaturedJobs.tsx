'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Briefcase, Clock, DollarSign, ArrowRight, Building2 } from 'lucide-react';
import { supabase, type Job } from '@/lib/supabase';

function JobCard({ job }: { job: Job }) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:border-gold-200 card-hover flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(26,58,107,0.08)' }}>
            <Building2 size={18} style={{ color: '#1A3A6B' }} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-navy-900 text-base leading-tight">{job.title}</h3>
            <p className="text-sm text-slate-500 mt-0.5">{job.company}</p>
          </div>
        </div>
        {job.department && (
          <span className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-navy-50 text-navy-700 border border-navy-100">{job.department.split(' ')[0]}</span>
        )}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
        <span className="flex items-center gap-1.5 text-xs text-slate-500"><MapPin size={12} style={{ color: '#C9A84C' }} />{job.location}</span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500"><Briefcase size={12} style={{ color: '#C9A84C' }} />{job.type}</span>
        {job.experience_required && <span className="flex items-center gap-1.5 text-xs text-slate-500"><Clock size={12} style={{ color: '#C9A84C' }} />{job.experience_required}</span>}
        {job.salary_range && <span className="flex items-center gap-1.5 text-xs text-slate-500"><DollarSign size={12} style={{ color: '#C9A84C' }} />{job.salary_range}</span>}
      </div>

      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-grow">{job.description}</p>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link href="/jobs" className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors duration-200 flex items-center gap-1.5 group">
          View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link href="/jobs" className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#C9A84C', color: '#0C1A36' }}>
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('jobs').select('*').eq('is_featured', true).eq('is_active', true).order('created_at', { ascending: false }).limit(3)
      .then(({ data }) => { setJobs(data || []); setLoading(false); });
  }, []);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold-500" />
              <span className="eyebrow text-gold-600">Current Openings</span>
            </div>
            <h2 className="heading-lg text-navy-900">Featured Job Openings</h2>
          </div>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors duration-200 group flex-shrink-0">
            View All Openings <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? [1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-card border border-slate-100 animate-pulse">
              <div className="flex gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-slate-200" /><div className="flex-1"><div className="h-4 bg-slate-200 rounded w-3/4 mb-2" /><div className="h-3 bg-slate-100 rounded w-1/2" /></div></div>
              <div className="flex gap-3 mb-3">{[1,2,3].map(j=><div key={j} className="h-3 bg-slate-100 rounded w-16" />)}</div>
              <div className="space-y-2 mb-4"><div className="h-3 bg-slate-100 rounded w-full" /><div className="h-3 bg-slate-100 rounded w-5/6" /></div>
              <div className="h-8 bg-slate-100 rounded mt-4" />
            </div>
          )) : jobs.length > 0 ? jobs.map((job) => <JobCard key={job.id} job={job} />) : (
            <div className="col-span-3 text-center py-12 text-slate-400">No featured openings at this time. Check back soon.</div>
          )}
        </div>

        <div className="text-center mt-10">
          <Link href="/jobs" className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-md text-sm transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#0C1A36', color: '#ffffff' }}>
            Explore All Job Openings <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
