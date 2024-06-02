import React from 'react'
import CountDown from './CountDown'
import UseLayoutEffect from './UseLayoutEffect';

interface IProps {
  title: string
}

export default function Example({ title }: IProps) {
  return (
    <div>
      <h2>{title}</h2>
      {/* <CountDown/> */}
      <UseLayoutEffect/>
    </div>
  )
}
