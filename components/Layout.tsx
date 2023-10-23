'use client'
import { FC } from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
