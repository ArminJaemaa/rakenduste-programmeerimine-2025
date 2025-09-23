import { useState } from "react"
import "../App.css"
import { Box, Button, Stack, Typography } from "@mui/material"

function Counter() {
  const [count, setCount] = useState(0)

  function IncreaseCounter(amount: number) {
    setCount(count => count + amount)
  }

  const positiveButtons = [100, 50, 25, 1]
  const negativeButtons = [-1, -25, -50, -100]

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
        >
          Siin saab enda matemaatikat proovile panna
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
        >
          {negativeButtons.map((amount, index) => (
            <Button
              key={index}
              variant="outlined"
              color="error"
              onClick={() => IncreaseCounter(amount)}
            >
              {amount}
            </Button>
          ))}

          <Button
            variant="contained"
            color="primary"
            sx={{ mx: 2 }}
            onClick={() => setCount(0)}
          >
            Count is {count}
          </Button>

          {positiveButtons.map((amount, index) => (
            <Button
              key={index}
              variant="outlined"
              color="success"
              onClick={() => IncreaseCounter(amount)}
            >
              +{amount}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  )
}

export default Counter
