import { useContext } from "react"
import { QuotesProviderContext } from "@/components/contexts/QuotesProvider"

export const useQuotes = () => {
  const context = useContext(QuotesProviderContext)

  if (context === undefined)
    throw new Error("useQuotes must be used within a QuotesProvider")

  return context
}