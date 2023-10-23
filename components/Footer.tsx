import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-white rounded-lg shadow  dark:bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6 '>
              Privacy
            </Link>
          </li>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6'>
              Terms
            </Link>
          </li>
          <li>
            <Link href='/' className='mr-4 hover:underline md:mr-6'>
              Sales
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:underline'>
              Legal
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
