import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function IncreaseCounter(){
     setCount(count => count + 1)
  }

  return (
    <>
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={IncreaseCounter}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Counter
