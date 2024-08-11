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
        console.log(newQuote)
        const newQuotesList = [...quotes]
        newQuotesList.push(newQuote)
        setQuotes(newQuotesList)
    }

    return (
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmitHandler)} className="mt-8 space-y-8 bg-gray-900 p-6 rounded-lg shadow-lg">
    {/* Author Field */}
    <FormField
      control={form.control}
      name="author"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-blue-400">Author</FormLabel>
          <FormControl>
            <Input 
              placeholder="Author Name" 
              {...field} 
              className="bg-gray-800 text-white border border-gray-700 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </FormControl>
          <FormDescription className="text-gray-500">
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
          <FormLabel className="text-blue-400">Quote</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Enter the quote here" 
              {...field} 
              className="bg-gray-800 text-white border border-gray-700 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </FormControl>
          <FormDescription className="text-gray-500">
            Enter the quote.
          </FormDescription>
          <FormMessage className="text-red-500"/>
        </FormItem>
      )}
    />
    
    {/* Submit Button */}
    <Button 
      type="submit" 
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
    >
      Submit
    </Button>
  </form>
</Form>


    )
}