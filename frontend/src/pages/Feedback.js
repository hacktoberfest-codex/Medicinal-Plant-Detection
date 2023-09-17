import { Button, Container, Paper } from "@mantine/core";
import React, { useState } from "react";

const outerContainerStyles = {
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const innerContainerStyles = {
  backgroundColor: "rgb(206, 213, 222)",
  height: "50vh",
  width: "70vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  top: "50",
};
const subContainerStyles = {
  height: "100%",
  width: "100%",
  margin: "16px 0",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
        <Paper>
          <Container size="md">
            <Paper style={innerContainerStyles}>
              <Paper padding="lg" style={subContainerStyles}>
                <div>
                  <Button
                    onClick={() => handleMoodClick("😊")}
                    value={1}
                    variant={mood === "😊" ? "filled" : "outline"}
                  >
                    😊
                  </Button>
                  <Button
                    onClick={() => handleMoodClick("😐")}
                    value={2}
                    variant={mood === "😐" ? "filled" : "outline"}
                  >
                    😐
                  </Button>
                  <Button
                    onClick={() => handleMoodClick("😠")}
                    value={3}
                    variant={mood === "😠" ? "filled" : "outline"}
                  >
                    😠
                  </Button>
                  <Button
                    onClick={() => handleMoodClick("😠")}
                    value={4}
                    variant={mood === "😠" ? "filled" : "outline"}
                  >
                    😠
                  </Button>
                  <Button
                    onClick={() => handleMoodClick("😠")}
                    value={5}
                    variant={mood === "😠" ? "filled" : "outline"}
                  >
                    😠
                  </Button>
                </div>
                <div>
                  <p>Selected Mood: {mood}</p>
                </div>
              </Paper>
              <Paper padding="lg" style={subContainerStyles}>
                <textarea
                  rows="4"
                  cols="50"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  placeholder="Enter your feedback here..."
                ></textarea>
              </Paper>
            </Paper>
          </Container>
        </Paper>
      </Container>
    </div>
  );
}

export default Feedback;
