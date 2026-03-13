import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Lab from "./pages/Lab";
import Connect from "./pages/Connect";

export default function App() {
  // Prevent cursor default on desktop
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      document.documentElement.style.cursor = "none";
    }
  }, []);

  return (
    <div className="min-h-screen bg-void text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <main>
        <Home />
        <About />
        <Lab />
        <Connect />
      </main>
    </div>
  );
}
