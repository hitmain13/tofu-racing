import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  REDIS_URL: z.string().url().optional(),
  API_URL: z.string().url().optional(),
  MAPBOX_TOKEN: z.string().optional()
})

export type EnvSchema = z.infer<typeof envSchema>
