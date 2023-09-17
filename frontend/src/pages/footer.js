import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Group, Paper, Text } from "@mantine/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "../Assets/Logo.png";

const outerContainerStyles = {
  // minHeight: "20vh",
  padding: "20px",
  backgroundColor: "#086729",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const iconStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};
const box = {
  width: "120px",
  height: "70px",
}
const Footer = () => {
  return (
    <div style={outerContainerStyles}>
      <Container>
        <Paper>
          <Group position="center" style={{ backgroundColor: "#086729" }}>
            <Button
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              radius="lg"
            >
              <FontAwesomeIcon icon={faInstagram} style={iconStyle} size="2x" />
            </Button>
            <Button
              component="a"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              radius="lg"
            >
              <FontAwesomeIcon icon={faTwitter} style={iconStyle} size="2x" />
            </Button>
            <Button
              component="a"
              href="https://www.gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              radius="lg"
            >
              <FontAwesomeIcon icon={faFacebook} style={iconStyle} size="2x" />
            </Button>
          </Group>
        </Paper>

        <Text className="text-center mt-3" color="white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
          aspernatur.
        </Text>
        <Text className="text-center mt-3" color="white">
          Copyright &copy; 2023
        </Text>
        <center class="mt-3"><img  src={logo} alt="logo" style={box} /></center>
      </Container>
    </div>
  );
};

export default Footer;
