import { supabase } from "@/lib/initSupabase";

export const handleSignUp = async (
  e: React.FormEvent,
  email: string,
  password: string,
  setsignUpError: (message: string | null) => void,
  setCheckEmailAfterSignUpSuccessful: (message: string | null) => void
) => {
  e.preventDefault();
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    setsignUpError(error.message);
    setCheckEmailAfterSignUpSuccessful(null); // Clear success message on error
  } else {
    setCheckEmailAfterSignUpSuccessful(
      "Sign up successful! Please check your email to confirm your account."
    );
    setsignUpError(null); // Clear error message on success
  }
};