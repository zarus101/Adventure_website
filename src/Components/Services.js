import { Typography } from "@mui/material";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import ServiceData from "../Data/ServiceData";
import "../Assests/Services.scss"

const Services = () => {
  return (
    <>
      <div className="services-section" id="service">
        <div className="service-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Services
          </Typography>
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
            EXPERIENCE THE BEST AND SAFE CAMPING WITH US
          </Typography>
        </div>

        <Row xs={1} md={4} className="g-4">
          {ServiceData.map((item, idx) => (
            <Col>
              <Card>
                <div className="card-image">
                  <Card.Img variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>

                <Button className="button" >Explore</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Services;
