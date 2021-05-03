import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Header from '../components/header';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

export default function Home() {
  const [session, loading] = useSession();
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
          {!session && (
            <>
              You are not signed in <br />
              <button onClick={signIn}>Sign in</button>
            </>
          )}

          {session && (
            <>
              Signed in as {session.user.name} <br />
              Go to{' '}
              <Link href='/users'>
                <a>Jobs</a>
              </Link>{' '}
              <br />
              <button onClick={signOut}>Sign out</button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
