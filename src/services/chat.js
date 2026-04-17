import { supabase } from "./supabase";

// GET MESSAGES BETWEEN TWO USERS
export async function getMessages(user1, user2) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .or(
      `and(sender_id.eq.${user1},receiver_id.eq.${user2}),and(sender_id.eq.${user2},receiver_id.eq.${user1})`
    )
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}