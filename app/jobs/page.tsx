'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ApplicationModal from '@/components/jobs/ApplicationModal';
import { supabase, type Job } from '@/lib/supabase';
import { MapPin, Briefcase, Clock, DollarSign, Building2, Search, Filter, ChevronDown, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const ALL = 'All';

function JobCard({ job, onApply }: { job: Job; onApply: (j: Job) => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-card border border-slate-100 hover:border-brand-200 transition-all duration-300 overflow-hidden" id={`apply-${job.id}`}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}>
              <Building2 size={20} style={{ color: '#048DD1' }} />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">{job.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{job.company}</p>
            </div>
          </div>
          {job.is_featured && <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(4,141,209,0.12)', color: '#92400E' }}>Featured</span>}
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-sm text-slate-500"><MapPin size={14} style={{ color: '#048DD1' }} />{job.location}</span>
          <span className="flex items-center gap-1.5 text-sm text-slate-500"><Briefcase size={14} style={{ color: '#048DD1' }} />{job.type}</span>
          {job.experience_required && <span className="flex items-center gap-1.5 text-sm text-slate-500"><Clock size={14} style={{ color: '#048DD1' }} />{job.experience_required}</span>}
          {job.salary_range && <span className="flex items-center gap-1.5 text-sm text-slate-500"><DollarSign size={14} style={{ color: '#048DD1' }} />{job.salary_range}</span>}
        </div>

        {job.department && <div className="mb-4"><span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">{job.department}</span></div>}

        <p className={`text-sm text-slate-600 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>{job.description}</p>

        {expanded && job.requirements?.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-800 mb-2">Key Requirements</h4>
            <ul className="space-y-1.5">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />{r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
          <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1.5 text-sm text-brand-600 font-medium hover:text-orange-500 transition-colors duration-200">
            {expanded ? 'Show Less' : 'View Details'} <ChevronDown size={15} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={() => onApply(job)} className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
            Apply Now <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState(ALL);
  const [activeDept, setActiveDept] = useState(ALL);
  const [selected, setSelected] = useState<Job | null>(null);

  useEffect(() => {
    supabase.from('jobs').select('*').eq('is_active', true)
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .then(({ data }) => { setJobs(data || []); setLoading(false); });
  }, []);

  const types = [ALL, ...Array.from(new Set(jobs.map((j) => j.type)))];
  const depts = [ALL, ...Array.from(new Set(jobs.map((j) => j.department).filter(Boolean) as string[]))];
  const filtered = jobs.filter((j) => {
    const s = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()) || j.location.toLowerCase().includes(search.toLowerCase());
    return s && (activeType === ALL || j.type === activeType) && (activeDept === ALL || j.department === activeDept);
  });

  const generalJob: Job = { id: 'general', title: 'General Application', company: 'Clarion Talentforge', location: '', type: 'Full-Time', salary_range: null, description: '', requirements: [], experience_required: null, department: null, is_featured: false, is_active: true, created_at: '' };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"><img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=1" alt="Jobs" className="w-full h-full object-cover" /></div>
        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 mb-4"><div className="h-px w-8 bg-orange-500" /><span className="eyebrow text-orange-400">Opportunities</span><div className="h-px w-8 bg-orange-500" /></div>
          <h1 className="heading-xl text-white mb-4">Job Openings</h1>
          <p className="body-lg text-slate-300 max-w-xl mx-auto mb-8">Accounting and finance opportunities in MSME markets in Hyderabad, available through Clarion Talentforge.</p>
          <div className="max-w-lg mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by title, company, or location..." className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-400 text-slate-900 placeholder:text-slate-400" />
          </div>
        </div>
      </section>

      <section className="container-custom py-10">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2"><Filter size={15} className="text-slate-400" /><span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Filter:</span></div>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => <button key={t} onClick={() => setActiveType(t)} className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${activeType === t ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-brand-400'}`}>{t}</button>)}
          </div>
          {depts.length > 2 && <><div className="w-px h-5 bg-slate-200" /><div className="flex flex-wrap gap-2">{depts.slice(0, 5).map((d) => <button key={d} onClick={() => setActiveDept(d)} className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${activeDept === d ? 'border-orange-500 bg-orange-500 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-orange-400'}`}>{d}</button>)}</div></>}
        </div>

        <p className="text-sm text-slate-500 mb-6">{loading ? 'Loading...' : `${filtered.length} position${filtered.length !== 1 ? 's' : ''} found`}</p>

        <div className="grid gap-5">
          {loading ? [1,2,3,4].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-card border border-slate-100 p-6 animate-pulse">
              <div className="flex gap-4 mb-4"><div className="w-12 h-12 rounded-xl bg-slate-200 flex-shrink-0" /><div className="flex-1"><div className="h-5 bg-slate-200 rounded w-2/3 mb-2" /><div className="h-3 bg-slate-100 rounded w-1/3" /></div></div>
              <div className="flex gap-3 mb-3">{[1,2,3].map(j=><div key={j} className="h-4 bg-slate-100 rounded w-20" />)}</div>
              <div className="space-y-2 mb-4"><div className="h-3 bg-slate-100 rounded w-full" /><div className="h-3 bg-slate-100 rounded w-5/6" /><div className="h-3 bg-slate-100 rounded w-4/6" /></div>
              <div className="h-10 bg-slate-100 rounded" />
            </div>
          )) : filtered.length > 0 ? filtered.map((job) => <JobCard key={job.id} job={job} onApply={setSelected} />) : (
            <div className="text-center py-16 bg-white rounded-xl border border-slate-100">
              <Briefcase size={32} className="mx-auto mb-4 text-slate-300" />
              <h3 className="font-display font-semibold text-slate-900 mb-2">No Positions Found</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mb-4">No positions match your current filters. Try adjusting your search.</p>
              <button onClick={() => { setSearch(''); setActiveType(ALL); setActiveDept(ALL); }} className="text-sm font-medium text-brand-600 hover:text-orange-500 transition-colors">Clear filters</button>
            </div>
          )}
        </div>

        <div className="mt-10 rounded-2xl p-8 text-center" style={{ backgroundColor: '#050506' }}>
          <h3 className="font-display font-bold text-xl text-white mb-2">Looking for an accounting job?</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">If you are a graduate student seeking to hone your skills in accounting, or are planning to make it your major, get in touch with us.</p>
          <button onClick={() => setSelected(generalJob)} className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
            Apply Now <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {selected && <ApplicationModal job={selected} onClose={() => setSelected(null)} />}
      <Footer />
    </main>
  );
}
