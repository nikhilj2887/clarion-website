'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Send, CircleCheck as CircleCheck, CircleAlert as CircleAlert, Loader as Loader, Building2 } from 'lucide-react';

type State = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [state, setState] = useState<State>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', wantsCourse: false, lookingForJob: false });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setState('submitting');
    try {
      const subject = [form.wantsCourse && 'Accounting Launchpad Course', form.lookingForJob && 'Looking for Job'].filter(Boolean).join(', ') || 'General Inquiry';
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        subject,
        message: form.message.trim(),
      });
      if (error) throw error;
      setState('success');
    } catch { setState('error'); }
  };

  const ic = (f: keyof typeof errors) =>
    `w-full px-4 py-3 text-sm rounded-lg border transition-all duration-200 outline-none focus:ring-2 ${errors[f] ? 'border-red-300 bg-red-50 focus:ring-red-100' : 'border-slate-200 bg-white focus:border-navy-400 focus:ring-navy-100'}`;

  const infoCards = [
    { icon: Phone, label: 'Phone', value: '+91 90597 83619', sub: '+91 90597 01166', href: 'tel:+919059783619' },
    { icon: Mail, label: 'Email', value: 'reach@clariontf.com', sub: null, href: 'mailto:reach@clariontf.com' },
    { icon: MapPin, label: 'Corporate', value: 'Somajiguda, Hyderabad', sub: 'Near The Park Hotel', href: null },
    { icon: MapPin, label: 'Registered', value: 'Gandhinagar, Hyderabad', sub: 'SBI Officer\'s Colony', href: null },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#050506' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=400&dpr=1" alt="Contact" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-orange-500" />
            <span className="eyebrow text-orange-500">Get In Touch</span>
            <div className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="heading-xl text-white mb-4">Clarion Call</h1>
          <p className="body-lg text-slate-300 max-w-xl mx-auto">
            Accounting is one of the most vital professions in business. If you are a graduate student seeking to hone your skills, or are looking for a job, Clarion Talentforge is here to guide you.
          </p>
        </div>
      </section>

      <section className="container-custom py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {infoCards.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className="bg-white rounded-xl p-5 shadow-card border border-slate-100 hover:border-brand-200 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3" style={{ backgroundColor: 'rgba(4,141,209,0.1)' }}>
                  <Icon size={18} style={{ color: '#048DD1' }} />
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{c.label}</div>
                <div className="font-semibold text-slate-900 text-sm">{c.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.sub}</div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">{inner}</a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl p-7 shadow-card border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(4,141,209,0.08)' }}>
                  <Building2 size={18} style={{ color: '#048DD1' }} />
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900">Clarion Talentforge</div>
                  <div className="text-xs text-slate-500">Accounting Training & Talent Placement</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Bridging the gap between accountants and accounting jobs in MSME markets. With 75+ successful placements and a near 100% placement record, we are Hyderabad&apos;s trusted accounting training and recruitment partner.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={15} style={{ color: '#048DD1' }} className="mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-slate-600">
                    Flat 204, Lake Melody Apartments,<br />
                    Near The Park Hotel, Somajiguda,<br />
                    Hyderabad – 500082<br />
                    <span className="text-xs text-slate-400">Registered: Flat 201, 1-4-879/72, Udaya Island Apts, Gandhinagar, Hyderabad – 500080</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} style={{ color: '#048DD1' }} className="flex-shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:+919059783619" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">+91 90597 83619</a>
                    <a href="tel:+919059701166" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">+91 90597 01166</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={15} style={{ color: '#048DD1' }} className="flex-shrink-0" />
                  <a href="mailto:reach@clariontf.com" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">reach@clariontf.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-7 shadow-card border border-slate-100">
              <h3 className="font-display font-semibold text-slate-900 mb-4">Quick Connect</h3>
              <div className="space-y-3">
                <a href="https://wa.me/919059783619" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-green-300 hover:bg-green-50 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-100">
                    <MessageCircle size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
                    <div className="text-xs text-slate-500">Chat with a consultant instantly</div>
                  </div>
                </a>
                <a href="https://www.instagram.com/clariontf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-pink-100">
                    <Instagram size={18} className="text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Instagram</div>
                    <div className="text-xs text-slate-500">Follow us @clariontf</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden">
              <div className="px-7 py-5 border-b border-slate-100">
                <h2 className="font-display font-bold text-lg text-slate-900">Send Us a Message</h2>
                <p className="text-sm text-slate-500 mt-0.5">We&apos;ll get back to you within one business day.</p>
              </div>

              {state === 'success' ? (
                <div className="px-7 py-14 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}>
                    <CircleCheck size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Thank you for reaching out. We will get back to you shortly.</p>
                  <button onClick={() => { setState('idle'); setForm({ name: '', phone: '', email: '', message: '', wantsCourse: false, lookingForJob: false }); }} className="font-semibold px-8 py-3 rounded-lg text-sm" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
                    Send Another
                  </button>
                </div>
              ) : state === 'error' ? (
                <div className="px-7 py-14 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(220,38,38,0.1)' }}>
                    <CircleAlert size={32} className="text-red-500" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Something Went Wrong</h3>
                  <p className="text-slate-500 text-sm mb-6">Please try again or contact us directly via phone or WhatsApp.</p>
                  <button onClick={() => setState('idle')} className="font-semibold px-8 py-3 rounded-lg text-sm border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white transition-all">
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="px-7 py-6 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className={ic('name')} />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">Phone <span className="text-red-400">*</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={ic('phone')} />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">Email <span className="text-red-400">*</span></label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={ic('email')} />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">Share what you&apos;re looking for <span className="text-red-400">*</span></label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you are looking for..." rows={4} className={`${ic('message')} resize-none`} />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={form.wantsCourse} onChange={(e) => setForm({ ...form, wantsCourse: e.target.checked })} className="w-4 h-4 rounded border-slate-300 accent-brand-500" />
                      <span className="text-sm text-slate-700">Details about Accounting Launchpad Course</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={form.lookingForJob} onChange={(e) => setForm({ ...form, lookingForJob: e.target.checked })} className="w-4 h-4 rounded border-slate-300 accent-brand-500" />
                      <span className="text-sm text-slate-700">I am looking for job</span>
                    </label>
                  </div>
                  <button type="submit" disabled={state === 'submitting'} className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-lg text-sm transition-all disabled:opacity-60 hover:-translate-y-0.5" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
                    {state === 'submitting' ? (
                      <><Loader size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Submit</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100 h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9978484939413!2d78.46539671490045!3d17.424061387171786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c6a0000001%3A0x1234567890abcdef!2sSomajiguda%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clarion Talentforge Office Location"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
