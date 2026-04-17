import { supabase } from "./supabase";

// CREATE PROFILE
export async function createProfile({ id, name, bio, avatar_url }) {
  const { data, error } = await supabase
    .from("profiles")
    .insert([{ id, name, bio, avatar_url }]);

  if (error) throw new Error(error.message);
  return data;
}

// GET PROFILE
export async function getProfile(id) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}