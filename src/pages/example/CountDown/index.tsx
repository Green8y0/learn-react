import { useCountDown } from "./useCountDown"

export default function CountDown() {
  const [count, setCount] = useCountDown(5);
  
  return (
    <div>
      <h3>倒计时:{count}</h3>
      <button onClick={() => setCount(5)}>重置倒计时</button>
    </div>
  )
}
