import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import { env } from '@/data/env/server';
import * as schema from "./schema"

const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql as any, { schema}); 
