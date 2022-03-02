import Nav from '../components/Nav'

export function Layout(props) {
  return (
    <div className="bg-gradient-to-tr from-sky-200 via-sky-100 to-sky-300 dark:from-slate-800 dark:via-slate-700 dark:to-sky-900 pb-4 h-screen bg-cover text-slate-900 dark:text-slate-200">
      <Nav />
      {props.children}
    </div>
  )
}
