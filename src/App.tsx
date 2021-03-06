import React from "react";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Logo />
      <main className="app-content" />
      <Footer />
    </div>
  );
}

export default App;
