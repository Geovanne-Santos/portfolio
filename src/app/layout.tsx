import './style/globals.scss'
import DarkModeProvider from '@/contexts/DarkModeContext';
import Header from '@/components/Header';

export const metadata = {
  title: 'Geovanne Meloni - Início',
  description: 'Portfólio de Geovanne Meloni dos Santos, Desenvolvedor Web',
}

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {

  return (
    <html>
        <body>
          <DarkModeProvider>
            <Header />
            <main className='text-center'>
              {children}
            </main>
          </DarkModeProvider>
        </body>
    </html>
  )
}
