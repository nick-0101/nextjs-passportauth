import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='header text-gray-200 py-6 px-4 flex'>
        <div className='flex-1 items-center flex justify-start'>
          {/* Name */}
          <div className='mx-2 text-gray-900'>
            <h1 className='text-2xl font-bold'>Next.js Passportjs App</h1>
          </div>
        </div>
        {/* Close Menu */}
        <div className='mx-2 flex items-center flex justify-end text-gray-200'>
          <Link href='/signin'>
            <a className='py-3 px-4 mx-2 text-gray-900'>Sign In</a>
          </Link>
          <Link href='/signup'>
            <a className='py-3 px-4 mx-2 bg-indigo-500 rounded-lg text-gray-100'>
              Sign Up
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
