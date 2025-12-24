import type { Metadata } from "next";
import './globals.css';
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://cwstudio-lp-copy.vercel.app'),
  title: {
    template: '%s | 小説の執筆ツールのLP',
    default: '小説の執筆ツールのLP',
  },
  description:
    '模写修行の小説の執筆ツールのLPをNext.jsで作成したサイトです。',
  openGraph: {
    title: '小説の執筆ツールのLP',
    description:
      '模写修行の小説の執筆ツールのLPをNext.jsで作成したサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://cwstudio-lp-copy.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
