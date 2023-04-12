import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { searchVueUsers } from "../_services/gitHubApi.ts";

serve(async (req:Request) => {
  const { name } = await req.json()
  
  const data = await searchVueUsers()

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
