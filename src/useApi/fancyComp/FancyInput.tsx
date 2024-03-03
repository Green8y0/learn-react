// FancyInput.tsx
import { forwardRef, useImperativeHandle, useRef } from "react"

export interface InputRef {
  changeText: (val: string) => void
  setFocus: () => void
}

// 有一个Input
const Input = (_: any, ref: React.Ref<InputRef>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  
  const changeText = (val: string) => {
    if (inputRef.current !== null) {
      inputRef.current.value += val
    }
  }

  const setFocus = () => {
    inputRef.current?.focus()
  }
  
  // output
  useImperativeHandle(ref, () => ({
    changeText, setFocus
  }))
  
  return <input type="text" ref={inputRef} />
}

const FancyInput = forwardRef(Input)

export default FancyInput