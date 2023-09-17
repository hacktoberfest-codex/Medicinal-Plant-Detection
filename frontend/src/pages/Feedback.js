import React, { useState } from "react";
import { Container, Paper, Button } from "@mantine/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const outerContainerStyles = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: "30px",
  marginTop: "30px",
};

const innerContainerStyles = {
  backgroundColor: "rgb(215, 215, 217)",
  height: "50vh",
  width: "50vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  top: "50",
  border: "2px solid grey",
  borderRadius: "10px",
};
const subContainerStyles = {
  backgroundColor: "rgb(215, 215, 217)",
  height: "100%",
  width: "100%",
  margin: "16px 0",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingLeft: "3px",
  borderRadius: "10px",
};
const buttonStyle = {
  backgroundColor: "white",
  borderRadius: "50%",
  margin: "5px",
  width: "60px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "27px",
};

const textAreaStyle = {
  width: "70%",
  minHeight: "150px",
  maxHeight: "150px",
  padding: "8px",
  fontSize: "16px",
  border: "1px solid black",
  borderRadius: "10px",
};

function Feedback() {
  const [mood, setMood] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleMoodClick = (selectedMood) => {
    setMood(selectedMood);
  };
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/plant/feedback", {
        score: mood,
        description: feedback,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={outerContainerStyles}>
      <Container size="lg">
        <Container size="md">
          <Paper style={innerContainerStyles}>
            <Paper padding="lg" style={subContainerStyles}>
              <div>
                <p>
                  <b>Rate us Here: </b>
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  style={buttonStyle}
                  onClick={() => handleMoodClick("☹")}
                  value={1}
                  variant={mood === "☹" ? "gradient" : "filled"}
                >
                  ☹
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => handleMoodClick("😕")}
                  value={2}
                  variant={mood === "😕" ? "gradient" : "filled"}
                >
                  😕
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => handleMoodClick("😐")}
                  value={3}
                  variant={mood === "😐" ? "gradient" : "filled"}
                >
                  😐
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => handleMoodClick("🙂")}
                  value={4}
                  variant={mood === "🙂" ? "gradient" : "filled"}
                >
                  🙂
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => handleMoodClick("😃")}
                  value={5}
                  variant={mood === "😃" ? "gradient" : "filled"}
                >
                  😃
                </Button>
              </div>
            </Paper>
            <Paper style={subContainerStyles}>
              <textarea
                rows="40"
                cols="50"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Enter your feedback here..."
                style={textAreaStyle}
              ></textarea>
              <button
                type="button"
                className="btn btn-primary my-3"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Paper>
          </Paper>
        </Container>
      </Container>
    </div>
  );
}

export default Feedback;
