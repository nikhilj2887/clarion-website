import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { BookOpen, Users, Target, CircleCheck as CheckCircle, ArrowRight, GraduationCap, ClipboardList, Layers, ChartBar as BarChart3, Briefcase, Calculator, FileText, Building2, CreditCard, Monitor, BookCheck, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training | Clarion TalentForge',
  description: 'Industry-oriented accounting and finance training programs by Clarion TalentForge LLP — designed by practicing CAs to create job-ready professionals.',
};

const skillAreas = [
  { icon: Calculator, label: 'Practical Accounting & Bookkeeping' },
  { icon: FileText, label: 'GST Computation & Compliance' },
  { icon: CreditCard, label: 'TDS Calculation & Application' },
  { icon: Scale, label: 'Income Tax Fundamentals' },
  { icon: Monitor, label: 'Tally with Practical Transactions' },
  { icon: BookCheck, label: 'Financial Statement Preparation' },
  { icon: Building2, label: 'Bank & Vendor Reconciliation' },
  { icon: ClipboardList, label: 'Invoice Processing & Documentation Practices' },
];

const mentorContributions = [
  'Sharing real-time industry experiences',
  'Demonstrating practical problem-solving approaches',
  'Explaining consequences of accounting and compliance errors',
  'Guiding students on professional standards and ethics',
  'Providing exposure to real business scenarios',
];

const methodology = [
  {
    step: '01',
    icon: Target,
    title: 'Skill Gap Identification',
    description: 'Assessment of existing knowledge and identification of practical skill gaps.',
  },
  {
    step: '02',
    icon: Layers,
    title: 'Industry-Oriented Curriculum',
    description: 'Modules designed based on workflows followed in CA firms and corporate environments.',
  },
  {
    step: '03',
    icon: BookOpen,
    title: 'Practical Implementation',
    description: 'Hands-on exercises, transaction-based learning, and case discussions.',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Continuous Evaluation',
    description: 'Periodic assessments to measure skill improvement.',
  },
  {
    step: '05',
    icon: Briefcase,
    title: 'Employability Readiness',
    description: 'Focus on workplace documentation, communication skills, and professional conduct.',
  },
];

const valuePoints = [
  'Practical accounting competency aligned with industry needs',
  'Understanding of statutory compliance processes',
  'Ability to work independently on accounting tasks',
  'Reduced workplace learning curve',
  'Improved employability and interview readiness',
];

const philosophy = [
  'Case-based learning using real accounting scenarios',
  'Exposure to actual accounting workflows',
  'Understanding statutory compliance timelines',
  'Identification and correction of common accounting errors',
  'Hands-on training using accounting software',
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Training"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,5,6,0.95) 0%, rgba(38,87,136,0.85) 100%)' }} />
        </div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">Skill Development</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h1 className="heading-xl text-white mb-6 leading-tight">
              Accounting Training
              <span className="block" style={{ color: '#048DD1' }}>That Gets You Hired</span>
            </h1>
            <p className="body-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Industry-oriented training programs designed by practicing Chartered Accountants — bridging the gap between academic education and real-world accounting practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919059783619"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: '#048DD1' }}
              >
                Enrol Now <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-md text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Talk to a Counsellor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: '#048DD1' }}>
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            {[
              { value: '6 Weeks', label: 'Programme Duration' },
              { value: '~100% ', label: 'Placement Record' },
              { value: '125+', label: 'Students Trained' },
              { value: 'CA-Led', label: 'Mentorship' },
            ].map((s) => (
              <div key={s.label} className="py-2">
                <div className="font-display font-bold text-2xl">{s.value}</div>
                <div className="text-xs text-blue-100 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* Accounting Launchpad Course */}
<section className="section-padding bg-white">
  <div className="container-custom">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left Side */}
      <div>
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-orange-400" />
          <span className="eyebrow text-orange-400">
            Flagship Program
          </span>
        </div>

        <h2 className="heading-lg mb-5 text-black">
          Accounting Launchpad Course
        </h2>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Our flagship Accounting Launchpad Course helps graduates become 
          job-ready with practical accounting knowledge, GST, TDS, taxation, 
          Tally, financial statements and real-world business workflows.
        </p>

        {/* Course details */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { title: "Duration", value: "6 Weeks" },
            { title: "Mode", value: "Online / Offline" },
            { title: "Eligibility", value: "B.Com / M.Com / MBA / CA Inter" },
            { title: "Placement", value: "Almost 100%" }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-xl p-4 border border-slate-100"
            >
              <h4 className="font-semibold text-black">
                {item.title}
              </h4>
              <p className="text-sm text-slate-500">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="/syllabus/accounting-launchpad.pdf"
            download
            className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600"
          >
            Download Syllabus
          </a>

          <a
            href="https://wa.me/919059783619"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-slate-300"
          >
            Enroll Now
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Accounting Launchpad Course"
          className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
        />

        {/* Syllabus preview */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <h3 className="font-semibold text-lg mb-4">
            What You'll Learn
          </h3>

          <ul className="space-y-3 text-slate-600 text-sm">
            <li>✓ Practical Accounting</li>
            <li>✓ GST Filing & Compliance</li>
            <li>✓ TDS & Income Tax Basics</li>
            <li>✓ Tally ERP</li>
            <li>✓ Financial Statements</li>
            <li>✓ Interview Preparation</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* About Clarion Talentforge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
                <span className="eyebrow" style={{ color: '#ED7E1A' }}>About Us</span>
              </div>
              <h2 className="heading-lg mb-6" style={{ color: '#050506' }}>About Clarion TalentForge LLP</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Clarion TalentForge LLP is a specialized organization engaged in skill development, training, and recruitment services in the accounting and finance domain. The organization focuses on bridging the gap between academic education and industry requirements through practical, industry-oriented training programs.
                </p>
                <p>
                  The training programs are designed in consultation with practicing Chartered Accountants and industry professionals to ensure alignment with real-time business practices, statutory compliance requirements, and workplace expectations.
                </p>
                <p>
                  Clarion TalentForge aims to contribute to skill development initiatives by creating industry-ready accounting professionals capable of handling accounting and compliance responsibilities efficiently from the initial stages of employment.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card img-zoom">
                <img
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=560&dpr=1"
                  alt="Training session"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-card p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(4,141,209,0.1)' }}>
                    <GraduationCap size={20} style={{ color: '#048DD1' }} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg" style={{ color: '#050506' }}>CA-Mentored</div>
                    <div className="text-xs text-slate-500">Industry professionals as trainers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="section-padding" style={{ backgroundColor: '#050506' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">Our Approach</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h2 className="heading-lg text-white mb-4">Training Philosophy</h2>
            <p className="body-md text-slate-400 max-w-2xl mx-auto">
              A practical and application-based learning approach focusing on real business processes rather than theoretical learning alone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-brand-500/40"
                style={{ backgroundColor: '#0d1117' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(4,141,209,0.15)' }}>
                  <CheckCircle size={16} style={{ color: '#048DD1' }} />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Skill Development Areas */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
              <span className="eyebrow" style={{ color: '#048DD1' }}>Curriculum</span>
              <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>Core Skill Development Areas</h2>
            <p className="body-md text-slate-500 max-w-xl mx-auto">Eight foundational competency areas that form the backbone of every Clarion training programme.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-xl px-5 py-4 shadow-card border border-slate-100 hover:border-brand-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover flex items-center gap-4"
                >
                  <div
                    className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}
                  >
                    <Icon size={18} style={{ color: '#048DD1' }} />
                  </div>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex-shrink-0 w-1 h-8 rounded-full" style={{ backgroundColor: '#ED7E1A' }} />
                    <h3 className="font-semibold text-xs leading-snug" style={{ color: '#050506' }}>{area.label}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors & Trainers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-card img-zoom">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=560&dpr=1"
                  alt="Mentors and trainers"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-card p-4 border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(237,126,26,0.1)' }}>
                    <Users size={20} style={{ color: '#ED7E1A' }} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-base" style={{ color: '#050506' }}>Practicing CAs</div>
                    <div className="text-xs text-slate-500">Your mentors and trainers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
                <span className="eyebrow" style={{ color: '#ED7E1A' }}>Mentorship</span>
              </div>
              <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>Role of Mentors &amp; Trainers</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                A key strength of Clarion TalentForge training programs is the involvement of practicing Chartered Accountants as mentors and trainers. This mentor-led approach ensures training remains aligned with current industry practices and enhances practical competency among participants.
              </p>
              <div className="space-y-3">
                {mentorContributions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(4,141,209,0.1)' }}>
                      <CheckCircle size={13} style={{ color: '#048DD1' }} />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Design & Delivery Methodology */}
      <section className="section-padding" style={{ backgroundColor: '#050506' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-orange-400" />
              <span className="eyebrow text-orange-400">Framework</span>
              <div className="h-px w-8 bg-orange-400" />
            </div>
            <h2 className="heading-lg text-white mb-4">Course Design &amp; Delivery Methodology</h2>
            <p className="body-md text-slate-400 max-w-xl mx-auto">A structured five-stage framework that takes every student from skill gap to employment readiness.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical spine line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(4,141,209,0.5) 10%, rgba(4,141,209,0.5) 90%, transparent)' }}
            />

            <div className="space-y-8">
              {methodology.map((step, i) => {
                const Icon = step.icon;
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex items-center gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'} pl-16 md:pl-0`}>
                      <div
                        className="inline-block rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-0.5"
                        style={{ backgroundColor: '#0d1117' }}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(4,141,209,0.15)' }}
                          >
                            <Icon size={20} style={{ color: '#048DD1' }} />
                          </div>
                          <span className="font-display font-bold text-xs" style={{ color: '#ED7E1A' }}>Step {step.step}</span>
                        </div>
                        <h3 className="font-display font-bold text-base text-white mb-1">{step.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Centre node */}
                    <div
                      className="absolute left-6 md:static md:left-auto md:relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shadow-lg md:mx-0"
                      style={{ backgroundColor: '#048DD1', border: '3px solid #050506', boxShadow: '0 0 0 4px rgba(4,141,209,0.25)' }}
                    >
                      {step.step}
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Value Addition */}
      <section className="section-padding" style={{ backgroundColor: '#050506' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange-400" />
                <span className="eyebrow text-orange-400">Outcomes</span>
              </div>
              <h2 className="heading-lg text-white mb-6">Value Addition to Students</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Every graduate of Clarion TalentForge&apos;s programme leaves with more than just a certificate — they leave with demonstrable skills that employers notice from day one.
              </p>
              <div className="space-y-4">
                {valuePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: '#0d1117', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(237,126,26,0.15)' }}>
                      <CheckCircle size={14} style={{ color: '#ED7E1A' }} />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=700&dpr=1"
                alt="Students learning"
                className="w-full h-full object-cover"
                style={{ minHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" style={{ backgroundColor: '#050506' }}>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange-400" />
                <span className="eyebrow text-orange-400">Get Started</span>
                <div className="h-px w-8 bg-orange-400" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Ready to Launch Your Accounting Career?
              </h2>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Join Clarion TalentForge&apos;s training programme and become an industry-ready accounting professional. Speak to our counsellors today to learn about enrolment, batch schedules, and fees.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/919059783619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#048DD1' }}
                >
                  Enrol Now <ArrowRight size={15} />
                </a>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Browse Job Openings
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
