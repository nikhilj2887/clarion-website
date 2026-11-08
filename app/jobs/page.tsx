'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Job } from '@/lib/supabase';
import {
  MapPin,
  Briefcase,
  Clock,
  Building2,
  Search,
  Filter,
  ChevronDown,
  ArrowRight,
  CircleCheck as CheckCircle
} from 'lucide-react';


const ALL = 'All';

// Replace with your actual WhatsApp number
const WHATSAPP_NUMBER = '919059783619';

function openWhatsApp(jobTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'job_application_click', {
      event_category: 'career',
      event_label: jobTitle,
      value: 1,
    });
  }

  const message = encodeURIComponent(
    `Hi Clarion Talent, I am interested in applying for ${jobTitle}.`
  );

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    '_blank'
  );
}

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-card border border-slate-100 hover:border-brand-200 transition-all duration-300 overflow-hidden"
      id={`apply-${job.id}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}
            >
              <Building2 size={20} style={{ color: '#048DD1' }} />
            </div>

            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">
                {job.title}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{job.company}</p>
            </div>
          </div>

          {job.is_featured && (
            <span
              className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(4,141,209,0.12)',
                color: '#92400E'
              }}
            >
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={14} style={{ color: '#048DD1' }} />
            {job.location}
          </span>

          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <Briefcase size={14} style={{ color: '#048DD1' }} />
            {job.type}
          </span>

          {job.experience_required && (
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Clock size={14} style={{ color: '#048DD1' }} />
              {job.experience_required}
            </span>
          )}

          {job.salary_range && (
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <span
                className="text-sm font-semibold"
                style={{ color: '#048DD1' }}
              >
                ₹
              </span>
              {job.salary_range}
            </span>
          )}
        </div>

        {job.department && (
          <div className="mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
              {job.department}
            </span>
          </div>
        )}

        {expanded ? (
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            {job.description
              .replace(/\\r\\n|\\n|\\r/g, '\n')
              .replace(/\r\n?/g, '\n')
              .split(/\n+/)
              .flatMap((line) => line.split(/\s+-\s+(?=[A-Z])/))
              .map((line) => line.trim().replace(/^[-•*]\s*/, ''))
              .filter(Boolean)
              .reduce<{ heading: string | null; items: string[] }[]>((sections, line) => {
                const headingMatch = line.match(/^(Key Responsibilities|Responsibilities|Required Skills|Skills Required|Requirements|Qualifications)\s*:\s*(.*)$/i);
                if (headingMatch) {
                  sections.push({ heading: headingMatch[1], items: headingMatch[2] ? [headingMatch[2]] : [] });
                } else if (sections.length) {
                  sections[sections.length - 1].items.push(line);
                } else {
                  sections.push({ heading: null, items: [line] });
                }
                return sections;
              }, [])
              .map((section, sectionIndex) => (
                <section key={sectionIndex}>
                  {section.heading && (
                    <h4 className="mb-2 font-semibold text-slate-800">{section.heading}</h4>
                  )}
                  {section.heading || section.items.length > 1 ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  ) : (
                    <p>{section.items[0]}</p>
                  )}
                </section>
              ))}
          </div>
        ) : (
          <p className="line-clamp-3 text-sm text-slate-600 leading-relaxed">
            {job.description}
          </p>
        )}

        {expanded && job.requirements?.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-800 mb-2">
              Key Requirements
            </h4>

            <ul className="space-y-1.5">
              {job.requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle
                    size={14}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
  if (!expanded) {
    window.gtag?.('event', 'job_view_details', {
      event_category: 'engagement',
      event_label: job.title,
    });
  }

  setExpanded(!expanded);
}}
            className="flex items-center gap-1.5 text-sm text-brand-600 font-medium hover:text-orange-500 transition-colors duration-200"
          >
            {expanded ? 'Show Less' : 'View Details'}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          <button
            onClick={() => openWhatsApp(job.title)}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#048DD1',
              color: '#ffffff'
            }}
          >
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

  useEffect(() => {
    fetch('/api/jobs').then(async (response) => {
      if (!response.ok) throw new Error('Unable to load jobs');
      return response.json();
    }).then(({ jobs }) => setJobs(jobs)).catch(console.error).finally(() => setLoading(false));
  }, []);

  const types = [ALL, ...Array.from(new Set(jobs.map((j) => j.type)))];

  const depts = [
    ALL,
    ...Array.from(
      new Set(
        jobs.map((j) => j.department).filter(Boolean) as string[]
      )
    )
  ];

  const filtered = jobs.filter((job) => {
    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    return (
      matchesSearch &&
      (activeType === ALL || job.type === activeType) &&
      (activeDept === ALL || job.department === activeDept)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="container-custom py-10">
        <p className="text-sm text-slate-500 mb-6">
          {loading
            ? 'Loading...'
            : `${filtered.length} position${
                filtered.length !== 1 ? 's' : ''
              } found`}
        </p>

        <div className="grid gap-5">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-8 text-center"
          style={{ backgroundColor: '#050506' }}
        >
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Looking for an accounting job?
          </h3>

          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            Connect with our team directly on WhatsApp.
          </p>

          <button
            onClick={() =>
              openWhatsApp('accounting job opportunities')
            }
            className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#048DD1',
              color: '#ffffff'
            }}
          >
            Apply Now <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}