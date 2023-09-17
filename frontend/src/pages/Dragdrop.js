import Footer from "./Footer.js";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../style/dragDropStyle.css";

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
  width: "100%",
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
      <section className="container" style={container}>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <h2>
            Click here to add files <br />
            or
            <br /> Drag & Drop files here
          </h2>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
      <Footer />
    </>
    // <Result />
  );
}

export default Dragdrop;
