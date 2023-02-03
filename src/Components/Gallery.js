import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../Assests/Gallery.scss";
import { Typography } from "@mui/material";
import GalleryData from "../Data/GalleryData";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Gallery() {
  return (
    <>
      <div className="gallery-section" id="gallery">
        <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Gallery
          </Typography>
        </div>
        <Box>
          <Row xs={1} md={3} className="g-4">
            {GalleryData.map((item, idx) => (
              <Col>
                <Card>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>
                      <b>{item.title}</b>
                    </Card.Title>

                    <Button>See More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Box>
      </div>
    </>
  );
}
