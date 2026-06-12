import './globals.css';

export const metadata = {
  title: 'Ordio — QR Menu System',
  description: 'Slow-bar specialty coffee · Kopi Senja',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
