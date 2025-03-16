import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImg from '../../public/images/logo.png'
import classes from '@/components/main-header/main-header.module.css'
import NavLink from '../nav-link/nav-link'
import MainHeaderBackground from './main-header-background'
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={'/'} className={classes.logo}>
          <Image src={logoImg} alt="logo" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" linkName="Browse Meals" />
            </li>
            <li>
              <NavLink href="/community" linkName="Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
