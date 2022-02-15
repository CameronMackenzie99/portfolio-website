import React, { useState } from 'react'

function MyForm() {
  const restEndpoint = 'http://127.0.0.1:80'

  const [inputs, setInputs] = useState(0)
  const [outputs, setOutputs] = useState({})
  const [isError, setIsError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // console.log(outputs);

  const handleChange = (event) => {
    const { name } = event.target
    const { value } = event.target
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // alert('submitted')

    // extract form data
    const formData = new FormData(event.target)
    // console.log(formData)

    // convert FormData to json object
    const json = {}
    formData.forEach((value, prop) => {
      json[prop] = value
    })
    // console.log(json)

    // convert json object to json string
    const jsonBody = JSON.stringify(json)
    // console.log(jsonBody);

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
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-4">
          <label
            htmlFor="salary"
            className="block text-slate-200 text-lg font-semibold"
          >
            Salary
          </label>
          <div className="border border-white/5 rounded-md px-2 py-1 shadow mt-1 inline-block bg-slate-600">
            <span className="font-bold text-slate-200 text-md mr-2">£</span>
            <input
              type="number"
              name="salary"
              value={inputs.salary}
              onChange={handleChange}
              placeholder="25971"
              className="bg-slate-600 text-slate-200"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="mt-4 mb-4">
          <label
            htmlFor="taxYear"
            className="block text-slate-200 text-lg font-semibold"
          >
            Tax Year
          </label>
          <div className="flex flex-row flex-auto justify-between text-slate-200">
            <select
              name="taxYear"
              value={inputs.taxYear}
              onChange={handleChange}
              className="border border-white/5 rounded-md px-2 py-1 shadow mt-1 inline-block bg-slate-600"
            >
              <option value="2021/22">2021/22</option>
              <option value="2020/21">2020/21</option>
            </select>
            <input
              type="submit"
              className="border border-white/5 rounded-md px-2 py-1 shadow mt-1 inline-block bg-slate-600 text-sky-300 text-bold font-sans"
              data-testid="submit-button"
            />
          </div>
        </div>
      </form>

      <p className="mb-5 text-center text-slate-200 text-xl font-mono">
        {isError && 'Could not fetch data...'}
      </p>
      {isSubmitted && (
        <div
          data-testid="calcResult"
          className="flex grid bg-slate-600 grid-rows-9 w-full text-xl shadow-sm rounded-xl font-mono text-center p-6"
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
            <div className="py-4 first:pt-0 last:pb-0 row-span-1 grid grid-cols-2 items-stretch border-b border-slate-700 last:border-b-0">
              <h4 className="text-slate-200 col-span-1 mr-10 text-right font-sans">
                {title}
              </h4>
              <p className="text-slate-100 col-span-1 ml-10 text-left">
                {value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyForm
