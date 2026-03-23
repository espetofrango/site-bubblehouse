import './globals.css';

export const metadata = {
  title: 'Aluguel de Bubble House | Luxo e Sofisticação no RJ',
  description: 'Especialistas em aluguel de Bubble House, Castelo Inflável Branco e Piscina de Bolinhas Branca para festas e eventos de luxo no Rio de Janeiro.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
