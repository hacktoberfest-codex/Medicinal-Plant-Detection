import React, { useState } from "react";
import { Container, Paper, Button } from "@mantine/core";

const outerContainerStyles = {
  minHeight: "60vh",
  backgroundColor: "rgb(147,223,184)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
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
  borderRadius: "4px",
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
            </Paper>
          </Paper>
        </Container>
      </Container>
    </div>
  );
}

export default Feedback;
