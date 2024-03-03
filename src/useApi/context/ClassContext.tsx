// ClassContext.tsx
import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

interface IState {
  theme: string
}

class Child1 extends Component {
  // 1. 通过静态变量拿
  static contextType = ThemeContext

  render () {
    return (<div>
      Child1 -- {(this.context as any)}
    </div>)
  }
}

class Child2 extends Component {
  // 2. ThemeContext.Consumer
  render() {
    return <ThemeContext.Consumer>
      {
        (theme) =>  (<div>
          Child2 -- {theme}
        </div>)
      }
    </ThemeContext.Consumer>
  }
}

const Parent = () => {
  return (
    <div>
      <Child1/>
      <Child2/>
    </div>
  )
}

export default class ClassContext extends Component<any, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      theme: 'light'
    }
  }
  
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Parent/>
        <button onClick={() => this.setState({ theme: 'light' })}>light</button>
        <button onClick={() => this.setState({ theme: 'dark' })}>dark</button>
      </ThemeContext.Provider>
    )
  }
}
