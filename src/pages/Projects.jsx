import { useNavigate } from 'react-router-dom'
import APIProjectIcon from '../assets/thpicon1.png'

export function Projects() {
  const navigate = useNavigate()
  return (
    <div className="md:w-1/2 mx-auto">
      <div className="px-2 py-4 flex flex-col font-sans space-y-4">
        <div className="flex items-center justify-center">
          <p className="text-emerald-500 font-semibold uppercase">Projects</p>
        </div>
        <h1 className="text-2xl pb-8">
          Below is a list of my recent projects, which I am continuing to
          develop and improve as I learn new skills.
        </h1>

        <div className="flex grid grid-cols-2 justify-between gap-x-4">
          <div className="grid gap-y-2 col-span-1 flex justify-center items-center bg-slate-300/50 dark:bg-slate-600/75 p-2 rounded-md shadow-md">
            <div className="flex items-center justify-center">
              <p className="text-2xl font-bold py-2">Take-home Pay API</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={APIProjectIcon}
                alt=""
                className="object-scale-down rounded-md shadow-md"
              />
            </div>
            <div className="flex items-center justify-center py-2">
              <p className="text-center">
                A REST API that can be queried for tax and national insurance
                contributions on a gross salary. Built with Python and FastAPI,
                dockerised and deployed on AWS.
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-12 py-2">
              <LinkButton
                label="See Details"
                onClick={() => navigate('take-home-pay-calculator-details')}
              />
              <LinkButton
                label="Live Demo"
                onClick={() => navigate('take-home-pay-calculator')}
              />
              <LinkButton
                label="Github"
                onClick={() =>
                  window.open(
                    'https://github.com/CameronMackenzie99/take-home-pay-calculator',
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LinkButton({ label, onClick }) {
  return (
    <button
      type="button"
      className="bg-emerald-500/75 dark:bg-slate-700/75 shadow-md px-1 py-2 rounded-md w-24 hover:ring-1 hover:ring-emerald-500 font-bold hover:-translate-y-1 transition ease-in-out"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
