import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Members from "./components/Members";
import Community from "./components/Community";
import Price from "./components/Price";
import "./components/Login";
import Footer from "./components/Footer";
import { PrinterCheck } from "lucide-react";
import Diet_plans from "./components/Diet_plans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Diet_plans />
      <Community />
      <Members />
      <Price />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
