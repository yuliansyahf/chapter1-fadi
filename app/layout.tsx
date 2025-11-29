import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from './components/Navbar'; 

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ameli Nimbus | UI/UX Designer',
    description: 'Portfolio Ameli Nimbus',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 👉 Tambahkan Remix Icon di sini */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className={openSans.className}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
