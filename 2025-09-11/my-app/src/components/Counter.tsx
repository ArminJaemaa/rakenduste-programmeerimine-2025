import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function IncreaseCounter(countButton: number) {
    setCount(count => count + countButton)
  }

  const positiveButtons = [100, 50, 25, 1]
  const negativeButtons = [-1, -25, -50, -100]

  return (
    <>
      <h1>Vite + React</h1>
      <div className="counter">
        {negativeButtons.map((amount, index) => (
          <button
            key={index}
            onClick={() => IncreaseCounter(amount)}
          >
            {amount}
          </button>
        ))}
        <button onClick={() => setCount(0)}>count is {count}</button>
        {positiveButtons.map((amount, index) => (
          <button
            key={index}
            onClick={() => IncreaseCounter(amount)}
          >
            +{amount}
          </button>
        ))}
      </div>
    </>
  )
}

export default Counter
