import Head from 'next/head';
import './globals.css';


export const metadata = {
  title: "Diya Vijay - Software Engineer and Web Developer",
  description: 'Welcome to my portfolio! I am Diya Vijay, a Software Engineer, Web Developer, and UI/UX Designer. Explore my projects and connect with me.',
  keywords: 'Diya Vijay, Software Engineer, Web Developer, UI/UX Designer, Portfolio',
  author: 'Diya Vijay',
  url: 'https://diyavj.me',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>

        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph meta tags (Facebook, Twitter, etc.) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Font link (Proxima Nova) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
