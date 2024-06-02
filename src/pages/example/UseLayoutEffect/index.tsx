import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffect = () => {
  const [value, setValue] = useState('hello world')
  
  useEffect(() => {
    let i = 0
    while(i <= 1000000000) {
      i++
    }
    setValue('world hello')
  }, [])
  
  console.log('UseEffect render');
  return (
    <div>
      <h2>useEffect</h2>
      {value}
    </div>
  )
}
const UseLayoutEffect = () => {
  const [value, setValue] = useState('hello world')
  
  useLayoutEffect(() => {
    let i = 0
    while(i <= 1000000000) {
      i++
    }
    setValue('world hello')
  }, [])
  
  console.log('UseLayoutEffect render');
  return (
    <div>
      <h2>useLayoutEffect</h2>
      {value}
    </div>
  )
}

export default function UseLayoutEffectDemo() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <div>
      {visible1 && <UseEffect/>}
      {visible2 && <UseLayoutEffect/>}
      <button onClick={() => setVisible1(visible1 => !visible1)}>{visible1 ? '隐藏' : '显示'}UseEffect</button>
      <button onClick={() => setVisible2(visible2 => !visible2)}>{visible2 ? '隐藏' : '显示'}UseLayoutEffect</button>
    </div>
  )
}
