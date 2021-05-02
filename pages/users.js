import { getApiUsers } from './api/users';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';

export default function Users({ users }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Users</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-center mt-5'>
        <div className='text-gray-700 text-5xl font-semibold'>Top Users</div>
        <div className='flex justify-center rounded-t-xl overflow-hidden p-10'>
          <table className='table-auto w-2/4'>
            <thead>
              <tr>
                <th className='w-1/2 text-gray-700'>Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className='border border-gray-500 px-4 py-2 text-gray-600 font-medium'>
                    {user.username}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const users = await getApiUsers();

  return {
    props: {
      users: users,
    },
    revalidate: 30,
  };
}
