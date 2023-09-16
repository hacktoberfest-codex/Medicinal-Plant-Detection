import React from "react";
// import title from "../Assest/title_background";
import title from "../Assest/Titile_background.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="content">
        <img
          src={title}
          alt="title_background"
          height={{ width: "fit-content", height: "100" }}
        />
        <div className="para">
          <p>
            The Website aims to develop a machine learning model for the
            identification and classification of medicinal plants from images
            and create a user-friendly application to provide valuable
            information about the plants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
