'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Building2,
  ArrowRight
} from 'lucide-react';

const WHATSAPP_NUMBER = '919059783619'; // update if needed

export default function ContactPage() {
  const infoCards = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 90597 83619',
      sub: '+91 90597 01166',
      href: 'tel:+919059783619',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'reach@clariontf.com',
      sub: null,
      href: 'mailto:reach@clariontf.com',
    },
    {
      icon: MapPin,
      label: 'Corporate',
      value: 'Somajiguda, Hyderabad',
      sub: 'Near The Park Hotel',
      href: null,
    },
    {
      icon: MapPin,
      label: 'Registered',
      value: 'Gandhinagar, Hyderabad',
      sub: "SBI Officer's Colony",
      href: null,
    },
  ];

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ backgroundColor: '#050506' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=1"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-orange-500" />
            <span className="eyebrow text-orange-500">Get In Touch</span>
            <div className="h-px w-8 bg-orange-500" />
          </div>

          <h1 className="heading-xl text-white mb-4">Clarion Call</h1>

          <p className="body-lg text-slate-300 max-w-xl mx-auto">
            Whether you're hiring, looking for a job, or exploring training
            programs — connect with our team instantly.
          </p>
        </div>
      </section>

      <section className="container-custom py-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {infoCards.map((card) => {
            const Icon = card.icon;

            const content = (
              <div className="bg-white rounded-xl p-5 shadow-card border border-slate-100 h-full">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                  style={{ backgroundColor: 'rgba(4,141,209,0.1)' }}
                >
                  <Icon size={18} style={{ color: '#048DD1' }} />
                </div>

                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {card.label}
                </div>

                <div className="font-semibold text-slate-900 text-sm">
                  {card.value}
                </div>

                {card.sub && (
                  <div className="text-xs text-slate-500 mt-1">
                    {card.sub}
                  </div>
                )}
              </div>
            );

            return card.href ? (
              <a key={card.label} href={card.href}>
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl p-7 shadow-card border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}
                >
                  <Building2 size={18} style={{ color: '#048DD1' }} />
                </div>

                <div>
                  <div className="font-bold text-slate-900">
                    Clarion Talentforge
                  </div>
                  <div className="text-xs text-slate-500">
                    Accounting Training & Talent Placement
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                With 75+ successful placements and strong training programs,
                we help candidates and employers connect faster.
              </p>
            </div>

            {/* Quick Connect */}
            <div className="bg-white rounded-xl p-7 shadow-card border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4">
                Quick Connect
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() =>
                    openWhatsApp(
                      'Hi Clarion Talent, I would like to know more.'
                    )
                  }
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-green-50"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-100">
                    <MessageCircle
                      size={18}
                      className="text-green-600"
                    />
                  </div>

                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-900">
                      WhatsApp
                    </div>
                    <div className="text-xs text-slate-500">
                      Chat instantly
                    </div>
                  </div>
                </button>

                <a
                  href="https://www.instagram.com/clariontf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-pink-50"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-pink-100">
                    <Instagram size={18} className="text-pink-600" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Instagram
                    </div>
                    <div className="text-xs text-slate-500">
                      Follow @clariontf
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-10 shadow-card border border-slate-100 text-center h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Talk to Our Team Instantly
              </h2>

              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Looking for jobs, hiring support, or training details?
                Connect directly with our team for faster assistance.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() =>
                    openWhatsApp(
                      'Hi Clarion Talent, I would like to discuss job/training opportunities.'
                    )
                  }
                  className="w-full flex justify-center items-center gap-2 font-semibold py-4 rounded-lg text-white bg-green-500 hover:bg-green-600 transition"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>

                <a
                  href="tel:+919059783619"
                  className="w-full flex justify-center items-center gap-2 font-semibold py-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>

                <a
                  href="mailto:reach@clariontf.com"
                  className="w-full flex justify-center items-center gap-2 font-semibold py-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      <Footer />
    </main>
  );
}