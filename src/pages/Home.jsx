import CV from '../assets/CameronMackenzie_CV.pdf'
import landscape from '../assets/landscape1.jpg'

export function Home() {
  return (
    <div className="md:w-1/2 mx-auto">
      <div className="px-2 py-10 flex flex-col font-sans text-slate-800 dark:text-white">
        <div className="py-10 grid grid-cols-3 grid-flow-col gap-4 font-sans">
          <p className="font-bold text-5xl tracking-wide col-span-2">
            Hi, I&apos;m Cameron Mackenzie, an aspiring software developer.
          </p>
          <div className="flex items-center justify-center">
            <span className="bg-slate-300/50 dark:bg-slate-600/75 motion-safe:hover:-translate-y-1 transition ease-in-out p-4 rounded-xl shadow-md font-bold text-2xl text-emerald-500">
              <a href={CV} target="_blank">
                See my CV
              </a>
            </span>
          </div>
        </div>
        <h2 className="text-3xl pb-10">
          A self-motivated, fast learner working on personal projects to develop
          my coding skills.
        </h2>
        <div className="flex pt-5 gap-x-10">
          <div className="w-2/5">
            <img className="rounded-md shadow-lg" src={landscape} alt="" />
          </div>
          <p className="w-3/5 text-xl text-left">
            I have always loved technology, and became interested in software
            development during my Master&apos;s project in computational
            chemistry in the first half of 2021. I started self-directed
            learning and building small projects and quickly realised how much I
            loved the creative and problem-solving nature of writing code!{' '}
            <br /> <br /> This website is built with{' '}
            <span className="font-bold">React</span> and{' '}
            <span className="font-bold">TailwindCSS</span>, and shows some of my
            recent work as well as contact information. I am currently seeking a
            full-time position in the tech industry so please feel free to
            contact me if you have any opportunities that may be suitable!
          </p>
        </div>
      </div>
    </div>
  )
}
