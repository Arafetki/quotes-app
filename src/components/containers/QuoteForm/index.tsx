import { Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import type { QuoteFormFields } from "./schema";
import {quoteFormSchema} from './schema'
import { useQuotes } from "@/components/hooks/useQuotes";
import { Quote } from "@/components/containers/QuoteCard/types";

export default function QuoteForm() {

    const form = useForm<QuoteFormFields>({
        resolver: zodResolver(quoteFormSchema),
        defaultValues: {
            author: '',
            body: '',
        }
    })

    const {quotes,setQuotes} = useQuotes()

    const onSubmitHandler: SubmitHandler<QuoteFormFields> = ({author,body}) => {
        const newQuote: Quote = {
            id: quotes.length===0 ? 1 : quotes[quotes.length-1].id+1,
            author: author,
            body: body,
        }
        const newQuotesList = [...quotes]
        newQuotesList.push(newQuote)
        setQuotes(newQuotesList)
    }

    return (
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmitHandler)} className="mt-8 space-y-8 p-6 rounded-lg shadow-lg">
    {/* Author Field */}
    <FormField
      control={form.control}
      name="author"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground font-bold">Author</FormLabel>
          <FormControl>
            <Input 
              placeholder="Author's name" 
              {...field} 
              className="text-foreground border border-foreground focus:border-none rounded"
            />
          </FormControl>
          <FormDescription className="text-foreground">
            Enter author's name.
          </FormDescription>
          <FormMessage className="text-red-500"/>
        </FormItem>
      )}
    />
    
    {/* Quote Field */}
    <FormField
      control={form.control}
      name="body"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground font-bold">Quote</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Quote" 
              {...field} 
              className="text-foreground border border-foreground focus:border-none rounded"
            />
          </FormControl>
          <FormDescription className="text-foreground">
            Enter the quote.
          </FormDescription>
          <FormMessage className="text-red-500"/>
        </FormItem>
      )}
    />
    
    {/* Submit Button */}
    <Button 
      type="submit" 
      className="w-full bg-foreground hover:bg-foreground/80 text-background font-bold py-2 px-4 rounded-lg transition-colors duration-300"
    >
      Submit
    </Button>
  </form>
</Form>


    )
}