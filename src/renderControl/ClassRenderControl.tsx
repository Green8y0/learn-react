// ClassRenderControl.tsx
import React, { Component } from 'react'

interface IState {
  num: number
  count: number
}

const Child = ({ num }: { num: number }) => {
  console.log('子组件执行, num = ', num);
  return <div>this is the child -- {num}</div>
}

export default class ClassRenderControl extends Component<{}, IState> {
  component: any;

  constructor(props: {}) {
    super(props)

    this.state = {
      num: 0,
      count: 0
    }

    this.component = <Child num={this.state.num}/>
  }

  controlRender = () => {
    const { props } = this.component
    console.log('props.num = ', props.num, ', this.state.num = ', this.state.num);
    if (props.num !== this.state.num) {
      return this.component = React.cloneElement(this.component, { num: this.state.num })
    }
    return this.component
  }
  
  render() {
    const { num, count } = this.state

    return (
      <div>
        {this.controlRender()}
        <button onClick={() => this.setState({ num: num + 1 })}>+num</button>
        <button onClick={() => this.setState({ count: count + 1 })}>+count</button>
      </div>
    )
  }
}
