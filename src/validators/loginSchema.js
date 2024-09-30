import { z } from "zod";

export const loginSchema = z.object({
  username: z.string({ message: "Invalid username" }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters" }),
  rememberMe: z.boolean().optional(),
});
