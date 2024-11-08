import * as pg from 'pg';
import { createClient } from 'redis';
import { config } from 'dotenv';

config();

const { Pool } = pg;
export const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});
redisClient.connect();
