import { useState } from 'react'
import QuotesList from '@/components/containers/QuotesList'
import { useQuotes } from '@/components/hooks/useQuotes'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import QuoteForm from './components/containers/QuoteForm'

import './App.css'

export default function App(): JSX.Element {

  const {quotes} = useQuotes()
  const [showQuoteForm,setShowQuoteForm] = useState(false)

  return (
    <main className='container'>
      {
        showQuoteForm && 
        <div className="flex justify-center">
            <QuoteForm/>
        </div>
      }      
      <div className='flex justify-between items-center h-28'>
        <h1 className='font-bold text-lg sm:text-2xl px-4 py-2'>Famous Quotes</h1>
        <Button onClick={()=>setShowQuoteForm(true)}>Add Quote</Button>
      </div>
      <Separator className='max-w-[1400px] mx-auto'/>
      <section className='mt-8'>
        <QuotesList quotes={quotes}/>
      </section>
    </main>
  )
}












/*

const quotesList: Quote[] = [
  {
    id: 1,
    author : "James Clerk Maxwell",
    body: "Electromagnetism stands as the most triumphant theory in all of physics."
  },
  {
    id: 2,
    author : "Robert Oppenheimer",
    body: "Now, I become Death, the destroyer of worlds."
  },
  {
    id: 3,
    author : "James Clerk Maxwell",
    body: "Electromagnetism stands as the most triumphant theory in all of physics."
  },
  {
    id: 4,
    author : "Robert Oppenheimer",
    body: "Now, I become Death, the destroyer of worlds."
  },
  {
    id: 5,
    author : "James Clerk Maxwell",
    body: "Electromagnetism stands as the most triumphant theory in all of physics."
  },
  {
    id: 6,
    author : "Robert Oppenheimer",
    body: "Now, I become Death, the destroyer of worlds."
  },
  {
    id: 7,
    author : "Robert Oppenheimer",
    body: "Now, I become Death, the destroyer of worlds."
  },
]

*/