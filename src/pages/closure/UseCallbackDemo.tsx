import React, { useCallback, useState } from 'react'

// 问：为何Child传递的是handleChild时，每次count的改变，都会触发Child的重新渲染？
// 答：
// 1. React.memo是一个高阶组件，它接收一个组件A作为参数，并返回一个组件B，若组件B的props没有改变，则组件B会阻止组件A的重新渲染
// 2. 因为每次count变化，都会重新触发Parent的render()，生成handleChild，引用地址发生了改变，即Child接收的props发生了改变

// 问：为何Child传递的是handleChild2时，count的改变，不会触发Child的重新渲染？
// 答：因为handleChild2是被useCallback缓存起来的函数，依赖项数组为[]，count的改变不会触发handleChild2的重新生成
const Child = React.memo(({ handleChild }: {
  handleChild: () => void
}) => {
  console.log('Child rending');
  return <div onClick={handleChild}>Child</div>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleChild = () => {
    console.log('clicked Child');
  };

  const handleChild2 = useCallback(() => {
    console.log('clicked Child');
  }, [])
  
  const handleParent = () => {
    console.log('clicked Parent');
    setCount(preCount => preCount + 1);
  };
  
  return (
    <div>
      <div>Parent -- count = {count} </div>
      <button onClick={handleParent}>count++</button>
      <Child handleChild={handleChild2} />
    </div>
  );
}
