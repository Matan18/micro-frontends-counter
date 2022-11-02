import { useCounter } from "../../hook/useCounter"

const Counter = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <main>
      <button type="button" onClick={increment} >increment</button>
      <h1>{counter}</h1>
      <button type="button" onClick={decrement} >decrement</button>
    </main>
  )
}

export default Counter