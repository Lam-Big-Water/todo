import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project-id.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const createSupabaseBrowserClient = () => {
    return createBrowserClient(supabaseUrl, supabaseKey);
}