import { supabase } from "@/lib/initSupabase";
import { v4 as uuidv4 } from 'uuid';

export const uploadImageToSupabase = async (file: File) => {
  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_'); // Replace spaces and special characters
  const fileName = `${uuidv4()}-${sanitizedFileName}`;
  const { data, error } = await supabase.storage
    .from('item-images') // Ensure this bucket exists in your Supabase storage
    .upload(fileName, file);

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  return data.path; // Return the file path
};