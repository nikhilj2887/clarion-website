import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Clarion Talentforge LLP — bridging the gap between accountants and accounting jobs in MSME markets in Hyderabad.",
};

const founders = [
  {
    name: 'Konda Mounika',
    title: 'Founder',
    bio: 'A Chartered Accountant since 2013, brings over 12 years of deep expertise in taxation, audits, and financial planning. She has served 2500+ clients, led statutory audits, and mentored hundreds of budding professionals. A passionate educator, she is also expanding her knowledge with an LLB and a diploma in psychology.',
    bullets: [
      'Founder, M/s. Mounika & Ajay, Chartered Accountants',
      'Specialized in GST, audits, compliance, and banking sector audits',
      'Educator & Mentor',
      'Passionate about training junior accountants with real-world approaches',
    ],
    tags: [
      'Income tax filing and tax planning for individuals',
      'Financial planning for individuals and businesses',
      'GST filings, company audits, and statutory compliance',
      'Curriculum design for real-time accounting training',
      'Concurrent and statutory audits of banks',
      'Mentorship and education in finance and taxation',
    ],
    stats: [
      'Handled tax and planning for 2500+ individuals',
      'Managed statutory filings and accounts for 300+ businesses',
      'Designed a practical training curriculum for junior accountants',
      'Mentored over 200+ CA students and aspiring accountants',
      'Holds multiple ICAI certifications and pursuing LLB + diploma in psychology',
    ],
    image: '/founders/mounika.png',
    imageLeft: true,
  },
  {
    name: 'Kakurla Ajay Kumar',
    title: 'Co-Founder',
    bio: 'A Chartered Accountant since 2013, brings over a decade of expertise in tax, GST, audits, and regulatory compliance. As MD of Finext Consulting and Managing Partner at Shubhamga Constructions, he leads financial and operational strategy across diverse industries. He is also a seasoned trainer, mentor, and trusted advisor in wealth management and financial planning.',
    bullets: [],
    tags: [
      'GST consultancy and audits',
      'Payroll management',
      'Tax filing and planning for individuals',
      'Residential housing project development',
      'Regulatory compliance and internal audit',
      'Training and mentoring in finance and accounting',
    ],
    stats: [
      'Supported 1,000+ individual clients in tax matters',
      'Trained 50+ trainees and mentored over 300 students',
      'Successfully led internal audits across industries: automotive, beauty & wellness, construction, healthcare',
    ],
    image: '/founders/ajay.png',
    imageLeft: false,
  },
];

const pillars = [
  {
    title: 'Professional Expertise and Ethics',
    description: 'With professional expertise and ethics, Clarion Talent Forge carves out newer accounting professionals or helps honing the accounting skills of those already in the profession or industry. Leading amidst complex regulations, disruption and uncertainty, the accounting profession is committed to the public interest, as well as to objectivity and independence.',
  },
  {
    title: 'Creating Trust in Capital Markets',
    description: 'The candidates that walk-in and get enrolled at Clarion Talent Forge, learn that accounting professionals serve as capital market gatekeepers. Their scepticism, judgment, expertise and commitment make them shine in the realms of audit, and report on the financial and nonfinancial information to both private and public companies.',
  },
  {
    title: 'Transparency in Standards',
    description: 'At Clarion Talent Forge, graduates get to learn that financial reporting and standard-setting system must be balanced and inclusive. Standard setters and the standards themselves must help investors, lenders and other capital providers make informed business decisions.',
  },
  {
    title: 'Workplace of the Future',
    description: "Clarion Talent Forge equips graduates to completely comprehend that accountants help small businesses get off the ground, stabilize and reposition, while they gain real-time knowledge of their clients' finances, providing them greater strategic perspective.",
  },
  {
    title: 'Accounting In the Digital Age',
    description: 'Aspiring accountants of tomorrow receive discourses on structure and analyse data at Clarion Talent Forge. They also learn to harness the technology and get trained on Tally, learn the soft skills, and learn the clouding methods and data storage facilities. These empowers accountants to provide relevant routes to make apt financial decision making.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
<section className="relative pt-32 pb-20 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      alt="About"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark overlay for better readability */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Optional blue gradient overlay (matches your site theme better) */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, rgba(5,5,6,0.75) 0%, rgba(4,141,209,0.25) 100%)",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 container-custom text-center">
    <div className="inline-flex items-center gap-2 mb-5">
      <div className="h-px w-8 bg-orange-400" />
      <span className="eyebrow text-orange-400">Who We Are</span>
      <div className="h-px w-8 bg-orange-400" />
    </div>

    <h1 className="heading-xl text-white mb-6">
      About Clarion Talent Forge
    </h1>

    <p className="body-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
      Bridging the gap between accountants and accounting jobs in MSME markets
      in Hyderabad.
    </p>
  </div>
</section>

      {/* Founders — at the top */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-orange-500" />
              <span className="eyebrow text-orange-500">Our Founders</span>
              <div className="h-px w-8 bg-orange-500" />
            </div>
            <h2 className="heading-lg text-slate-900">The People Behind Clarion</h2>
          </div>

          <div className="space-y-12">
            {founders.map((f) => (
              <div key={f.name} className="rounded-2xl border border-slate-100 shadow-card overflow-hidden bg-white">
                <div className="flex flex-col md:flex-row min-h-[480px]">
                  {/* Rectangular side image — fixed 280px wide on desktop */}
                  <div
                    className="w-full md:w-72 flex-shrink-0"
                    style={{ order: f.imageLeft ? 0 : 1, minHeight: '260px' }}
                  >
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover object-top"
                      style={{ display: 'block', minHeight: '260px' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-10" style={{ order: f.imageLeft ? 1 : 0 }}>
                    <div className="mb-5">
                      <h3 className="font-display font-bold text-2xl mb-1" style={{ color: '#050506' }}>{f.name}</h3>
                      <p className="text-orange-500 font-semibold text-sm">{f.title}</p>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">{f.bio}</p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {f.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: 'rgba(4,141,209,0.4)', backgroundColor: 'rgba(4,141,209,0.08)', color: '#014264' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Achievement stats */}
                    <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
                      {f.stats.map((s) => (
                        <div key={s} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: '#ED7E1A' }} />
                          <p className="text-xs text-slate-600 leading-snug">{s}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bullet points */}
                    {f.bullets.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-1.5 pt-2 border-t border-slate-100">
                        {f.bullets.map((b) => (
                          <div key={b} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: '#ED7E1A' }} />
                            <span className="text-sm text-slate-600">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About text — verbatim from clariontf.com/about */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange-500" />
                <span className="eyebrow text-orange-500">Our Story</span>
              </div>
              <h2 className="heading-lg text-slate-900 mb-6">
                Simplifying Accounting Recruitment &amp; <span style={{ color: '#048DD1' }}>Training</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>Whether you&apos;re a seasoned professional or a budding accountant, it&apos;s always important to continue the learning process in order to stay at the top of your game and acquire as much new knowledge as possible.</p>
                <p>With this in mind, and observing that most of the graduates lacking relevant accounting knowledge and soft skills, Clarion Talent Forge is born. Furthermore, to bridge the gap between job seekers and the pertinent companies.</p>
                <p>Right at the outset, Clarion Talent Forge is here to eliminate the ambiguity from your accounting concepts, and make accounting concepts simple, clear and easy to understand for graduates looking for information about accounting topics. Clarion Talent Forge is geared up to equip students with their well-integrated, full-bodied, comprehensive 6-Weeks on-site course.</p>
                <p>After pouring out hundreds of hard-working hours, Clarion Talent Forge has crafted the learning material with all the explanations, exercises, problems, quizzes and calculators to meaningfully help graduate students, professionals, business people and educators.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden img-zoom shadow-card-hover">
                <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" alt="Clarion Talentforge team" className="w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy pillars — verbatim from clariontf.com */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-orange-500" />
              <span className="eyebrow text-orange-500">Our Approach</span>
              <div className="h-px w-8 bg-orange-500" />
            </div>
            <h2 className="heading-lg text-slate-900">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-slate-50 rounded-xl p-7 border border-slate-100 hover:border-brand-200 transition-all duration-300 hover:shadow-card">
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: '#ED7E1A' }} />
                <h4 className="font-display font-semibold text-slate-900 mb-3">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
