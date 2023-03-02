import { Typography } from "@mui/material";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Assests/About.scss";

const About = () => {
  return (
    <>
      <div className="about-section" id="about">
        <CardGroup>
          <Card>
            <Card.Body>
              <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
                About Us
              </Typography>

              <Card.Text>
              We are a Government registered local trekking agency of Nepal
               with the register number: 306494/079/080
                having decades of experience in Nepal travel,
               trekking & hospitality industry
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-image">
              <Card.Img variant="top" src="./images/gallery/ghorepani/Poonhill. Ghandrug.jpg" />
            </div>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default About;
