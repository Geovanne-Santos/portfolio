import './style/globals.scss'
import DarkModeProvider from '@/contexts/DarkModeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Geovanne Meloni - Início',
  description: 'Portfólio de Geovanne Meloni dos Santos, Desenvolvedor Web',
}

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {

  return (
    <html lang='pt-br'>
      <head>
        <link rel="shortcut icon" href="/favicon2.png" type="image/x-icon" />
      </head>
      <body className="flex flex-col min-h-screen">
        <DarkModeProvider>
          <Header />
          <main className="flex-1 w-full p-5 mx-auto grid place-items-center gap-10">
            {children}
          </main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  )
}
