import { createContext, useEffect, useState } from "react"
import type {Theme,ThemeProviderProps,ThemeProviderState} from './types'

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const root = window.document.documentElement
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = mediaQueryList.matches? "dark": "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {

      const handleMediaThemeChange = () => {
        const systemTheme = mediaQueryList.matches? "dark": "light"
        setTheme(systemTheme)
      }

      mediaQueryList.addEventListener("change", handleMediaThemeChange);

      return () => {
          mediaQueryList.removeEventListener("change",handleMediaThemeChange);
      };
  },[]); 
  

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export {ThemeProvider,ThemeProviderContext};