// RouterContext.tsx
import React, { createContext, useContext } from 'react'

const HistoryContext = createContext<History | null>(null)

interface WithRouter {
  navigator: History | null
}

const history = window.history;

// HOC-高阶组件-参数为组件，返回值也为组件
const withRouter = (Component: React.ComponentType<WithRouter>) => {
  return () => {
    const nav = useContext(HistoryContext)
    return <Component navigator={nav} />
  }
}

const WithRouterChild = withRouter((props: WithRouter) => {
  console.log(props.navigator);
  
  return <div>
    <span>useContext 实现 HOC组件withRouter</span>
    <button onClick={() => props.navigator?.back()}>返回上一级</button>
  </div>
})

const Parent = () => <WithRouterChild/>

export default function RouterContext() {
  return (
    <HistoryContext.Provider value={history}>
      <Parent/>
    </HistoryContext.Provider>
  )
}