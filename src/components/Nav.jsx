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
    <div
      className={
        match
            ? 'p-2 border-b-2 border-emerald-500 text-slate-900 dark:text-white font-bold'
            : 'p-2 text-slate-800 dark:text-slate-200 hover:transition-all hover:duration-100 hover:text-white hover:bg-slate-600/50 rounded-xl'
      <Link to={to}>{children}</Link>
      {match}
    </div>
  )
}
export function Nav() {
  return (
    <div>
      <nav className="font-sans text-md">
        <div className="flex justify-between max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex grid grid-rows-2 w-16 text-2xl text-slate-900 dark:text-white font-bold font-mono items-center justify-center text-center tracking-widest ml-2">
            <h2 className="grid-rows-1">Cameron</h2>
            <h2 className="grid-rows-1">Mackenzie</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 text-lg">
                {navigation.map((item) => (
                  <StoreActiveLink key={item.name} to={item.href}>
                    {item.name}
                  </StoreActiveLink>
                ))}
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}

export default Nav
