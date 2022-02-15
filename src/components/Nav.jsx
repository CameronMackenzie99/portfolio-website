import React from 'react'

function Nav() {
  return (
    <div>
      <nav className="font-sans text-md">
        <div className="flex justify-between max-w-6xl mx-auto px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <div className="flex grid grid-rows-2 w-16 text-xl text-white font-bold font-mono items-center justify-center text-center tracking-widest">
            <h2 className="grid-rows-1">Cameron</h2>
            <h2 className="grid-rows-1">Mackenzie</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 text-lg text-slate-300">
                <a
                  href="/#"
                  className="hover:border-b hover:border-slate-200 hover:text-white px-3 py-2"
                >
                  Home
                </a>
                <a
                  href="/#"
                  className="hover:border-b hover:border-slate-200 hover:text-white px-3 py-2"
                >
                  About
                </a>

                <a
                  href="/#"
                  className="hover:border-b hover:border-slate-200 hover:text-white px-3 py-2"
                >
                  Projects
                </a>

                <a
                  href="/#"
                  className="hover:border-b hover:border-slate-200 hover:text-white px-3 py-2"
                >
                  Contact
                </a>

                <a
                  href="/#"
                  className="hover:border-b hover:border-slate-200 hover:text-white px-3 py-2"
                >
                  Placeholder
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-16 h-16">
            <div className="bg-slate-200 rounded-full w-12 h-12 ">
              <button
                type="button"
                className="flex justify-center items-center"
              >
                {}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
