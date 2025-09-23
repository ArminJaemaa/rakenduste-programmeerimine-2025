import "./App.css"
import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import CounterPage from "./pages/CounterPage"
import About from "./pages/About"

function App() {
  return (
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
  )
}

export default App
