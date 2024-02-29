import React, { useEffect, useState } from 'react'

const Hide = () => <div>no title</div>

const Title = ({ title }: { title: string}) => title.length ? <h3>{title}</h3> : <Hide />

export default function Other() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    // didMount
    setList(['luyi', 'yunyin', 'xiaozao'])
  }, [])

  return (
    <div>
      <h2>条件渲染、列表等</h2>

      <Title title={show ? '数据管理' : ''} />
      <h3>三元表达式返回null与||的用法</h3>
      {list.length === 0 ? null : <h4>前端老师们</h4>}
      {list.length === 0 || <h4>前端老师们</h4>}
      <ul>
        {
          list.map(item => <li key={item}>{item}</li>)
        }
      </ul>
      <ol>
        {
          (() => {
            let res = [];
            for (let item of list) {
              res.push(<li key={item}>{item}</li>)
            }
            return res;
          })()
        }
      </ol>

      <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
    </div>
  )
}
