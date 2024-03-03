import React from 'react'
import styles from './card.module.css'

interface IProps {
  title: string
  children?: React.ReactNode
}

export default function Card({
  title, children
}: IProps) {
  return (
    <div>
      <h3>{title}</h3>
      {children && <div className={styles.content}>
        {children}
      </div>}
    </div>
  )
}

export function withCard (title: string) {
  return <T,>(Component: React.ComponentType<T>) => {
    return (props: any) => {
      const hocStyle = {
        margin: '12px',
        padding: '12px',
        border: '1px solid #e8e8e8',
        borderRadius: '4px'
      }
  
      return <div style={hocStyle}>
        <h2>{title}</h2>
          <Component {...props}/>
      </div>
    }
  }
}
