import React from 'react'
import type { Quote } from "@/components/features/QuoteCard/types"

type QuotesProviderProps = {
    children: React.ReactNode
}

type QuotesProviderState = {
    quotes: Quote[]
    setQuotes: (quotes: Quote[])=>void
}

export type {QuotesProviderProps,QuotesProviderState}