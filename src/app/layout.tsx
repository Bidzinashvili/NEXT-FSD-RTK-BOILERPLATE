import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { StoreProvider } from 'app/providers/store';
import './globals.scss';

export const metadata: Metadata = {
  title: 'FSD Next.js Boilerplate',
  description: 'Feature-Sliced Design boilerplate with Next.js, Redux Toolkit, and SCSS',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
