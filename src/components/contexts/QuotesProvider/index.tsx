import {createContext, useEffect, useState} from "react"
import type { Quote } from "@/components/features/QuoteCard/types"
import type {QuotesProviderProps,QuotesProviderState} from './types'
import { useLocalStorage } from 'usehooks-ts'

const initialState = {
    quotes: [] as Quote[],
    setQuotes: () => null
}

const QuotesProviderContext = createContext<QuotesProviderState>(initialState)


function QuotesProvider({children}: QuotesProviderProps) {

    const [storedQuotes, setStoredQuotes] = useLocalStorage<Quote[]>('quotes', [])
    const [quotes,setQuotes] =  useState<Quote[]>(storedQuotes)

    useEffect(()=>{
        setStoredQuotes(quotes)
    },[setStoredQuotes,quotes])


    const value = {
        quotes,
        setQuotes: (quotes: Quote[]) => {
            setQuotes(quotes)
        },
    }

    return (
        <QuotesProviderContext.Provider value={value}>
            {children}
        </QuotesProviderContext.Provider>
    )

}

export {QuotesProvider,QuotesProviderContext};


