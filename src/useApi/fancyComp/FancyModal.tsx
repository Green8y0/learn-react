// FancyModal.tsx
import { forwardRef, useImperativeHandle, useState } from "react"

export interface ModalRef {
  setVisible: (val: boolean) => void
}

// 一个弹窗
function Modal(_: any, ref: React.Ref<ModalRef>) {
  const [vis, setVis] = useState(true)
  const setVisible = (val: boolean) => {
    setVis(val)
  }

  // 相当于 vue 中的expose
  // 我把Modal的方法，包装成了对象，给转发出去
  useImperativeHandle(ref, () => ({
    setVisible
  }))
  
  return <div style={{
    display: vis ? 'block' : 'none',
    position: 'relative',
    height: '100px',
    backgroundColor: '#e8e8e8'
  }}>
    我是一个模拟弹窗
    <button
      style={{
      position: 'absolute',
      right: '10px',
      top: '10px'
    }}
      onClick={() => setVisible(false)}
    >X</button>
  </div>
}

const FancyModal = forwardRef(Modal);

export default FancyModal