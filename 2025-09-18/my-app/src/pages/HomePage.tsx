import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import { Link } from "react-router"
import Dice from "../components/Dice"
function HomePage() {
  return (
    <>
      <Dice />
      <ButtonGroup
        orientation="vertical"
        size="large"
        variant="outlined"
        aria-label="button group"
      >
        <Link to="/counter-page">
          <Button>Counter</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </ButtonGroup>
    </>
  )
}

export default HomePage
