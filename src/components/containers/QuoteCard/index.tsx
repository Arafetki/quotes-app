import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useCopyToClipboard } from "usehooks-ts";
import type { QuoteCardProps } from "./types";
import { ClipboardCopyIcon, CheckIcon } from '@radix-ui/react-icons';

export default function QuoteCard({author,body}: QuoteCardProps): JSX.Element {

    const [,copy] = useCopyToClipboard();
    const [isCopied,setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
        copy(body).then((success)=>{
            if (success) {
                setIsCopied(true);
                setTimeout(()=>{
                    setIsCopied(false); 
                },500)
            }

        }).catch(error =>{
            console.error(error);
        })
    }

    return (
        <Card className="relative border-2 w-96 pr-1 hover:bg-blue-600 bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800">
            <Button
                variant='ghost'
                size='icon'
                onClick={handleCopyToClipboard}
                className="absolute top-2 right-2 hover:bg-foreground/15"
            >
                {isCopied ? <CheckIcon className="size-5"/> :<ClipboardCopyIcon/>}
            </Button>            
            <CardHeader>
                <CardTitle className="text-4xl font-bold">{author}</CardTitle>
                <CardDescription className="text-zinc-800">@author</CardDescription>
            </CardHeader>
            <CardContent>
                <q className="text-md font-mono">{body}</q>
            </CardContent>
        </Card>
    )
}