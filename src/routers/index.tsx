// routers/index.tsx 第二种写法
import React from 'react'
import { RouteObject, Navigate } from 'react-router'
import Basic from '../pages/basic'
const Higher = React.lazy(() => import('../pages/higher'))
const Closure = React.lazy(() => import('../pages/closure'))
const Example = React.lazy(() => import('../pages/example'))

const routes: RouteObject[] = [
  // 访问/重定向至/home
  {
    path: '/',
    element: <Navigate to={'/basic'}/>
  },
  {
    path: '/basic',
    element: <Basic title='react基本用法'/>
  },
  {
    path: '/higher',
    element: <Higher title='react高级用法'/>
  },
  {
    path: '/closure',
    element: <Closure title='闭包陷阱'/>
  },
  {
    path: '/example',
    element: <Example title='React示例'/>
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
]

export default routes