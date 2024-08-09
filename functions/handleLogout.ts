import { supabase } from "@/lib/initSupabase";

export const handleLogout = async (
  setLogoutError: (message: string | null) => void
) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    setLogoutError(error.message);
  }
};