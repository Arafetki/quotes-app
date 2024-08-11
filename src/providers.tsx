import {ReactNode} from "react"
import { ThemeProvider } from "@/components/contexts/ThemeProvider"
import { QuotesProvider } from "@/components/contexts/QuotesProvider"


export default function Providers({children}: {children: ReactNode }) {
    return (
        <ThemeProvider defaultTheme='system' storageKey="theme">
            <QuotesProvider>
                {children}
            </QuotesProvider>
        </ThemeProvider>
    )
}