import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gmqlcygwvkczdppdepck.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcWxjeWd3dmtjemRwcGRlcGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzE3NTksImV4cCI6MjA5MTkwNzc1OX0.lKPTA98dYGFl4ptOcci9R0tx8QF91NkUnZy6lZHJU-I';

export const supabase = createClient(supabaseUrl, supabaseKey);