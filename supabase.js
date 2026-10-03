import { createClient } from '@supabase/supabase-js'

// Ganti URL dengan Project URL lu, dan KEY dengan Publishable key yang tadi lu salin
const supabaseUrl = 'https://tzeevranhsmhlhmziyyn.supabase.co'
const supabaseKey = 'sb_publishable_fBW8p-WXCReg9I23nKj-Bw_QpBEdxex'

export const supabase = createClient(supabaseUrl, supabaseKey)