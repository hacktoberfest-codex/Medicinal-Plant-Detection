import React from "react";
import { Container, Paper, Group, Button, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const outerContainerStyles = {
  minHeight: "40vh",
  backgroundColor: "green",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const iconStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};
const Footer = () => {
  return (
    <div style={outerContainerStyles}>
      <Container>
        <Paper>
          <Group position="center" style={{ backgroundColor: "green" }}>
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
      </Container>
    </div>
  );
};

export default Footer;
