'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from '@/components/main-header/main-header.module.css'

export default function NavLink({ href, linkName }) {
  const path = usePathname()
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {linkName}
    </Link>
  )
}
