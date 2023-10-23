import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const notFound: FC = () => {
  return (
    <>
      <div style={{ height: '200px' }}></div>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start md:px-8'>
        <div className='max-w-lg mx-auto text-center'>
          <div className='pb-6'>
            <Image
              src='/apple-logo.png'
              alt='Logo'
              width={150}
              height={150}
              className='mx-auto'
            />
          </div>
          <h3 className='text-gray-800 text-4xl font-semibold sm:text-5xl'>
            Page not found | 404
          </h3>

          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Link
              href='/'
              className=' m-3
              block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg'
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
    </>
  )
}

export default notFound
