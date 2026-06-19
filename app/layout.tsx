import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Apex Gloss Auto Detailing | Scottsdale, AZ',
  description:
    'Professional auto detailing in Scottsdale, AZ. Paint correction, ceramic coatings, interior restoration, and more. 11+ years of experience. Book your detail today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-brand-background text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
