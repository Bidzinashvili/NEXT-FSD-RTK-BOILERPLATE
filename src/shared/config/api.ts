import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url().default('https://jsonplaceholder.typicode.com'),
});

const env = envSchema.parse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const API_BASE_URL = env.NEXT_PUBLIC_API_BASE_URL;
