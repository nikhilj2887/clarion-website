import './globals.css';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clariontf.com'),
  title: {
    default: 'Clarion Talentforge – Accounting Training & Placement in Hyderabad',
    template: '%s | Clarion Talentforge',
  },
  description:
    "Clarion Talentforge LLP bridges the gap between accountants and accounting jobs in MSME markets in Hyderabad. 75+ successful placements. Almost 100% placement guaranteed.",
  keywords: [
    'accounting training Hyderabad', 'accounting jobs Hyderabad', 'MSME recruitment',
    'Tally training', 'accounting placement', 'Clarion Talentforge',
    'accounting course Hyderabad', 'job placement Hyderabad',
  ],
  authors: [{ name: 'Clarion Talentforge LLP' }],
  creator: 'Clarion Talentforge LLP',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.clariontf.com',
    siteName: 'Clarion Talentforge',
    title: 'Clarion Talentforge – Accounting Training & Placement in Hyderabad',
    description: "Bridging the gap between accountants and accounting jobs in MSME markets in Hyderabad.",
    images: [{
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      width: 1200, height: 630, alt: 'Clarion Talentforge – Accounting Training & Placement',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarion Talentforge – Accounting Training & Placement in Hyderabad',
    description: "Bridging the gap between accountants and accounting jobs in MSME markets in Hyderabad.",
    images: ['https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0C1A36" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
