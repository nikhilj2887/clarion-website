'use client';

import { useState, useRef } from 'react';
import {
  X,
  Upload,
  CircleCheck as CheckCircle,
  CircleAlert as AlertCircle,
  Loader as Loader2
} from 'lucide-react';
import { supabase, type Job } from '@/lib/supabase';

interface Props {
  job: Job | null;
  onClose: () => void;
}

type State = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplicationModal({ job, onClose }: Props) {
  const [state, setState] = useState<State>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    current_location: '',
    cover_note: '',
  });

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  if (!job) return null;

  const validate = () => {
    const e: Partial<typeof form> = {};

    if (!form.name.trim()) e.name = 'Required';

    if (!form.email.trim()) {
      e.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Invalid email';
    }

    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.experience.trim()) e.experience = 'Required';
    if (!form.current_location.trim()) e.current_location = 'Required';

    return e;
  };

  const pickFile = (f: File) => {
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!validTypes.includes(f.type)) {
      alert('Please upload PDF or Word document.');
      return;
    }

    if (f.size > 10 * 1024 * 1024) {
      alert('File must be under 10MB.');
      return;
    }

    setFile(f);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setState('submitting');

    try {
      let resumeUrl: string | null = null;

      // Upload resume to Supabase
      if (file) {
        const ext = file.name.split('.').pop();

        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, file);

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage
          .from('resumes')
          .getPublicUrl(fileName);

        resumeUrl = data.publicUrl;
      }

      // Save application in Supabase
      const { error: dbError } = await supabase
        .from('job_applications')
        .insert({
          job_id: job.id === 'general' ? null : job.id,
          job_title: job.title,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          experience: form.experience.trim(),
          current_location: form.current_location.trim(),
          resume_url: resumeUrl,
          cover_note: form.cover_note.trim() || null,
        });

      if (dbError) {
        throw dbError;
      }

      // Open WhatsApp after successful submission
      const whatsappMessage = encodeURIComponent(
        `Hi Clarion Talent, I just applied for ${job.title}.
        
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Experience: ${form.experience}
Location: ${form.current_location}

Resume: ${resumeUrl || 'Uploaded in portal'}`
      );

      window.open(
        `https://wa.me/919059783619?text=${whatsappMessage}`,
        '_blank'
      );

      setState('success');

    } catch (error) {
      console.error(error);
      setState('error');
    }
  };

  const inputClass = (field: keyof typeof form) =>
    `w-full px-4 py-3 text-sm rounded-lg border outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-300 bg-red-50'
        : 'border-slate-200 bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
    }`;

  return (
    <form onSubmit={submit}>
      {/* Keep your existing JSX/UI below exactly as it is */}
    </form>
  );
}