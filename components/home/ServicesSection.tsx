import Link from 'next/link';
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: GraduationCap,
    title: 'Accounting Launchpad Course',
    description: 'A well-integrated, full-bodied, comprehensive 6-Weeks on-site course crafted with all the explanations, exercises, problems, quizzes and calculators to help graduate students, professionals, business people and educators.',
  },
  {
    icon: Briefcase,
    title: 'Job Placement',
    description: 'Clarion Talentforge bridges the gap between accountants and accounting jobs in MSME markets in Hyderabad — connecting people with opportunities that inspire them, and companies with the talent that drives them forward. Here almost 100% placement is guaranteed.',
  },
];

const pillars = [
  {
    title: 'Professional Expertise and Ethics',
    description: 'With professional expertise and ethics, Clarion Talent Forge carves out newer accounting professionals or helps honing the accounting skills of those already in the profession or industry.',
  },
  {
    title: 'Creating Trust in Capital Markets',
    description: 'Candidates learn that accounting professionals serve as capital market gatekeepers — their scepticism, judgment, expertise and commitment make them shine in the realms of audit and financial reporting.',
  },
  {
    title: 'Transparency in Standards',
    description: 'Graduates learn that the financial reporting and standard-setting system must be balanced and inclusive, helping investors, lenders and other capital providers make informed business decisions.',
  },
  {
    title: 'Workplace of the Future',
    description: 'Graduates comprehend that accountants help small businesses get off the ground, stabilize and reposition, while gaining real-time knowledge of their clients\' finances and providing greater strategic perspective.',
  },
  {
    title: 'Accounting In the Digital Age',
    description: 'Aspiring accountants learn to harness technology — trained on Tally, soft skills, cloud accounting methods and data storage. These empower accountants to provide relevant routes to apt financial decision making.',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
            <span className="eyebrow" style={{ color: '#048DD1' }}>What We Do</span>
            <div className="h-px w-8" style={{ backgroundColor: '#048DD1' }} />
          </div>
          <h2 className="heading-lg mb-4" style={{ color: '#050506' }}>Simplifying Accounting Recruitment &amp; Training</h2>
          <p className="body-md text-slate-500 max-w-2xl mx-auto">
            Whether you&apos;re a seasoned professional or a budding accountant, it&apos;s always important to continue the learning process in order to stay at the top of your game.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div key={o.title} className="group bg-white rounded-xl p-8 shadow-card card-hover border border-slate-100 flex flex-col">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.1)' }}>
                  <Icon size={26} style={{ color: '#048DD1' }} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: '#050506' }}>{o.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{o.description}</p>
                <div className="mt-5 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-12" style={{ backgroundColor: '#ED7E1A' }} />
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-5 border border-slate-100 transition-all duration-300 hover:shadow-card" style={{ borderColor: undefined }}>
              <div className="w-1.5 h-7 rounded-full mb-4" style={{ backgroundColor: '#ED7E1A' }} />
              <h4 className="font-display font-semibold text-sm mb-2" style={{ color: '#050506' }}>{p.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 group" style={{ color: '#048DD1' }}>
            Learn more about our approach
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
