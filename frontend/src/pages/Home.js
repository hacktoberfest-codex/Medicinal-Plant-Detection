import React from "react";
import logo from "../Assets/Logo.png";
import Typewriter from "./Typewriter";

const Home = () => {
  const btn = {
    width: "100px",
    height: "50px",
    fontWeight: "bolder",
  };
  return (
    <div className="Home">
      <div className="content">
        <div className="title">
            <h1>Medicinal Plant Detection: The Future of Herbal Medicine</h1>
        </div>
        <div className="para">
            <p>
                <Typewriter text="The Website aims to develop a machine learning model for the
                identification and classification of medicinal plants from images
                and create a user-friendly application to provide valuable
                information about the medicinal plants." delay = {60} />
            </p>
        </div>
        <div className="foot">
            <button type="button" className="btn btn-outline-success" style={btn}>
                Try It
            </button>
            <img src={logo} alt="Logo" style={{ width: 200, height: 200 }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
