// routers/index.tsx 第二种写法
import { RouteObject, Navigate } from 'react-router'
import Basic from '../basic'
import Higher from '../higher'

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
    element: <Higher/>
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
]

export default routes