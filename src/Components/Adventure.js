import { Typography } from "@mui/material";
import React from "react";
import { Button, Card, Col,  Row } from "react-bootstrap";
import AdventureData from "../Data/AdventureData";
import "../Assests/Adventure.scss";
import { NavLink } from "react-router-dom";


const Adventure = () => {
  return (
    <>
      <div className="adventure-section" id="adventure">
        <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Adventure Sports
          </Typography>
        </div>

        <Row xs={1} md={3} className="g-4">
          {AdventureData.map((item) => (
            <Col key={item.id}>
              <Card>
                <div className="card-image">
                  <Card.Img variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <b>{item.title}</b>
                  </Card.Title>
                  <div className="bottom-card">
                    <Card.Text>{item.description}</Card.Text>
                    <NavLink to={item.path}>
                      <Button
                      >
                        See More
                      </Button>
                    </NavLink>
                  </div>
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
