import "./App.css"
import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import CounterPage from "./pages/CounterPage"
import About from "./pages/About"
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material"
import { Link } from "react-router"

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6"></Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
          >
            Minust
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/counter-page"
          >
            Counter
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}></Container>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="counter-page"
          element={<CounterPage />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="/*"
          element={<div>Page Not Found</div>}
        />
      </Routes>
    </>
  )
}

export default App
