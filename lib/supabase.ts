import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary_range: string | null;
  description: string;
  requirements: string[];
  experience_required: string | null;
  department: string | null;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
};

export type Placement = {
  id: string;
  candidate_name: string | null;
  company_name: string | null;
  role: string | null;
  image_url: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
};
