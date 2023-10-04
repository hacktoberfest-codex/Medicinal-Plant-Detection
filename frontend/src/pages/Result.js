import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";
import Footer from "./footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../style/responseModel.css";

const Result = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [scientificName, setscientificName] = useState("");
  const [localName, setLocalName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const getSingleProduct = async () => {
    try {
      console.log(params.slug);
      const { data } = await axios.get(`/api/v1/plant/${params.slug}`);
      setscientificName(data.plant.scientificName);
      setLocalName(data.plant.localName);
      setDescription(data.plant.features);
      setPhoto(data.plant.photo);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    try {
      navigate("/feedback");
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
      <div className="response-block">
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
          </div>
          <div className="left_side">
            <div className="img">
              <img src={photo} alt={scientificName} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-success btn-lg mt-3 mb-5"
          onClick={handleClick}
        >
          Feedback
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Result;
