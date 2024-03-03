import React, { useRef } from 'react'

export default function FuncRef() {
  const inputRef = useRef<HTMLInputElement>(null)
  
  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>focus</button>
    </div>
  )
}
