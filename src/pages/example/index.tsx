import React from 'react'
import CountDown from './CountDown'

interface IProps {
  title: string
}

export default function Example({ title }: IProps) {
  return (
    <div>
      <h2>{title}</h2>
      <CountDown/>
    </div>
  )
}
