import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Training', href: '/training' },
    { name: 'For Employers', href: '/clients' },
    { name: 'For Job Seekers', href: '/job-seekers' },
    { name: 'Job Openings', href: '/jobs' },
    { name: 'Successful Placements', href: '/placements' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    'Accounting Launchpad Course',
    'Job Placement',
    'Tally Training',
    'MSME Recruitment',
    'Career Counseling',
    'Accounting Launchpad Course – FAQ'
  ];

  return (
    <footer className="bg-black text-white">
      
      {/* Top CTA Section */}
      <div className="border-t border-white/5 bg-[#08111f]">
        <div className="container-custom py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Ready to find your next accounting opportunity?
            </h2>
            <p className="text-slate-400">
              Browse open positions or reach out — we are here to guide you.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/jobs"
              className="px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Browse Jobs
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-md border border-white/20 hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14 grid md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <Image
            src="/clarion.png"
            alt="Clarion Talentforge"
            width={180}
            height={60}
            className="mb-5"
          />

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Bridging the gap between accountants and accounting jobs in MSME markets.
            We simplify recruitment and training to connect talented professionals
            with the right opportunities.
          </p>

          <div className="flex gap-3 mt-5">
            <div className="w-10 h-10 rounded-full bg-[#0d1b36] flex items-center justify-center hover:bg-[#16305f] cursor-pointer">
              <MessageCircle size={16} />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#0d1b36] flex items-center justify-center hover:bg-[#16305f] cursor-pointer">
              <Instagram size={16} />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#0d1b36] flex items-center justify-center hover:bg-[#16305f] cursor-pointer">
              <Mail size={16} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h4 className="font-semibold text-white whitespace-nowrap">
              Quick Links
            </h4>
            <div className="h-px bg-white/10 w-full"></div>
          </div>

          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            {quickLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-2">
                <span className="text-blue-400">›</span>
                <Link href={link.href}>{link.name}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h4 className="font-semibold text-white whitespace-nowrap">
              Our Services
            </h4>
            <div className="h-px bg-white/10 w-full"></div>
          </div>

          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-2">
                <span className="text-orange-400">›</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h4 className="font-semibold text-white whitespace-nowrap">
              Get In Touch
            </h4>
            <div className="h-px bg-white/10 w-full"></div>
          </div>

          <div className="space-y-4 text-slate-400 text-sm">
            <div className="flex gap-3">
              <MapPin 
  size={16} 
  className="mt-1 text-blue-400 flex-shrink-0" 
/>
              <span>
                Flat 204, Lake Melody Apartments,
                Near The Park Hotel, Somajiguda,
                Hyderabad – 500082
              </span>
            </div>

            <div className="flex gap-3">
              <Phone size={16} className="mt-1 text-blue-400" />
              <span>
                +91 90597 83619 <br />
                +91 90597 01166
              </span>
            </div>

            <div className="flex gap-3">
              <Mail size={16} className="mt-1 text-blue-400" />
              <span>reach@clariontf.com</span>
            </div>

            <div className="flex gap-3">
              <MessageCircle size={16} className="mt-1 text-orange-400" />
              <span>WhatsApp Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/5">
        <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Clarion Talentforge LLP. All rights reserved.</p>

          <a
            href="https://www.therapidnest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Powered by Rapidnest
          </a>
        </div>
      </div>
    </footer>
  );
}