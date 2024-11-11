
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fywmvqbplismtspgbadr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5d212cWJwbGlzbXRzcGdiYWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODg5MzcsImV4cCI6MjA0MjY2NDkzN30.0_RIqJcxa5CmNr6V3fuu7izeoop_DJzMsmAZ6oTTqyQ'
const supabase = createClient(supabaseUrl, supabaseKey)