import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qzcsznxbjwbrlytwkuwg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Y3N6bnhiandicmx5dHdrdXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NDg0MDksImV4cCI6MjAzODUyNDQwOX0.TvAG8TQd1gYp2FOBxj_REFGfHAK68YjizItpTPKsTOU";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchSupabaseData() {
  const { data, error } = await supabase.from("trvld-table").select("*");

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    return [];
  }

  return data;
}
