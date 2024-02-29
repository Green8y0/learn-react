import { useState } from 'react';
import './App.css';
import ClassCom from './basic/ClassCom';
import FuncCom from './basic/FuncCom';
import Other from './basic/Other';

function App() {
  const [count, setCount] = useState(0)

  const addCount = (value: number) => {
    setCount(count + value)
  }
  const minusCount = (value: number) => {
    setCount(count - value)
  }

  return (
    <div id='app'>
      <ClassCom name='类组件' addCount={addCount} />
      <FuncCom
        name='函数组件'
        count={count}
        minusCount={minusCount}
      />
      <Other/>
    </div>
  );
}

export default App;
