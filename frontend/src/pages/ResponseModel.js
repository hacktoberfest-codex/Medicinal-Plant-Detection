import React from "react";
import "../style/responseModel.css";

function ResponseModel({ LocalName, ScientificName, MedicinalFeatures, img }) {
  const features = MedicinalFeatures.split(",");
  console.log(features);

  const arrayDataItems = features.map((feature) => (
    <li key={feature}>{feature}</li>
  ));
  return (
    <>
      <div className="response-block">
        <h1 className="response_heading">{LocalName}</h1>
        <div className="response-content">
          <div className="right_side">
            <ul>
              <li>
                <span>Scientific Name:</span>
                <span>{ScientificName}</span>
              </li>
              <li>
                <span>Local Name:</span>
                <span>{LocalName}</span>
              </li>
              <li>
                <span>Medicinal Features:</span>
                <ul>{arrayDataItems}</ul>
              </li>
            </ul>
          </div>
          <div className="left_side">
            <div className="img">
              <img src={img} alt={ScientificName} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponseModel;
