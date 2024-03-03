// FuncContext.tsx
import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const Child = () => {
  const context = useContext(ThemeContext)
  
  return (
    <div>{context}</div>
  )
}

const Parent = () => (<Child/>)

export default function FuncContext() {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={theme}>
      <Parent/>
      <button onClick={() => setTheme('light')}>light</button>
      <button onClick={() => setTheme('dark')}>dark</button>
    </ThemeContext.Provider>
  )
}
