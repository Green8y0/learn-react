import React, { Component, createRef } from 'react'

export default class ClassRef extends Component {
  eleRef: React.RefObject<HTMLDivElement>
  inputRef: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props)

    this.eleRef = createRef()
    this.inputRef = createRef()
  }

  handleClick = () => {
    // 希望点一下按钮，光标可以命中 input
    this.inputRef?.current?.focus()
  }
  
  render() {
    return (
      <div>
        <div id='this_is_me' ref={this.eleRef}>eleRef</div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>focus</button>
      </div>
    )
  }
}
