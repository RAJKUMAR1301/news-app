import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SearchProvider from '@/context/SearchContext'
// import Toggle from '@/components/Toggle'
import NextNProgress from "nextjs-progressbar";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
  <NextNProgress />
  <SearchProvider>
    <Navbar />
    
    <Component {...pageProps} />
    <Footer />
  </SearchProvider>
</div>
}
