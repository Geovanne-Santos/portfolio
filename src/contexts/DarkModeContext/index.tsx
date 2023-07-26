"use client";


import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react';
 

const DarkModeProvider = ({ children }: {children: ReactNode}) => {
    const [mounted, setMounted] = useState(false)
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return <>{children}</>
    }

  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default DarkModeProvider;