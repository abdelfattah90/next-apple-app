import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaBars } from 'react-icons/fa'
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
          <Link className='flex items-center' href='/'>
            <Image src='/apple-logo.png' alt='Apple' width={30} height={30} />
          </Link>

          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars className='text-slate-300' />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
          id='example-navbar-danger'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto lg:mx-auto'>
            <NavLink href='/' text={t('navlinks.home')} />
            <NavLink href='/store' text={t('navlinks.store')} />
            <NavLink href='/ipad' text={t('navlinks.ipad')} />
            <NavLink href='/iphone' text={t('navlinks.iphone')} />
            <NavLink href='/watch' text={t('navlinks.watch')} />
            <NavLink href='/airpods' text={t('navlinks.airpods')} />
            <NavLink href='/tv' text={t('navlinks.tv')} />
          </ul>

          <div className='ml-auto md:ml-0'>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
