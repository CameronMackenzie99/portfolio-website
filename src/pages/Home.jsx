// import CV from '../assets/CameronMackenzie_CV.pdf'
import landscape from '../assets/landscape1.jpg'

export function Home() {
  return (
    <div className="">
      <div className="px-4 py-10 flex flex-col font-sans text-slate-800 dark:text-white">
        <div className="py-10 flex flex-wrap font-sans gap-6">
          <div className="flex items-center md:basis-1/2">
            <p className="font-bold text-4xl lg:text-5xl tracking-wide">
              Hi, I&apos;m Cameron Mackenzie, an aspiring software developer.
            </p>
          </div>
          {/* <div className="flex items-center justify-center">
            <a
              href={CV}
              target="_blank"
              className="motion-safe:hover:-translate-y-1 transition ease-in-out"
            >
              <span className="bg-emerald-500/75 dark:bg-slate-600/75 p-4 rounded-xl shadow-md font-bold text-2xl dark:text-emerald-500">
                See my CV
              </span>
            </a>
          </div> */}
          <div className="flex justify-center py-2 basis-1/4 md:basis-1/4 grow">
            <img
              className="rounded-md shadow-lg object-cover md:object-right"
              src={landscape}
              alt="Me standing on Stannage Edge with arms out holding a map"
            />
          </div>
          <div className="flex justify-center items-center basis-2/5 grow py-2">
            <h2 className="text-3xl">
              A self-motivated, fast learner working on personal projects to
              develop my coding skills.
            </h2>
          </div>
        </div>
        <div className="gap-x-10">
          <p className="text-xl text-left">
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
