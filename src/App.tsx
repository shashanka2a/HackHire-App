import { useEffect } from "react";
import { Router } from "./components/Router";

export default function App() {
  // Apply dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <Router />;
}