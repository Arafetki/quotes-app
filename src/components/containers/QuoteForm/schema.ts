import { z } from "zod"

export const quoteFormSchema = z.object({
  author: z.string().min(2).max(50),
  body: z.string()
})

export type QuoteFormFields = z.infer<typeof quoteFormSchema>

