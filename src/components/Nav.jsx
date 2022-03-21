import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Projects', href: '/projects', current: true },
  { name: 'Contact', href: '/contact', current: false },
]

function StoreActiveLink({ children, to }) {
  const location = useLocation()
  const match = location.pathname === to

  return (
    <Link to={to}>
      <div
        className={
          match
            ? 'p-2 border-b-2 border-emerald-500 text-slate-900 dark:text-white font-bold'
            : 'p-2 text-slate-800 dark:text-slate-200 hover:transition-all hover:duration-100 hover:text-white hover:bg-slate-600/50 rounded-xl'
        }
      >
        {children}
        {match}
      </div>
    </Link>
  )
}
export function Nav() {
  return (
    <nav className="font-sans text-md">
      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="md:hidden col-span-1 md:col-span-0 flex justify-start items-center">
          menu
        </div>
        <Link
          to="/"
          className="col-span-1 flex justify-center md:justify-start"
        >
          <div className="flex grid grid-rows-2 text-xl text-slate-900 dark:text-white font-bold font-mono items-center text-center tracking-widest">
            <h2 className="grid-rows-1">Cameron</h2>
            <h2 className="grid-rows-1">Mackenzie</h2>
          </div>
        </Link>
        <div className="justify-center items-center hidden md:flex md:col-span-1">
          <div className="">
            <div className="flex items-baseline space-x-4 text-lg">
              {navigation.map((item) => (
                <StoreActiveLink key={item.name} to={item.href}>
                  {item.name}
                </StoreActiveLink>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Nav
