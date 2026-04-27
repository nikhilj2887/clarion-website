import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, CircleCheck as CheckCircle, Search, ClipboardList, UserCheck, CalendarCheck, Handshake, Building2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hire Accounting Talent | Clarion TalentForge',
  description: 'End-to-end accounting recruitment services for MSME businesses. From requirement understanding to successful onboarding — Clarion TalentForge handles it all.',
};

const process = [
  {
    step: '01',
    icon: Search,
    title: 'Requirement Understanding',
    description: 'We begin by deeply understanding your expectations — the role, the skills, the seniority, and the culture fit you need.',
    points: ['Role scope & responsibilities', 'Technical skill requirements', 'Team structure & reporting lines'],
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Candidate Screening',
    description: 'Every candidate goes through a practical and technical assessment to ensure job-readiness before we forward any profile.',
    points: ['Location preferences mapped', 'Salary expectations assessed', 'Work style & expectations aligned'],
  },
  {
    step: '03',
    icon: UserCheck,
    title: 'Shortlisting',
    description: 'Only pre-screened, suitable profiles that match your requirements are shared — no bulk CV drops.',
    points: ['Relevant experience validated', 'Skill match confirmed', 'Cultural fit considered'],
  },
  {
    step: '04',
    icon: CalendarCheck,
    title: 'Interview Coordination',
    description: 'We manage the entire interview logistics — scheduling, reminders, and candidate communication.',
    points: ['Interview scheduling handled', 'Candidate briefing provided', 'Feedback loop maintained'],
  },
  {
    step: '05',
    icon: Handshake,
    title: 'Joining Support',
    description: 'Our support does not end at offer. We coordinate end-to-end until the candidate successfully onboards.',
    points: ['Offer negotiation support', 'Notice period coordination', 'Day-one onboarding follow-up'],
  },
];

const roles = [
  { title: 'Junior Accountant', tag: 'Fresher / Experienced', color: 'rgba(4,141,209,0.08)', border: 'rgba(4,141,209,0.2)' },
  { title: 'Accounts Executive', tag: 'Mid Level', color: 'rgba(237,126,26,0.08)', border: 'rgba(237,126,26,0.2)' },
  { title: 'Senior Accountant', tag: 'Experienced', color: 'rgba(4,141,209,0.08)', border: 'rgba(4,141,209,0.2)' },
  { title: 'Accounts Manager', tag: 'Leadership', color: 'rgba(237,126,26,0.08)', border: 'rgba(237,126,26,0.2)' },
  { title: 'Chartered Accountant', tag: 'CA Qualified', color: 'rgba(4,141,209,0.08)', border: 'rgba(4,141,209,0.2)' },
  { title: 'Semi-Qualified CA', tag: 'CA Finalist', color: 'rgba(237,126,26,0.08)', border: 'rgba(237,126,26,0.2)' },
  { title: 'Cost Accountant', tag: 'CMA / Costing', color: 'rgba(4,141,209,0.08)', border: 'rgba(4,141,209,0.2)' },
  { title: 'Company Secretary', tag: 'CS Qualified', color: 'rgba(237,126,26,0.08)', border: 'rgba(237,126,26,0.2)' },
];

const whyUs = [
  { icon: ShieldCheck, title: 'Domain Specialists', text: 'We only recruit in accounting & finance — we speak your language and understand the skill gaps.' },
  { icon: UserCheck, title: 'Pre-Screened Talent', text: 'Every candidate is assessed before your time is spent. No unqualified profiles, ever.' },
  { icon: Zap, title: 'Faster Hiring Cycles', text: 'Our ready talent pipeline reduces your time-to-hire significantly.' },
  { icon: TrendingUp, title: 'MSME Market Experts', text: '75+ placements in Hyderabad\'s MSME sector — we know exactly what works.' },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1"
            alt="Hiring talent"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,5,6,0.97) 0%, rgba(38,87,136,0.85) 60%, rgba(38,87,136,0.6) 100%)' }} />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">For Employers</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h1 className="heading-xl text-white mb-5 leading-tight">
              Recruitment Process
              <span className="block" style={{ color: '#048DD1' }}>&amp; Services</span>
            </h1>
            <p className="body-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
              We handle your entire accounting recruitment — from understanding the role to successful onboarding. Pre-screened, job-ready professionals. No wasted interviews.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919059783619"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: '#048DD1' }}
              >
                Hire Talent Now <ArrowRight size={16} />
              </a>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                View Open Roles
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="relative z-10 container-custom mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { value: '75+', label: 'Successful Placements' },
              { value: '~100%', label: 'Placement Rate' },
              { value: 'MSME', label: 'Market Focus' },
              { value: 'CA-Led', label: 'Screening Process' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 border border-white/10 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}>
                <div className="font-display font-bold text-xl text-white mb-0.5">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
              <span className="eyebrow" style={{ color: '#ED7E1A' }}>Why Clarion Talentforge</span>
              <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>Why Companies Trust Us</h2>
            <p className="body-md text-slate-500 max-w-xl mx-auto">Specialized accounting recruitment — not a generalist job board.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-brand-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}>
                    <Icon size={22} style={{ color: '#048DD1' }} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#050506' }}>{w.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-padding" style={{ backgroundColor: '#050506' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">How It Works</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h2 className="heading-lg text-white mb-4">Our Recruitment Process</h2>
            <p className="body-md text-slate-400 max-w-xl mx-auto">A structured five-step process that delivers the right hire, every time.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-6 rounded-2xl p-6 md:p-8 border border-white/8 transition-all duration-300 hover:border-brand-500/30"
                  style={{ backgroundColor: '#0d1117' }}
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white mb-2"
                      style={{ backgroundColor: '#048DD1', boxShadow: '0 0 0 3px rgba(4,141,209,0.2)' }}
                    >
                      {p.step}
                    </div>
                    {i < process.length - 1 && (
                      <div className="flex-1 w-px mt-1" style={{ backgroundColor: 'rgba(4,141,209,0.2)' }} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(4,141,209,0.15)' }}>
                        <Icon size={16} style={{ color: '#048DD1' }} />
                      </div>
                      <h3 className="font-display font-bold text-base text-white">{p.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.points.map((pt) => (
                        <span
                          key={pt}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                          style={{ backgroundColor: 'rgba(237,126,26,0.1)', color: '#ED7E1A', border: '1px solid rgba(237,126,26,0.2)' }}
                        >
                          <CheckCircle size={11} />
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles We Hire For */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
              <span className="eyebrow" style={{ color: '#048DD1' }}>Open Positions</span>
              <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>Roles We Hire For</h2>
            <p className="body-md text-slate-500 max-w-xl mx-auto">From entry-level accountants to senior finance leaders — we cover the full spectrum of accounting talent.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {roles.map((r) => (
              <div
                key={r.title}
                className="group relative rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card bg-white"
                style={{ borderColor: r.border }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: r.border.includes('4,141') ? '#048DD1' : '#ED7E1A' }}
                />
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: r.color }}>
                  <Building2 size={18} style={{ color: r.border.includes('4,141') ? '#048DD1' : '#ED7E1A' }} />
                </div>
                <h3 className="font-display font-bold text-base mb-1" style={{ color: '#050506' }}>{r.title}</h3>
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: r.color, color: r.border.includes('4,141') ? '#014264' : '#4C2503' }}>
                  {r.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/919059783619"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#048DD1' }}
            >
              Hire Talent Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=1" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container-custom text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-orange-400" />
            <span className="eyebrow text-orange-400">Get Started</span>
            <div className="h-px w-8 bg-orange-400" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Build Your Accounting Team?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Tell us your requirements and we will get back to you with pre-screened profiles within 48 hours.
          </p>
          <a
            href="https://wa.me/919059783619"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: '#048DD1' }}
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
