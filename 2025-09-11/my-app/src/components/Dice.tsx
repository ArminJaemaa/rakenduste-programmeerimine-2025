import { useState } from "react"
import styles from "./Dice.module.css"

function Dice() {
  const [dice, setDice] = useState(0)

  const rollDice = () => {
    setDice(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <>
      <div className={styles.diceContainer}>
        <button onClick={rollDice}>roll</button>
        <div className={styles.dice}>{dice}</div>
      </div>
    </>
  )
}

export default Dice
