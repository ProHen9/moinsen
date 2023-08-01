import { createClient } from '@vercel/kv';
import { env } from '$env/dynamic/private';
import { kv } from '@vercel/kv';
const client = createClient({
    token: env.KV_REST_API_TOKEN || "",
    url: env.KV_REST_API_URL || ""
})
await client.set("data", {})
console.log(await client.get("data"))