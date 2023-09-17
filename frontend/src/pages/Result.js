import React from "react";
import Feedback from "./Feedback";
import Footer from "./footer";
import axios from "axios";

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
