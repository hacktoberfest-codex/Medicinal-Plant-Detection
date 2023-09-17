import axios from "axios";
import React from "react";
import Feedback from "./Feedback";
import Footer from "./footer";

const Result = () => {
  const name = "Amomum longiligulare";
  const getItems = async () => {
    try {
      const { data } = await axios.get(`/api/v1/plant/${name}`);
      console.log(data.plant);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button onClick={getItems}>Get Item</button>
      <Feedback />
      <Footer />
    </>
  );
};

export default Result;
