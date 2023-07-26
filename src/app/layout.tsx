"use client";
import './style/globals.scss'
import DarkModeProvider from '@/contexts/DarkModeContext';
import Header from '@/components/Header';

export const metadata = {
  title: 'Geovanne Meloni - Início',
  description: 'Portfólio de Geovanne Meloni dos Santos, Desenvolvedor Web ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <DarkModeProvider>
      <body>
          <Header />
          <main className='text-center'>
            {children}
          </main>
      </body>
      </DarkModeProvider>
    </html>
  )
}
