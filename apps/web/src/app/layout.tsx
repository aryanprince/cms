import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import React from 'react';
import { Appbar } from '../components/Appbar';
import { GoogleAnalytics } from '../components/analytics/GoogleAnalytics';
import Footer from '../components/landing/footer/footer';
import { Toaster } from '../components/ui/sonner';
import { siteConfig } from '../config/site-config';
import { cn } from '../lib/utils';
import './globals.css';
import { Providers } from './providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [
    {
      url: '/harkirat.png',
      href: '/harkirat.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <GoogleAnalytics />
        <Providers>
          <Appbar />
          {/* this is done as to keep footer in the bottom of the page */}
          <div className="min-h-[calc(100vh-64px)]">{children}</div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
