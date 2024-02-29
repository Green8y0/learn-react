// FuncCom.tsx
import React, { useEffect, useState } from 'react'

interface IProps {
  name: string
  count: number
  minusCount: (value: number) => void
}

export default function FuncCom({
  name, count, minusCount
}: IProps) {

  const [number, setNumber] = useState(() => 0);
  const [msg, setMsg] = useState('hello luyi');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(event.target.value)
  }
  useEffect(() => {}, [])

  return (
    <div>
      <h2>{name}: useState</h2>
      <div>parent's count is {count}</div>
      <div>the number is {number}</div>
      <input type="text" value={msg} onChange={handleChange} />
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(v => v - 1)}>-</button>
      <button onClick={() => minusCount(1)}>父组件count-1</button>
    </div>
  )
}
