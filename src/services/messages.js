import { supabase } from "./supabase";

// SEND MESSAGE (core flow)
export async function sendMessage({ sender_id, receiver_id, text, file_url = null }) {
  // 1. insert message
  const { data: message, error } = await supabase
    .from("messages")
    .insert([
      {
        sender_id,
        receiver_id,
        text,
        file_url,
      },
    ])
    .select()
    .single();

  if (error) throw new Error(error.message);

  // 2. update conversation last message
  await supabase
    .from("conversations")
    .update({
      last_message: text || "📎 file",
      updated_at: new Date().toISOString(),
    })
    .or(
      `and(user1_id.eq.${sender_id},user2_id.eq.${receiver_id}),and(user1_id.eq.${receiver_id},user2_id.eq.${sender_id})`
    );

  return message;
}