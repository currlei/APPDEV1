import { useEffect, useState } from "react";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";

function App() {
  const [screen, setScreen] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setScreen(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return screen === "#signup" ? <Signup /> : <Login />;
}

export default App;
