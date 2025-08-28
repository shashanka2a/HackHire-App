import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../src/index.css'

export default function App({ Component, pageProps }: AppProps) {
  // Apply dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />
}