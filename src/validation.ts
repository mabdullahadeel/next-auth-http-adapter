import { z } from "zod";

const userAdapterSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  emailVerified: z.date().nullable(),
  name: z.string().optional().nullable(),
  image: z.string().optional(),
});

const adapterAccountSchema = z.object({
  userId: z.string(),
  providerAccountId: z.string(),
  provider: z.string(),
  type: z.enum(["oauth", "email", "credentials"]),
  access_token: z.string().optional(),
  token_type: z.string().optional(),
  id_token: z.string().optional(),
  refresh_token: z.string().optional(),
  scope: z.string().optional(),
  expires_at: z.number().optional(),
  session_state: z.string().optional(),
});

export const adapterSessionSchema = z.object({
  expires: z.date(),
  sessionToken: z.string(),
  userId: z.string(),
});

export const verificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
});

export const createUserSchema = userAdapterSchema;

export const getUserSchema = userAdapterSchema.nullable();

export const getUserByEmailSchema = userAdapterSchema.nullable();

export const getUserByAccountSchema = userAdapterSchema.nullable();

export const updateUserSchema = userAdapterSchema;

export const deleteUserSchema = userAdapterSchema.nullable().optional();

export const linkAccountSchema = adapterAccountSchema.nullable().optional();

export const unlinkAccountSchema = adapterAccountSchema.nullable().optional();

export const createSessionSchema = adapterSessionSchema;

export const getSessionAndUserSchema = z
  .object({
    session: adapterSessionSchema,
    user: userAdapterSchema,
  })
  .nullable();

export const updateSessionSchema = adapterSessionSchema.nullable().optional();

export const deleteSessionSchema = adapterSessionSchema.nullable().optional();

export const createVerificationTokenSchema = verificationTokenSchema;

export const useVerificationRequestSchema = verificationTokenSchema.nullable();
