import './App.css'
import React from 'react'

import MyForm from './components/Form'
import Nav from './components/Nav'

function App() {
  return (
    <div className="bg-gradient-to-tr from-slate-800 via-slate-700 to-sky-900 pb-4 h-screen bg-cover">
      <Nav />
      <div className="md:w-1/2 mx-auto">
        <div className="px-2 py-1 mt-1 flex flex-col font-sans items-center">
          <p className="text-sky-300 font-semibold uppercase">Project</p>
          <h1 className="text-4xl font-bold text-slate-200 py-4">
            Take-home Pay Calculator
          </h1>
          <p className="text-slate-200 text-lg">
            Enter your annual salary for an estimate of tax and national
            insurance contributions.
          </p>
        </div>
        <div>
          <MyForm />
        </div>
      </div>
    </div>
  )
}

export default App
