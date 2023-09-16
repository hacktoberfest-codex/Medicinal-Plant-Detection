import { useState } from "react";
import { useDropzone } from "react-dropzone";
import upload from "../Assets/upload_image.png";
import "../style/dragDropStyle.css";
import Footer from "./footer";

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
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={file.name}
        />
      </div>
    </div>
  ));

  return (
    <>
      <section className="container" style={container}>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <img src={upload} alt="upload" style={{width: 60}}/>
          <h2>
            Click here to add files <br />
            or
            <br /> Drag & Drop files here
          </h2>
          <button class="btn btn-outline-info" style={{marginTop: 0}}>Browse Files</button>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
      <Footer />
    </>
    // <Result />
  );
}

export default Dragdrop;
