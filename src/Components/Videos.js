import { ImageList, ImageListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import AdventureData from '../Data/AdventureData'
import GalleryData from '../Data/GalleryData'
import ToursData from '../Data/ToursData'

const Videos = () => {
  return (
    <>
    <div className="adventure-section" id='tour'>
        <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            TOURS PACKAGES
          </Typography>
        </div>

        <Row xs={1} md={3} className="g-4">
          {ToursData.map((item, idx) => (
            <Col>
              <Card>
                <div className="card-image">
                  <Card.Img variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <Card.Title><b>{item.title}</b></Card.Title>
                  <div className="bottom-card">
                    <Card.Text>{item.description}</Card.Text>
                    <Button>See More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Videos