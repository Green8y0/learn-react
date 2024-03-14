import React from 'react'
import ClosureDemo1 from './ClosureDemo1'
import ClosureDemo2 from './ClosureDemo2'
import ClosureDemo3 from './ClosureDemo3'
import ClosureDemo from './ClosureDemo'
import UseCallbackDemo from './UseCallbackDemo';

interface IProps {
  title: string
}

export default function Closure({
  title
}: IProps) {
  return (
    <div>
      <h2>{title}</h2>
      {/* <ClosureDemo1/> */}
      <hr />
      {/* <ClosureDemo2/> */}
      <hr />
      <ClosureDemo3/>
      {/* <ClosureDemo/> */}
      {/* <UseCallbackDemo/> */}
    </div>
  )
}
