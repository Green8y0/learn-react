import React, { useMemo } from 'react'
import Card, { withCard } from '../hoc/Card';
import Extending from '../hoc/Extending';
import ClassRenderControl from '../renderControl/ClassRenderControl';
import ClosureTrap from '../renderControl/ClosureTrap';
import FuncRenderControl from '../renderControl/FuncRenderControl';
import ClassRef from '../useApi/ClassRef';
import ClassContext from '../useApi/context/ClassContext';
import FuncContext from '../useApi/context/FuncContext';
import RouterContext from '../useApi/context/RouterContext';
import FuncRef from '../useApi/FuncRef';
import Reducer from '../useApi/Reducer';
import VisibleApi from '../useApi/VisibleApi'

interface IProps {
  title?: string
}

const Text = ({num}: {num: number}) => <div>this is text -- {num}</div>
const CardText = withCard('Text Card')(Text)

export default function Higher({ title }: IProps) {
  const demos = useMemo(() => {
    return [
      {
        title: 'reducer',
        children: <Reducer/>
      },
      {
        title: 'classRef',
        children: <ClassRef/>
      },
      {
        title: 'funcRef',
        children: <FuncRef/>
      },
      {
        title: 'visibleApi',
        children: <VisibleApi/>
      },
      {
        title: 'ClassContext',
        children: <ClassContext/>
      },
      {
        title: 'FuncContext',
        children: <FuncContext/>
      },
      {
        title: 'RouterContext',
        children: <RouterContext/>
      },
      {
        title: 'Extending',
        children: <Extending/>
      },
      {
        title: 'ClassRenderControl',
        children: <ClassRenderControl/>
      },
      {
        title: 'FuncRenderControl',
        children: <FuncRenderControl/>
      },
      {
        title: '闭包陷阱',
        children: <ClosureTrap/>
      },
    ]
  }, [])
  
  return (
    <div>
      <h2>{title}</h2>
      {demos.map(demo => (
        <Card key={demo.title} title={demo.title}>
          {demo.children}
        </Card>
      ))}
      <CardText num={100} />
    </div>
  )
}
