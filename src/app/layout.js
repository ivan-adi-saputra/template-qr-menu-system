import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Ordio — QR Menu System',
  description: 'Slow-bar specialty coffee · Kopi Senja',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
