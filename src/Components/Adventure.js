import { Typography } from "@mui/material";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AdventureData from "../Data/AdventureData";
import "../Assests/Adventure.scss"

const Adventure = () => {
  return (
    <>
      <div className="adventure-section">
        <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Adventure Sports
          </Typography>
          </div>

       
            <Row xs={1} md={3} className="g-4">
              {AdventureData.map((item, idx) => (
                <Col>
                  <Card>
                    <div className="card-image">
                    <Card.Img variant="top" src={item.image} />

                    </div>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
 
        
      </div>
    </>
  );
};

export default Adventure;
