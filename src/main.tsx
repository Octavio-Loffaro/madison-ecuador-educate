import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Single Page App redirect handling for GitHub Pages
const isRedirected = sessionStorage.redirect;
delete sessionStorage.redirect;
if (isRedirected) {
  history.replaceState(null, null, isRedirected);
}

createRoot(document.getElementById("root")!).render(<App />);
