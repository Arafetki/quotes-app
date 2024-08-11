type Quote = {
    id: number
    author: string
    body: string
}

type QuoteCardProps = Omit<Quote,'id'>

export type {Quote,QuoteCardProps};