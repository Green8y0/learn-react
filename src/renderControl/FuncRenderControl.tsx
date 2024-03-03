// FuncRenderControl.tsx
import React, { useCallback, useMemo, useState } from 'react'

const Child = ({ num }: {
  num: number
}) => {
  return <div>
    this is the child -- num = {num}
  </div>
}

const MemoChid = React.memo(({ num, onChange }: {
  num: number
  onChange: (val: number) => void
}) => {
  console.log('子组件执行, num = ', num);
  return <div>
    this is the MemoChild -- num = {num}
    <button onClick={() => onChange(-1)}>onChange</button>
  </div>
})

export default function FuncRenderControl() {
  const [num, setNum] = useState(0)
  const [count, setCount] = useState(0)

  const handleChange = useCallback((val: number) => {
    // setCount传递函数是为了解决闭包陷阱，若setCount(count + val)，此处的count拿不到最新的值
    console.log(count); // 这里的count只能拿到初始值
    setCount((count) => count + val)
  }, [])
  
  return (
    <div>
      {useMemo(() => <Child num={num}/>, [num])}
      <MemoChid num={num} onChange={handleChange}/>
      <button onClick={() => setNum(num + 1)}>+num: {num}</button>
      <button onClick={() => setCount(count + 1)}>+count: {count}</button>
    </div>
  )
}
