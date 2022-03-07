import { Footer } from '../components/Footer'
import Nav from '../components/Nav'

export function Layout(props) {
  return (
    <div className="bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-700 dark:to-sky-900 pb-4 h-screen bg-cover text-slate-900 dark:text-slate-200">
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}
