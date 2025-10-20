import './globals.css';
import NavBar from '@/components/NavBar';
import { Metadata } from 'next';
import { Inter, Inconsolata, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })


export const metadata: Metadata = {
  title: 'RM NEXT-JS',
  description: 'my first next-js project',
  keywords: 'Next-js, typescript, tailwindcss'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='eng'>
    <body className={inter.className}>
      <NavBar />
      <main className='max-w-3xl mx-auto py-10 '>
        {children}

      </main>
    </body>

  </html>
}