import React from 'react'

// 假设，我们需要非常优雅地实现曝光埋点
/**
 * 有个按钮，我们想知道这个按钮在线上地数据转化
 * 每次按钮点击时，我记录一个sendLog('my_btn_click')，其实就是发一条http消息
 * 每次按钮出现时，我记录一个sendLog('my_btn_show')
 * 那我的转化，pv('my_btn_click') / pv('my_btn_show')
 */

function logProps(logMap: {
  my_text: string
  my_btn: string
}) {
  return (WarppedComponent: typeof React.Component) => {
    // 我最后返回的组件，继承我的业务组件
    const didMount = WarppedComponent.prototype.componentDidMount;
    return class A extends WarppedComponent {
      componentDidMount() {
        if (didMount) {
          didMount.apply(this)
        }

        Object.entries(logMap).forEach(([k, v]) => {
          if (document.getElementById(k)) {
            console.log('事件曝光', v);
          }
        })
      }

      render () {
        return super.render()
      }
    }
  }
}

class Index extends React.Component {
  render () {
    return <div>
      <div id='my_text'>这是一个文字信息</div>
      <button id='my_btn'>这是一个按钮</button>
    </div>
  }
}

// 我如果需要实现，我需要劫持生命周期
const LogIndex = logProps({
  my_text: 'my_text_show',
  my_btn: 'my_btn_show'
})(Index)

export default function Extending() {
  return (
    <div><LogIndex/></div>
  )
}
