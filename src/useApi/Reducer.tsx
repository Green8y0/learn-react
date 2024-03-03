import React, { useReducer, useState } from 'react'

interface ReducerAction {
  type: 'increment' | 'decrement'
}

const initialState = { count: 0 }

function reducer(state: any, action: ReducerAction) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error('type error')
  }
}

export default function Reducer() {
  const [number, setNumber] = useState(0)
  // 问题在于，number可以是任意值，在使用中，可能会出现setNumber({})的情况

  // reducer: 可以让我的数据变得可预测
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: 'increment'})}>+</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
    </div>
  )
}
