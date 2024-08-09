import { supabase } from "@/lib/initSupabase";

export const handleSignIn = async (
  e: React.FormEvent,
  email: string,
  password: string,
  setsignInError: (message: string | null) => void,
  setCheckEmailAfterSignUpSuccessful: (message: string | null) => void
) => {
  e.preventDefault();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    setsignInError(error.message);
    setCheckEmailAfterSignUpSuccessful(null); // Clear check email message on error
  }
};