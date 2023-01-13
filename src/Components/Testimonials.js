import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Assests/Testimonials.scss";
import TestimonialSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-section">
        <CardGroup className="main-card">
          <Card className="card-1">
            <div className="card-image">
              <Card.Img variant="top" src="./images/homepage/about.webp" />
            </div>
          </Card>
          <Card className="card-2">
            <Card.Body>
                <TestimonialSlider/>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Testimonials;
