import React from "react";
import Feedback from "./Feedback";
import Footer from "./footer";
import ResponseModel from "./ResponseModel";
import { Button } from "bootstrap";
import axios from "axios";

const Result = () => {
  const url =
    "https://media.istockphoto.com/id/1345935119/photo/aloe-or-aloe-vera-fresh-leaves-and-slices-on-white-background.jpg?s=2048x2048&w=is&k=20&c=4R38XWR5_j5LEyuk5nGHX5X9JISZC_IhbfZubvTkkGI=";

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
      <ResponseModel
        LocalName={"Aloe"}
        ScientificName={"Aloe Vera"}
        MedicinalFeatures={"inflamatory, medicinal"}
        img={url}
      />
      <button onClick={getItems}></button>
      <Feedback />
      <Footer />
    </>
  );
};

export default Result;
