import React from "react";
import logo from "../Assets/Logo.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="content">
        {/* <img src={title} alt="title_background" /> */}
        <div className="title">
            <h1>Medicinal Plant Detection: The Future of Herbal Medicine</h1>
        </div>
        <div className="para">
            <p>
                The Website aims to develop a machine learning model for the
                identification and classification of medicinal plants from images
                and create a user-friendly application to provide valuable
                information about the plants.
            </p>
        </div>
        <div className="foot">
            <button type="button" className="btn btn-success" style={{ height: 50 }}>
                Try It
            </button>
            <img src={logo} alt="Logo" style={{ width: 200, height: 200 }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
