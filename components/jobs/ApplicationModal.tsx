'use client';

import { useState, useRef } from 'react';
import { X, Upload, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react';
import { supabase, type Job } from '@/lib/supabase';

interface Props { job: Job | null; onClose: () => void; }
type State = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplicationModal({ job, onClose }: Props) {
  const [state, setState] = useState<State>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', current_location: '', cover_note: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  if (!job) return null;

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.experience.trim()) e.experience = 'Required';
    if (!form.current_location.trim()) e.current_location = 'Required';
    return e;
  };

  const pickFile = (f: File) => {
    const valid = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!valid.includes(f.type)) { alert('Please upload PDF or Word document.'); return; }
    if (f.size > 10 * 1024 * 1024) { alert('File must be under 10MB.'); return; }
    setFile(f);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setState('submitting');
    try {
      let resumeUrl: string | null = null;
      if (file) {
        const ext = file.name.split('.').pop();
        const name = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error } = await supabase.storage.from('resumes').upload(name, file);
        if (!error) resumeUrl = name;
      }
      const { error } = await supabase.from('job_applications').insert({
        job_id: job.id === 'general' ? null : job.id,
        job_title: job.title,
        name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(),
        experience: form.experience.trim(), current_location: form.current_location.trim(),
        resume_url: resumeUrl, cover_note: form.cover_note.trim() || null,
      });
      if (error) throw error;
      setState('success');
    } catch { setState('error'); }
  };

  const ic = (f: keyof typeof form) =>
    `w-full px-4 py-3 text-sm rounded-lg border transition-all duration-200 outline-none focus:ring-2 ${errors[f] ? 'border-red-300 bg-red-50 focus:ring-red-100' : 'border-slate-200 bg-white focus:border-brand-500 focus:ring-brand-100'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(7,15,32,0.7)' }} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-5 flex items-start justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="font-display font-bold text-lg text-slate-900">Apply for this Role</h2>
            <p className="text-sm text-slate-500 mt-0.5">{job.title}{job.company ? ` · ${job.company}` : ''}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100" aria-label="Close"><X size={20} /></button>
        </div>

        {state === 'success' ? (
          <div className="px-6 py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}>
              <CheckCircle size={32} className="text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Application Submitted!</h3>
            <p className="text-slate-500 text-sm mb-6">Our team will review your application and reach out within 3-5 business days if your profile matches.</p>
            <button onClick={onClose} className="font-semibold px-8 py-3 rounded-lg text-sm" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>Close</button>
          </div>
        ) : state === 'error' ? (
          <div className="px-6 py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(220,38,38,0.1)' }}>
              <AlertCircle size={32} className="text-red-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Something Went Wrong</h3>
            <p className="text-slate-500 text-sm mb-6">Please try again or contact us directly.</p>
            <button onClick={() => setState('idle')} className="font-semibold px-8 py-3 rounded-lg text-sm border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white transition-all">Try Again</button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 py-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">Full Name <span className="text-red-400">*</span></label>
              <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your full name" className={ic('name')} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">Email <span className="text-red-400">*</span></label>
                <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="your@email.com" className={ic('email')} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">Phone <span className="text-red-400">*</span></label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className={ic('phone')} />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">Experience <span className="text-red-400">*</span></label>
                <input type="text" value={form.experience} onChange={(e) => setForm({...form, experience: e.target.value})} placeholder="e.g. 8 years" className={ic('experience')} />
                {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">Location <span className="text-red-400">*</span></label>
                <input type="text" value={form.current_location} onChange={(e) => setForm({...form, current_location: e.target.value})} placeholder="City, State" className={ic('current_location')} />
                {errors.current_location && <p className="text-xs text-red-500 mt-1">{errors.current_location}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">Resume / CV</label>
              <div className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition-all duration-200 ${drag ? 'border-brand-400 bg-blue-50' : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'}`}
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) pickFile(f); }}
              >
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files?.[0] && pickFile(e.target.files[0])} />
                {file ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-700">{file.name}</span>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null); }} className="text-slate-400 hover:text-slate-600"><X size={14} /></button>
                  </div>
                ) : (
                  <div>
                    <Upload size={20} className="mx-auto text-slate-400 mb-2" />
                    <p className="text-sm text-slate-500">Drop file here or <span className="text-brand-600 font-medium">browse</span></p>
                    <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX — max 10MB</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">Cover Note <span className="text-slate-400 font-normal">(optional)</span></label>
              <textarea value={form.cover_note} onChange={(e) => setForm({...form, cover_note: e.target.value})} placeholder="Briefly tell us why you're a great fit..." rows={3} className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none" />
            </div>
            <button type="submit" disabled={state === 'submitting'} className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-lg text-sm transition-all disabled:opacity-60 hover:-translate-y-0.5" style={{ backgroundColor: '#048DD1', color: '#ffffff' }}>
              {state === 'submitting' ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : 'Submit Application'}
            </button>
            <p className="text-xs text-slate-400 text-center">By applying, you consent to Clarion Talentforge processing your data for recruitment purposes.</p>
          </form>
        )}
      </div>
    </div>
  );
}
