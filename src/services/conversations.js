import { supabase } from "./supabase";

// GET USER CONVERSATIONS
export async function getConversations(userId) {
  const { data, error } = await supabase
    .from("conversations")
    .select("*")
    .or(`user1_id.eq.${userId},user2_id.eq.${userId}`)
    .order("updated_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}