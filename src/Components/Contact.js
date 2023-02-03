import { Typography } from "@mui/material";
import React from "react";
import { Button, Card, CardGroup, Form } from "react-bootstrap";
import "../Assests/Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="contact-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Contact
          </Typography>
        </div>

        <CardGroup>
          <Card>
            <Card.Body>
              <Form className="form">
                <div className="main-form">
                  <div className="left-part">
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Control type="number" placeholder="Mobile Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </div>

                  <div className="right-part">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        rows={6}
                      />
                    </Form.Group>
                  </div>
                </div>

                <Button className="button">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Contact;
