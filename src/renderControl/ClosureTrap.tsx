// ClosureTrap.tsx
import React, { useCallback, useState } from 'react'

// 闭包陷阱
export default function ClosureTrap() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    console.log('函数执行 setCount(count + 1), count = ', count);
    setCount(count + 1)
  }, [])

  const decrement = useCallback(() => {
    console.log('函数执行 setCount(count => count - 1), count = ', count);
    setCount(count => count - 1)
  }, [])
  
  return (
    <div>
      count: {count}
      <button onClick={increment}>count++</button>
      <button onClick={decrement}>count--</button>
    </div>
  )
}
