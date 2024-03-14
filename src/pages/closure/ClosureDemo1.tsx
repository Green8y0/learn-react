import React, { useEffect } from 'react'

export default function ClosureDemo1() {
  useEffect(() => {
    return () => {
      // 此处何时执行?执行几次? -> 组件销毁(切换路由...)时会执行一次
      console.log('useEffect返回函数执行几次?');
    }
  }, [])
  
  return <div>
    ClosureDemo1
  </div>
}
