import React, { useCallback, useEffect, useState } from 'react'

const arr: any[] = []
const arr2: any[] = []
export default function ClosureDemo() {
  const [count, setCount] = useState(0)

  const fn = useCallback((...args: any[]) => {
    // 若count改变3次
    // 有几个fn？ -> 1个
    // 生成几次fn？-> 1+3次，组件初次渲染1次 + count改变的3次
    console.log(args);
  }, [count])

  useEffect(() => {
    arr.push(fn)
  }, [fn])

  useEffect(() => {
    arr2.push(fn)
  }, [count])

  useEffect(() => {
    console.log('arr = ', arr, arr.length > 1 ? arr[arr.length - 1] === arr[arr.length] : undefined);
    console.log('arr2 = ', arr2, arr2.length > 1 ? arr2[arr2.length - 1] === arr2[arr2.length] : undefined);
  })
  
  return (
    <div>
      <h2>ClosureDemo</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>count++</button>
    </div>
  )
}
