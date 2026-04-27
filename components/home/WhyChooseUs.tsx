import { Shield, Clock, GraduationCap, Users, Star, Award } from 'lucide-react';

const reasons = [
  { icon: Award, stat: '~100%', statLabel: 'Placement Rate', title: 'Guaranteed Placement', description: 'Clarion Talent Forge has a holistic approach to their well-planned 6- Weeks course that would evidently help students perform well. Here almost 100% placement is guaranteed.' },
  { icon: GraduationCap, stat: '6-Weeks', statLabel: 'Course Duration', title: 'Comprehensive Programme', description: 'A well-integrated, full-bodied, comprehensive 6-Weeks on-site course with explanations, exercises, problems, quizzes and calculators to help graduate students and professionals.' },
  { icon: Users, stat: '75+', statLabel: 'Successful Placements', title: 'Proven Track Record', description: 'Over 500 accounting professionals successfully placed in MSME businesses across Hyderabad — bridging the gap between accountants and accounting jobs.' },
  { icon: Clock, stat: 'On-site', statLabel: 'Mode of Training', title: 'Hands-on Training', description: 'Candidates learn to harness technology — trained on Tally, soft skills, cloud accounting and data storage — preparing them for the digital workplace.' },
  { icon: Shield, stat: 'MSME', statLabel: 'Market Focus', title: 'MSME Market Experts', description: 'We bridge the gap between accountants and accounting jobs in MSME markets in Hyderabad — connecting people with opportunities and companies with the talent they need.' },
  { icon: Star, stat: '5★', statLabel: 'Student Reviews', title: 'Proven by Our Students', description: 'Akhilesh, Sai Kiran, Sai Keerthi, Kumar Rayudu and Uma Maheshwar Reddy all credit Clarion Talentforge for transforming their accounting careers and workplace confidence.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 50%, #048DD1 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
              <span className="eyebrow" style={{ color: '#ED7E1A' }}>Why Clarion Talentforge</span>
            </div>
            <h2 className="heading-lg mb-6" style={{ color: '#050506' }}>
              Bridging the Gap between
              <span className="block" style={{ color: '#048DD1' }}>Accountants and Jobs</span>
            </h2>
            <p className="body-md text-slate-500 mb-8 leading-relaxed">
              Whether you&apos;re a seasoned professional or a budding accountant, it&apos;s always important to continue learning to stay at the top of your game. Clarion Talentforge bridges the gap between accountants and accounting jobs in MSME markets — connecting people with opportunities that inspire them, and companies with the talent that drives them forward.
            </p>

            <div className="grid grid-cols-3 gap-4 p-6 rounded-xl" style={{ backgroundColor: '#050506' }}>
              {[{ value: '75+', label: 'Placements' }, { value: '~100%', label: 'Placement Rate' }, { value: '6-Weeks', label: 'Programme' }].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-bold text-2xl mb-1" style={{ color: '#048DD1' }}>{s.value}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl overflow-hidden img-zoom shadow-card">
              <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1" alt="Clarion Talentforge team" className="w-full h-56 object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="group p-5 rounded-xl border border-slate-100 bg-white shadow-card card-hover hover:border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(4,141,209,0.1)' }}>
                      <Icon size={18} style={{ color: '#048DD1' }} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg" style={{ color: '#050506' }}>{r.stat}</div>
                      <div className="text-xs text-slate-400 leading-tight">{r.statLabel}</div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5" style={{ color: '#265788' }}>{r.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
