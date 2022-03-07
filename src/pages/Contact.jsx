export function Contact() {
  return (
    <div className="md:w-1/2 mx-auto">
      <div className="px-2 py-4 flex flex-col justify-center items-center font-sans">
        <p className="text-emerald-500 font-semibold uppercase justify-self-center">
          Contact
        </p>

        <p className="text-lg text-left pt-4 pb-8">
          Feel free to use the contact form below for any enquiries or
          opportunities, or alternatively via LinkedIn / Github.
        </p>

        <div>
          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div className="mt-5 md:mt-0 col-span-1">
              <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div className="shadow-lg rounded-md border border-white/5 sm:overflow-hidden">
                  <div className="px-4 py-5 bg-slate-300/50 dark:bg-slate-600/75 space-y-6 sm:p-6 ">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="text"
                            name="name"
                            id="name"
                            className="focus:ring-emerald-500 focus:border-emerald-500 block w-full rounded-md sm:text-sm dark:text-slate-900"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Email
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            className="focus:ring-emerald-500 focus:border-emerald-500 block w-full rounded-md sm:text-sm dark:text-slate-900"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Message
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <textarea
                            required
                            name="message"
                            id="message"
                            rows={3}
                            className="focus:ring-emerald-500 focus:border-emerald-500 block w-full rounded-md sm:text-sm dark:text-slate-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-slate-300/50 dark:bg-slate-600/75 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-white/5 shadow-sm font-medium rounded-md bg-emerald-500/75 dark:bg-slate-700/75 hover:ring-1 hover:ring-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:-translate-y-1 transition ease-in-out"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-span-1 my-auto">
              <div className="px-0 sm:px-20">
                <div className="">
                  <div className="flex flex-wrap">
                    <div className="md:w-3/4">
                      <a
                        href="https://github.com/CameronMackenzie99"
                        target="_blank"
                        className=""
                      >
                        <div className="relative group py-4 my-4 px-4 flex justify-left items-center bg-slate-300/50 dark:bg-slate-600/75 shadow-lg rounded-md border border-white/5 hover:ring-1 hover:ring-emerald-500 hover:-translate-y-1 transition ease-in-out">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            className="fill-slate-900 dark:fill-slate-300"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>

                          <p className="text-lg mx-4">/CameronMackenzie99</p>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="absolute top-2 right-2 fill-slate-900 dark:fill-slate-300 group-hover:fill-emerald-500"
                          >
                            <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className="md:w-3/4">
                      <a
                        href="https://www.linkedin.com/in/cameron-mackenzie1999/"
                        target="_blank"
                        className=""
                      >
                        <div className="relative group py-4 my-4 px-4 flex justify-left items-center bg-slate-300/50 dark:bg-slate-600/75 shadow-lg rounded-md hover:ring-1 hover:ring-emerald-500 border border-white/5 hover:-translate-y-1 transition ease-in-out">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            className="fill-slate-900 dark:fill-slate-300"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>

                          <p className="text-lg ml-4">/cameron-mackenzie1999</p>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            className="absolute top-2 right-2 fill-slate-900 dark:fill-slate-300 group-hover:fill-emerald-500"
                          >
                            <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
