import React, { useState } from 'react'

export function Calculator() {
  const restEndpoint = '../.netlify/functions/callCalcApi'

  const [outputs, setOutputs] = useState({
    gross_pay: '',
    national_insurance: '',
    net_pay: '',
    p20_tax_band: '',
    p40_tax_band: '',
    p45_tax_band: '',
    stu_loan_payment: null,
    tax_free_allowance: '',
    total_tax_due: '',
    total_taxable: '',
  })
  const [isError, setIsError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    // extract form data
    const formData = new FormData(event.target)

    // convert FormData to json object
    const json = {}
    formData.forEach((value, prop) => {
      json[prop] = value
    })

    // convert json object to json string
    const jsonBody = JSON.stringify(json)

    // POST request to API endpoint
    fetch(restEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody,
    })
      .then((response) => response.json())
      .then((data) => setOutputs(data))
      .then(() => setIsError(false))
      .then(() => setIsSubmitted(true))
      .catch(() => {
        setIsError(true)
      })
  }

  return (
    <div>
      <CalculatorForm handleSubmit={handleSubmit} />

      <p className="mb-5 text-center text-xl font-mono">
        {isError && 'Could not fetch data...'}
      </p>
      {isSubmitted && (
        <div className="px-4 flex justify-center">
          <div
            data-testid="calcResult"
            className="grid bg-slate-300/50 dark:bg-slate-600/75 grid-rows-9 text-xl shadow-lg rounded-md border border-white/5 font-mono text-center py-6 px-4"
          >
            {[
              ['Gross Salary', outputs.gross_pay],
              ['Net Salary', outputs.net_pay],
              ['Tax-free Allowance', outputs.tax_free_allowance],
              ['Taxable Income', outputs.total_taxable],
              ['Total Tax Due', outputs.total_tax_due],
              ['National Insurance', outputs.national_insurance],
              ['20% Tax Band', outputs.p20_tax_band],
              ['40% Tax Band', outputs.p40_tax_band],
              ['45% Tax Band', outputs.p45_tax_band],
            ].map(([title, value]) => (
              <div
                key={title}
                className="py-4 mx-2 first:pt-0 last:pb-0 row-span-1 grid grid-cols-2 items-stretch border-b border-slate-400 dark:border-slate-700 last:border-b-0"
              >
                <h4 className="text-slate-900 dark:text-slate-200 col-span-1 mr-10 text-right font-sans">
                  {title}
                </h4>
                <p className="text-slate-800 dark:text-slate-100 col-span-1 ml-10 text-left">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function CalculatorForm({ handleSubmit }) {
  const [inputs, setInputs] = useState(0)

  const handleChange = (event) => {
    const { name } = event.target
    const { value } = event.target
    setInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <div className="mb-4 mt-4 px-4">
      <form className="" onSubmit={handleSubmit}>
        <div className="justify-center sm:justify-start flex">
          <label
            htmlFor="salary"
            className="mt-1 inline-block text-lg font-semibold text-center sm:text-left"
          >
            Salary
            <div className="flex items-center border border-white/5 rounded-md bg-slate-300/50 dark:bg-slate-600/75 px-2 mt-1 shadow-lg hover:dark:bg-slate-600">
              <span className="font-bold text-md mr-1 bg-slate-300/50 dark:bg-slate-600/75">
                ??
              </span>
              <input
                type="text"
                name="salary"
                value={inputs.salary}
                onChange={handleChange}
                placeholder="25971"
                className="bg-transparent border-0 rounded-md w-20"
                autoComplete="off"
                required
              />
            </div>
          </label>
        </div>
        <div className="my-4">
          <div className="sm:flex sm:flex-wrap sm:justify-between">
            <div className="flex justify-center mb-8 sm:mb-0">
              <label
                htmlFor="taxYear"
                className="inline-block text-center sm:text-left text-lg font-semibold"
              >
                Tax Year
                <select
                  name="taxYear"
                  value={inputs.taxYear}
                  onChange={handleChange}
                  className="border border-white/5 rounded-md py-1 shadow-lg mt-1 bg-slate-300/50 dark:bg-slate-600/75 hover:ring-1 hover:ring-emerald-500 h-10 flex"
                >
                  <option value="2021/22">2021/22</option>
                  <option value="2020/21">2020/21</option>
                </select>
              </label>
            </div>
            <div className="flex justify-center items-end">
              <input
                type="submit"
                className="border border-white/5 rounded-md px-2 py-1 shadow-lg mt-1 bg-emerald-500/75 dark:bg-slate-600/75 font-bold hover:-translate-y-1 transition ease-in-out hover:ring-1 hover:ring-emerald-500"
                data-testid="submit-button"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
