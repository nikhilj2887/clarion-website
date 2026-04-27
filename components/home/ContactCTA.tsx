import Link from 'next/link';
import { ArrowRight, MessageCircle, Instagram, Phone } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1" alt="Team collaboration" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,5,6,0.96) 0%, rgba(38,87,136,0.90) 100%)' }} />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
            <span className="eyebrow" style={{ color: '#ED7E1A' }}>Get In Touch</span>
            <div className="h-px w-8" style={{ backgroundColor: '#ED7E1A' }} />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you are a graduate student seeking to hone your accounting skills, or are looking for a job, Clarion Talentforge is here to guide you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-md text-sm text-white transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#048DD1' }}>
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link href="/jobs" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-md text-sm border border-white/40 text-white hover:bg-white/10 transition-all duration-300">
              Browse Jobs
            </Link>
          </div>

          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px flex-1 max-w-24 bg-white/20" />
            <span className="text-xs text-slate-400 uppercase tracking-widest">or reach us via</span>
            <div className="h-px flex-1 max-w-24 bg-white/20" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919059783619" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <MessageCircle size={18} className="text-green-400" />
              <div className="text-left">
                <div className="text-xs text-slate-400">Chat on</div>
                <div className="text-sm font-semibold text-white">WhatsApp</div>
              </div>
            </a>
            <a href="https://www.instagram.com/clariontf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <Instagram size={18} className="text-pink-400" />
              <div className="text-left">
                <div className="text-xs text-slate-400">Follow us on</div>
                <div className="text-sm font-semibold text-white">Instagram</div>
              </div>
            </a>
            <a href="tel:+919059783619" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <Phone size={18} style={{ color: '#048DD1' }} />
              <div className="text-left">
                <div className="text-xs text-slate-400">Call us at</div>
                <div className="text-sm font-semibold text-white">+91 90597 83619</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
