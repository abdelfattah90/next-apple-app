import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaBars, FaSearch } from 'react-icons/fa'
import LanguageToggle from '@/components/LanguageToggle'

const NavLink: FC<{ href: string; text: string }> = ({ href, text }) => (
  <li className='nav-item'>
    <Link
      href={href}
      className='m-1 mx-4 p-1 flex items-center text-white hover:opacity-50'
    >
      {text}
    </Link>
  </li>
)

interface NavBarProps {
  toggleSidebar: () => void
}

const NavBar: FC<NavBarProps> = () => {
  const { t } = useTranslation()
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav
      className='w-full bg-zinc-800 p-2'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(43, 43, 43, 0.507)',
      }}
    >
      <div className='flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars className='text-white' />
          </button>
          <Link
            href='/'
            className='m-1 mx-4 p-1 flex items-center text-white hover:opacity-50'
          >
            <div className='lg:hidden text-center w-full'>
              <Image src='/apple-logo.png' alt='Apple' width={20} height={20} />
            </div>
          </Link>
          <LanguageToggle />
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
          id='example-navbar-danger'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto lg:mx-auto'>
            <li>
              <Link
                href='/'
                className='m-1 mx-4 p-1 flex items-center text-white hover:opacity-50'
              >
                <Image
                  src='/apple-logo.png'
                  alt='Apple'
                  width={20}
                  height={20}
                />
              </Link>
            </li>

            <NavLink href='/' text={t('navlinks.home')} />
            <NavLink href='/' text={t('navlinks.store')} />
            <NavLink href='/' text={t('navlinks.ipad')} />
            <NavLink href='/' text={t('navlinks.mac')} />
            <NavLink href='/' text={t('navlinks.iphone')} />
            <NavLink href='/' text={t('navlinks.watch')} />
            <NavLink href='/' text={t('navlinks.airpods')} />
            <NavLink href='/' text={t('navlinks.tv')} />
            <NavLink href='/' text={t('navlinks.vision')} />
          </ul>
        </div>
        <div className='lg:flex items-center'>
          <button
            className='hidden lg:block m-1 p-1 text-white hover:opacity-50'
            type='button'
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
