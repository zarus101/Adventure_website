import { Typography } from "@mui/material";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Assests/About.scss";

const About = () => {
  return (
    <>
      <div className="about-section">
        <CardGroup>
          <Card>
            <Card.Body>
              <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                About Us
              </Typography>

              <Card.Text>
                About Us We, Outdoor Escapes, based in Malad West, Mumbai,
                Maharashtra, are one of the leading facilitators for adventure
                sports and camping, creating thrilling, experiential and
                memorable experiences. Our adventurous sports and camping
                activities are specially designed to rejuvenate your mind and
                body from the madding hustle and bustle of city life. We offer a
                wide range of activities to choose from, including kayaking,
                rafting, paragliding, rappelling, campfire, flying fox, etc
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-image">
              <Card.Img variant="top" src="./images/homepage/about.webp" />
            </div>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default About;
