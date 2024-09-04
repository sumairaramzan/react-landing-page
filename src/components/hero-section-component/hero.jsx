import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Banner = ({
  imageSrc,
  title,
  paragraph,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  backgroundColor,
  textColor,
  imageWidth, // New prop for image width
  imageAlignment, // New prop for image alignment
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "20px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Heading, Paragraph, Buttons */}
          <Col md={6}>
            <h1 className="mb-4">{title}</h1>
            <p className="mb-4">{paragraph}</p>
            {/* Buttons */}
            <Button
              href={button1Link}
              className="me-2 btn-primary" // Bootstrap margin-end utility class
            >
              {button1Text}
            </Button>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} className={`text-${imageAlignment}`}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt={title}
                style={{
                  width: imageWidth || "100%", // Use imageWidth prop or default to 100%
                  height: "auto",
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Image source is required
  title: PropTypes.string.isRequired, // Title is required
  paragraph: PropTypes.string.isRequired, // Paragraph text is required
  button1Text: PropTypes.string.isRequired, // Button 1 text is required
  button1Link: PropTypes.string.isRequired, // Button 1 link is required
  button2Text: PropTypes.string.isRequired, // Button 2 text is required
  button2Link: PropTypes.string.isRequired, // Button 2 link is required
  backgroundColor: PropTypes.string, // Optional background color
  textColor: PropTypes.string, // Optional text color
  imageWidth: PropTypes.string, // New prop type for image width
  imageAlignment: PropTypes.oneOf(["left", "center", "right"]),
};

Banner.defaultProps = {
  textColor: "#000",
  imageWidth: "100%", // Default image width
  imageAlignment: "left", // Default image alignment
};

export default Banner;
