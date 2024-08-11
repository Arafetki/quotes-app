import type { Quote } from "@/components/containers/QuoteCard/types"
import QuoteCard from "../QuoteCard"

type QuotesListProps = {
    quotes: Quote[]
}

export default function QuotesList({quotes}: QuotesListProps): JSX.Element {
    return (
        <div className="flex justify-center flex-wrap gap-4">
                {quotes.map(quote=><QuoteCard key={quote.id} author={quote.author} body={quote.body}/>)}
        </div>
    )
}