import { useEffect, useRef, useState } from 'react'

export function useCountDown(
  second: number
): [number, (val: number) => void] {
  const [count, setCount] = useState(second)
  const timer = useRef<NodeJS.Timer | null>(null)

  useEffect(() => {
    if (count > 0) {
      timer.current = setTimeout(() => {
        setCount(count => count - 1)
      }, 1000)
    }
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  })

  return [
    count,
    (reset: number) => setCount(reset)
  ]
}