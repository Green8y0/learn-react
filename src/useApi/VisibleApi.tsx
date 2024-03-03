// VisibleApi.tsx
import React, { useRef } from 'react'
import FancyInput, { InputRef } from './fancyComp/FancyInput'
import FancyModal, { ModalRef } from './fancyComp/FancyModal'

export default function VisibleApi() {
  const modalRef = useRef<ModalRef>(null)
  const outerRef = useRef<InputRef>(null)
  
  return (
    <div>
      外层逻辑
      <button onClick={() => modalRef.current?.setVisible(true)}>显示</button>
      <button onClick={() => modalRef.current?.setVisible(false)}>隐藏</button>
      <FancyModal ref={modalRef} />

      <button onClick={() => outerRef.current?.changeText('内容1')}>内容1</button>
      <button onClick={() => outerRef.current?.setFocus()}>聚焦</button>
      <FancyInput ref={outerRef} />
    </div>
  )
}
