import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dragdrop from "./pages/Dragdrop";
// import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:slug" element={<Result />} />
        <Route path="/dragdrop" element={<Dragdrop />} />
        {/* <Route path="/feedback" elemenr={<Feedback />} /> */}
      </Routes>
    </>
  );
}

export default App;
