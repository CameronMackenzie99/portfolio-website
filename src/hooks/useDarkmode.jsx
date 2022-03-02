import { useState, useEffect } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState('dark')
  const currentTheme = theme === 'light' ? 'dark' : 'light'
  useEffect(
    () => {
      const root = window.document.documentElement
      root.classList.remove(currentTheme)
      root.classList.add(theme)
    },
    [theme],
    currentTheme,
  )
  return [currentTheme, setTheme]
}
