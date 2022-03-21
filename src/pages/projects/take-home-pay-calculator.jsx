import { Calculator } from '../../components/Form'

export function TakeHomePayCalculator() {
  return (
    <>
      <div className="px-2 py-4 flex flex-col justify-center items-center font-sans">
        <p className="text-emerald-500 font-semibold uppercase justify-self-center">
          Project
        </p>

        <h1 className="text-4xl font-bold py-4">Take-home Pay Calculator</h1>

        <p className="text-lg text-left">
          Enter your annual salary for an estimate of tax and national insurance
          contributions.
        </p>
      </div>
      <div className="py-4 gap-4 text-lg">
        <Calculator />
      </div>
    </>
  )
}
