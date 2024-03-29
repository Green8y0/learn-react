import { Suspense } from 'react';
import { useNavigate, useRoutes } from 'react-router';
import { NavLink } from 'react-router-dom'
import './App.css';
import routes from './routers/index';

function App() {
  const routers = useRoutes(routes)
  const navigate = useNavigate()
  
  return (
    <div id='app'>
      <nav className='nav'>
        <div>
          <NavLink to={'/basic'}>react基本用法示例</NavLink>
        </div>
        <button
          onClick={() => {
            navigate('/higher')
          }}
        >react高级用法示例</button>
        <button
          onClick={() => {
            navigate('/closure')
          }}
        >闭包陷阱</button>
        <div>
          <NavLink to={'/example'}>react示例</NavLink>
        </div>
      </nav>
      <Suspense fallback={<div>loading...</div>}>
        {routers}
      </Suspense>
    </div>
  );
}

export default App;
