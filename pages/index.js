import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Header from '../components/header';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      {/* Section 1 */}
      <section>
        <div className='text-center text-2xl font-semibold m-52	'>
          You are not signed in | You are signed in as:
        </div>
      </section>
    </Layout>
  );
}
