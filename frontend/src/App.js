import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Dragdrop from "./pages/Dragdrop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:slug" element={<Result />} />
        <Route path="/dragdrop" element={<Dragdrop />} />
      </Routes>
    </>
  );
}

export default App;
