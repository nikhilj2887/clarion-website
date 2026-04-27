import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, CircleCheck as CheckCircle, FileSearch, UserCheck, MapPin, MessageSquare, Star, Briefcase, TrendingUp, Clock, Target, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Job Seekers | Clarion TalentForge',
  description: 'Get the right accounting job faster. Clarion TalentForge matches freshers and experienced accountants with the right roles in Hyderabad\'s MSME market.',
};

const processSteps = [
  {
    step: '01',
    icon: FileSearch,
    title: 'Resume Screening',
    points: ['Analyze your experience', 'Understand your skills', 'Identify suitable roles'],
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Candidate Assessment',
    points: ['Face-to-face interviews', 'Virtual interviews', 'HR evaluation', 'Technical evaluation'],
  },
  {
    step: '03',
    icon: MapPin,
    title: 'Shortlisting',
    points: ['Location preference', 'Salary expectations', 'Industry preference'],
  },
  {
    step: '04',
    icon: MessageSquare,
    title: 'Interview Coordination',
    points: ['Schedule interviews', 'Interview guidance', 'Communication support'],
  },
  {
    step: '05',
    icon: Star,
    title: 'Placement Support',
    points: ['Offer support', 'Joining support'],
  },
];

const experiencedBenefits = [
  { text: 'Find roles matching your experience level' },
  { text: 'Match salary expectations with right companies' },
  { text: 'Connect with reputed MSME businesses' },
  { text: 'Avoid irrelevant job applications' },
  { text: 'Fast-track your hiring timeline' },
];

const whyClarion = [
  { icon: Target, title: 'What companies expect', text: 'We brief you on what hiring managers actually look for — practical skills, not just qualifications.' },
  { icon: Award, title: 'What skills matter', text: 'Tally, GST, TDS, reconciliation — we know which skills get you shortlisted faster.' },
  { icon: TrendingUp, title: 'How to position your profile', text: 'We help you present your experience in the way that resonates with accounting employers.' },
];

const differentiators = [
  { icon: Briefcase, text: 'Specialized accounting recruitment — not a general job portal' },
  { icon: Users, text: 'Multiple job opportunities matched to your profile' },
  { icon: CheckCircle, text: 'No random job forwarding — only relevant roles' },
  { icon: Target, text: 'Right-fit hiring based on your preferences' },
  { icon: MessageSquare, text: 'Personalized support throughout the process' },
];

const opportunityRoles = [
  { title: 'Junior Accountant', tag: 'Entry Level', accent: '#048DD1' },
  { title: 'Accounts Executive', tag: 'Mid Level', accent: '#ED7E1A' },
  { title: 'Senior Accountant', tag: 'Experienced', accent: '#048DD1' },
  { title: 'GST Executive', tag: 'Compliance', accent: '#ED7E1A' },
  { title: 'Tally Operator', tag: 'Software', accent: '#048DD1' },
  { title: 'MIS Executive', tag: 'Reporting', accent: '#ED7E1A' },
];

const lookingFor = [
  'A job change',
  'Better salary',
  'Career growth',
  'Better work environment',
];

export default function JobSeekersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/1181404/pexels-photo-1181404.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1"
            alt="Job seeker"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,5,6,0.97) 0%, rgba(38,87,136,0.82) 65%, rgba(38,87,136,0.55) 100%)' }} />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">For Accountants</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h1 className="heading-xl text-white mb-5 leading-tight">
              Get the Right Accounting Job
              <span className="block" style={{ color: '#048DD1' }}>— Faster.</span>
            </h1>
            <p className="body-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
              Whether you are a fresher starting your career or an experienced accountant looking for better opportunities, we help you get matched with the right roles — not random jobs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: '#048DD1' }}
              >
                Apply for Jobs <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Clarion TalentForge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
                <span className="eyebrow" style={{ color: '#ED7E1A' }}>Why Clarion Talentforge</span>
              </div>
              <h2 className="heading-lg mb-5" style={{ color: '#050506' }}>
                Why Choose<br />Clarion TalentForge?
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                We specialize in Accounting &amp; Finance hiring. Unlike generalist platforms, we understand exactly what employers in this domain are looking for — and we help you meet that bar.
              </p>
              <div className="space-y-5">
                {whyClarion.map((w) => {
                  const Icon = w.icon;
                  return (
                    <div key={w.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}>
                        <Icon size={18} style={{ color: '#048DD1' }} />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-sm mb-1" style={{ color: '#050506' }}>{w.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{w.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card img-zoom">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=580&dpr=1"
                  alt="Accounting professionals"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-card p-4 border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(237,126,26,0.1)' }}>
                    <Clock size={18} style={{ color: '#ED7E1A' }} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg" style={{ color: '#050506' }}>~100%</div>
                    <div className="text-xs text-slate-500">Placement record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Experienced Accountants */}
      <section className="section-padding" style={{ backgroundColor: '#050506' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange-400" />
                <span className="eyebrow text-orange-400">Experienced Professionals</span>
              </div>
              <h2 className="heading-lg text-white mb-5">For Experienced Accountants</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">If you are currently employed but looking for a change, we understand your specific needs. We work with confidentiality and respect for your current role.</p>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Are you looking for:</p>
                <div className="flex flex-wrap gap-2">
                  {lookingFor.map((l) => (
                    <span key={l} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(4,141,209,0.12)', color: '#BAE0F6', border: '1px solid rgba(4,141,209,0.2)' }}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-300 mb-4">We help you:</p>
              <div className="space-y-3">
                {experiencedBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(237,126,26,0.15)' }}>
                      <CheckCircle size={13} style={{ color: '#ED7E1A' }} />
                    </div>
                    <p className="text-sm text-slate-300">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=640&dpr=1"
                alt="Experienced accountant"
                className="w-full object-cover"
                style={{ minHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
              <span className="eyebrow" style={{ color: '#048DD1' }}>The Journey</span>
              <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>Our Recruitment Process</h2>
            <p className="body-md text-slate-500 max-w-xl mx-auto">A clear, transparent process so you always know what comes next.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {/* Horizontal connector on desktop */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 mx-12" style={{ background: 'linear-gradient(to right, rgba(4,141,209,0.15), rgba(4,141,209,0.4), rgba(4,141,209,0.15))' }} />

            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center px-4 mb-8 md:mb-0 group">
                  <div
                    className="relative z-10 w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-5 shadow-card transition-all duration-300 group-hover:scale-105 bg-white"
                    style={{ border: '2px solid rgba(4,141,209,0.2)' }}
                  >
                    <span className="text-xs font-bold mb-1" style={{ color: '#ED7E1A' }}>{step.step}</span>
                    <Icon size={24} style={{ color: '#048DD1' }} />
                  </div>
                  <h3 className="font-display font-bold text-sm mb-3" style={{ color: '#050506' }}>{step.title}</h3>
                  <ul className="space-y-1">
                    {step.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-1.5 text-xs text-slate-500 justify-center">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#048DD1' }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
              <span className="eyebrow" style={{ color: '#ED7E1A' }}>Our Edge</span>
              <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>What Makes Us Different</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-white rounded-xl p-5 shadow-card border border-slate-100 hover:border-brand-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}>
                    <Icon size={17} style={{ color: '#048DD1' }} />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{d.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities We Hire For */}
      <section className="section-padding" style={{ backgroundColor: '#050506' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">Open Roles</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h2 className="heading-lg text-white mb-4">Opportunities We Hire For</h2>
            <p className="body-md text-slate-400 max-w-xl mx-auto">Roles across Hyderabad's MSME sector that we actively recruit for.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {opportunityRoles.map((r) => (
              <div
                key={r.title}
                className="group relative rounded-xl p-5 border border-white/10 flex items-center gap-4 transition-all duration-300 hover:border-opacity-40 hover:-translate-y-0.5"
                style={{ backgroundColor: '#0d1117' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${r.accent}20` }}
                >
                  <Briefcase size={18} style={{ color: r.accent }} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-white">{r.title}</h3>
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full mt-1 inline-block"
                    style={{ backgroundColor: `${r.accent}18`, color: r.accent }}
                  >
                    {r.tag}
                  </span>
                </div>
                <div className="ml-auto">
                  <ArrowRight size={16} style={{ color: r.accent }} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:translate-x-1 transform transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#048DD1' }}
            >
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="rounded-2xl p-10 md:p-16 relative overflow-hidden text-center" style={{ backgroundColor: '#050506' }}>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange-400" />
                <span className="eyebrow text-orange-400">Take the Next Step</span>
                <div className="h-px w-8 bg-orange-400" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Your Next Accounting Role is One Step Away
              </h2>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Submit your profile today and let us match you with the right opportunity in Hyderabad&apos;s growing MSME sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#048DD1' }}
                >
                  Browse Jobs <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Talk to Our Team
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
