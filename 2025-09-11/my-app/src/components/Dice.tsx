import { useState } from "react"

function Dice() {
  const [dice, setDice] = useState(0)

  const rollDice = () => {
    setDice(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <>
      <button onClick={rollDice}>roll</button>
      <div>{dice}</div>
    </>
  )
}

export default Dice
