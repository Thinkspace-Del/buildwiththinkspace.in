/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export const handler = async () => {
  const timestamp = new Date().toISOString();

  const { error } = await supabase
    .from("builders")
    .select("id")
    .limit(1)
    .maybeSingle();

  if (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "error",
        message: error.message,
        timestamp,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "ok",
      message: "Supabase connection healthy.",
      timestamp,
    }),
  };
};
