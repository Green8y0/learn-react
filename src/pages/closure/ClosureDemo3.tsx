// 若点击一次show alert按钮，然后快速点击两次count++按钮
// 问：alert显示的值为? -> 0
// 追问：div中的count显示的值为? -> 3
// 追问：如何让alert显示的值为3? -> 使用ref存储count的值，setTimeout中alert(ref.current)
import React, { useEffect, useRef, useState } from 'react'

export default function ClosureDemo3() {
  const [count, setCount] = useState(0)
  const myRef = useRef(0)

  useEffect(() => {
    myRef.current = count
  }, [count])

  const log = () => {
    console.log('log() count = ', count);
    setTimeout(() => {
      // alert(count)
      alert(myRef.current)
    }, 3000);
  }
 
  return (
    <div>
      <h2>ClosureDemo</h2>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>count++</button> <br/>
      <button onClick={log}>show alert</button>
   </div>
  ) 
}
