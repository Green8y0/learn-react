import React from 'react'
import { useState } from 'react';
import ClassCom from './ClassCom';
import FuncCom from './FuncCom';
import Other from './Other';

interface IProps {
  title?: string
}

export default function Basic({ title = 'Basic' }: IProps) {
  const [count, setCount] = useState(0)

  const addCount = (value: number) => {
    setCount(count + value)
  }
  const minusCount = (value: number) => {
    setCount(count - value)
  }
  
  return (
    <div>
      <h1>{title}</h1>
      <ClassCom name='类组件' addCount={addCount} />
      <FuncCom
        name='函数组件'
        count={count}
        minusCount={minusCount}
      />
      <Other/>
    </div>
  )
}
