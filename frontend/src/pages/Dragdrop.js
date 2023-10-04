import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import upload from "../Assets/upload_image.png";
import "../style/dragDropStyle.css";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as tf from "@tensorflow/tfjs";
import { plantClasses } from "../data/plantClasses";
// import "../Assets/model/model.json";

// Function to load an image and convert it to a tensor
async function loadImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => resolve(tf.browser.fromPixels(img));
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function preprocessImage(image) {
  const resizedImage = image.resizeBilinear([128, 128]); // Adjust size if necessary
  return resizedImage;
}


const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  // marginLeft: '100px',
  width: "100px",
  height: "100px",
  padding: "10px",
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const container = {
  width: "900px",
  marginTop: "50px",
  marginBottom: "50px",
};

const box = {
  border: "1px solid lightblue",
};

function Dragdrop(props) {
  const [files, setFiles] = useState([]);
  const [modelLoading, setModelLoading] = useState(true);
  const [model, setModel] = useState(null);
  const navigate = useNavigate();
  let modelLoad;
  tf.loadGraphModel("model/model.json").then(function (model) {
    window.model = model;
    setModelLoading(false);
  });

  const getPlantName = async (files) => {
    try {
      console.log(files);
      const image = await loadImage(files[0]);
      let tensor = preprocessImage(image);
      tensor = tensor.expandDims(0);
      console.log(tensor);
      console.log(window.model);
      const predictions = await window.model.predict(tensor).data();
      //   console.log(predictions);
      let index = predictions.indexOf(Math.max(...predictions));
      //   console.log(plantClasses[index]);
      navigate(`/result/${plantClasses[index]}`);
    } catch (error) {
      console.log(error);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      //   setFiles(
      //     acceptedFiles.map((file) =>
      //       Object.assign(file, {
      //         preview: URL.createObjectURL(file),
      //       })
      //     )
      //   );
      getPlantName(acceptedFiles);
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          //   onLoad={() => {
          //     URL.revokeObjectURL(file.preview);
          //   }}
          alt={file.name}
        />
      </div>
    </div>
  ));

  return (
    <>
      {!modelLoading && (
        <>
          <section className="container" style={container}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <img src={upload} alt="upload" style={{ width: 60 }} />
              <h2>
                Click here to add files <br />
                or
                <br /> Drag & Drop files here
              </h2>
              <button class="btn btn-outline-info" style={{ marginTop: 0 }}>
                Browse Files
              </button>
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
          </section>
          <Footer />
        </>
      )}
    </>
    // <Result />
  );
}

export default Dragdrop;
