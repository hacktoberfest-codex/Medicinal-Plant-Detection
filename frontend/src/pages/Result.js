import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/responseModel.css";
import Footer from "./footer";

const Result = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/feedback");
  // };
  
  const params = useParams();
  const [scientificName, setscientificName] = useState("");
  const [localName, setLocalName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const getSingleProduct = async () => {
    try {
      console.log(params.slug)
      const { data } = await axios.get(
        `/api/v1/plant/${params.slug}`
      );
      setscientificName(data.plant.scientificName);
      setLocalName(data.plant.localName);
      setDescription(data.plant.features);
      setPhoto(data.plant.photo);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  const features = description.split(",");

  const arrayDataItems = features.map((feature) => (
    <li key={feature}>{feature}</li>
  ));

  return (
    <>
      <div className="response-block" 
        style={{
          backgroundColor: "#D1FFBD",
          border: "25px solid #D9D9D9",
          height: "450px"}}>
        <h1 className="response_heading">{localName}</h1>
        <div className="response-content">
          <div className="right_side">
            <ul>
              <li>
                <span>Scientific Name:</span>
                <span>{scientificName}</span>
              </li>
              <li>
                <span>Local Name:</span>
                <span>{localName}</span>
              </li>
              <li>
                <span>Medicinal Features:</span>
                <ul>{arrayDataItems}</ul>
              </li>
            </ul>
            <button 
              type="button" 
              className="btn btn-outline-success" style={{ height: "40px", fontWeight: "bolder",}}>
              Give Feedback
            </button>
          </div>
          <div className="left_side">
            <div className="img">
              <img src={photo} alt={scientificName} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Result;
