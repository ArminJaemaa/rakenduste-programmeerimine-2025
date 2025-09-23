import "./index.css"
import App from "./App.tsx"
import { HashRouter } from "react-router"
import ReactDOM from "react-dom/client"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const root = document.getElementById("root")!

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

ReactDOM.createRoot(root).render(
  <HashRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </HashRouter>,
)
