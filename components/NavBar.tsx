import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'

interface NavBarProps {
  toggleSidebar: () => void
}

const navlinks = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'Store', href: '/' },
  { id: 3, text: 'iPad', href: '/' },
  { id: 4, text: 'iPhone', href: '/' },
  { id: 5, text: 'Watch', href: '/' },
  { id: 6, text: 'AirPods', href: '/' },
  { id: 7, text: 'TV & Home', href: '/' },
  { id: 8, text: 'Only on Apple', href: '/' },
  { id: 9, text: 'Accessories', href: '/' },
  { id: 10, text: 'Support', href: '/' },
]

const NavBar: FC<NavBarProps> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <nav className='w-full bg-zinc-900 p-2'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link href='/' className='flex items-center'>
              <Image src='/apple-logo.png' alt='Apple' width={30} height={30} />
            </Link>

            <button
              className=' cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i></i>
              <FaBars className='text-slate-300 ' />
            </button>
          </div>

          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto lg:mx-auto'>
              {navlinks.map((navlink, index) => (
                <li className='nav-item' key={index}>
                  <Link
                    className='m-1 mx-4 p-1 flex items-center  text-slate-300 hover:opacity-50'
                    href={navlink.href}
                  >
                    {navlink.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
