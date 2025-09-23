import React from "react"
import { setItem } from "../hooks/useLocalStorage"
import { Button } from "@mui/material"
import styles from "../modules/BackButton.module.css"

interface BackButtonProps {
  onClick?: () => void
  label?: string
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = "Tagasi",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (window.history.length > 1) {
      window.history.back()
      setItem("testkey", { foo: "foo" })
    }
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      className={styles.backButton}
      variant="contained"
    >
      &#8592; {label}
    </Button>
  )
}

export default BackButton
