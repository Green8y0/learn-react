// ClassCom.tsx
import React, { Component } from 'react'

interface IProps {
  name: string
  addCount: (value: number) => void
}

interface IState {
  number: number
  msg: string
}
type ClickType = 'plus' | 'minus'

export default class ClassCom extends Component<IProps> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      number: 0,
      msg: 'hello luyi'
    } as IState
  }
  
  handleClick = (type: ClickType) => {
    this.setState({
      number: (this.state as IState).number + (type === 'plus' ? 1 : -1)
    }, () => {
      // 此处可以拿到最新的state值
      console.log("setState cb state number 的值", (this.state as IState).number)
    })
    // this.setState是异步的，此处无法拿到最新的setState后的值
    console.log("fn state number 的值", (this.state as IState).number)
  }
  handleClickFn =  (type: ClickType) => {
    this.setState({
      number: (this.state as IState).number + (type === 'plus' ? 1 : -1)
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      msg: event.target.value
    })
  }

  render() {
    const { number, msg } = this.state as IState
    const { name, addCount } = this.props
    
    return (
      <div>
        <h2>{name}: state的用法</h2>
        {/* 双向绑定 */}
        <div>the number is {number}</div>
        <input type="text" value={msg} onChange={this.handleChange} />
        <button onClick={() => this.handleClick('plus')}>+</button>
        <button onClick={this.handleClickFn.bind(this, 'minus')}>-</button>
        <button onClick={() => addCount(1)}>父组件count+1</button>
      </div>
    )
  }
}
