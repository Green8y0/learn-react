import React, { useEffect, useState } from 'react'

export default function ClosureDemo2() {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    // 若value改变了3次，这里的id有几个？ -> 1+3次，初始化1次 + value改变的3次
    const timer = setTimeout(() => {
      console.log('3秒后执行setTimeout()中 -> timer = ', timer);
    }, 3000)
    console.log('timer = ', timer); // 若value改变了3次，这里打印1+3次，初始化1次 + value改变的3次
    
    return () => {
      // 若value改变了3次，这里执行几次? -> 3次，每次value改变执行1次，然后再执行render()，触发新的视图更新
      console.log('clearTimeout -> timer = ', timer);
      clearTimeout(timer)
    }
  }, [value])

  return <div>
    <h3>ClosureDemo2 - {value}</h3>
    <button onClick={() => setValue(value + 1)}>value++</button>
  </div>
}

const Test = () => {
  // 初始化方法1
  console.log('init执行几次?');
  const init = Math.floor([1, 2, 3].length / 2)
  const [num, setNum] = useState(init)

  // 初始化方法2
  const [count, setCount] = useState(() => {
    console.log('useState的函数执行几次?');
    return Math.floor([1, 2, 3].length / 2)
  })

  return <div>Test</div>
}