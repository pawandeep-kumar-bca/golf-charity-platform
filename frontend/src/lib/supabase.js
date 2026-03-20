import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://aonyqgistspbpxgutvlh.supabase.co"
const supabaseKey = "sb_publishable_C3p0IbOq25I0uI1naVcGqA_gGgkY5xi"

export const supabase = createClient(supabaseUrl, supabaseKey)