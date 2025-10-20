import './globals.css';
import NavBar from '@/components/NavBar';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='eng'>
    <body>
      <NavBar />
      {children}
    </body>

  </html>
}