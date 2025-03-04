import '@styles/global.scss';
import './layout-style.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Whatsapp',
    template: 'Whatsapp',
  },
  description: 'Este é um site incrível feito com Next.js e App Router.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR" id="html">
      <head></head>
      <body id='body'>
        <div className='container'>
          <div className='container-top'></div>
          <div className='container-bottom'>
            <div className='container-bottom-child'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

