import { supabase } from "./supabase";

// ✅ SIGN UP (creates auth user + profile with username)
export async function signUp({ email, password, username }) {
  // 1. Create auth user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const user = data.user;

  // 2. Insert into profiles table
  if (user) {
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: user.id, // IMPORTANT: match auth user id
        email,
        username,
      },
    ]);

    if (profileError) throw new Error(profileError.message);
  }

  return data;
}

// ✅ LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

// ✅ LOGOUT
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// ✅ GET CURRENT USER
export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return user;
}

// ✅ GET PROFILE (username etc.)
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw new Error(error.message);
  return data;
}