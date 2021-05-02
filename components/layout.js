import Head from 'next/head';

export const siteTitle = 'Next.js OAuth';

export default function Layout({ children }) {
  return (
    <div className='container px-4 mx-auto '>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Next.js oauth app' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main>{children}</main>
    </div>
  );
}
