import { createClient } from '@vercel/kv';
import { env } from '$env/dynamic/private';


const client = createClient({
    token: env.KV_REST_API_TOKEN || "",
    url: env.KV_REST_API_URL || ""
})

