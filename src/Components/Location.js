import { Typography } from "@mui/material";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import "../Assests/Location.scss";

const Location = () => {
  return (
    <>
      <div className="location-section" id="location">
        <CardGroup>
          <Card>
            <Card.Body>
              <div className="card-image">
                <Card.Img variant="top" src="./images/homepage/about.webp" />
              </div>
            </Card.Body>
          </Card>
          <Card className="card-2">
            <div className="item-1">
              <div className="icon">
                <LocationOnIcon />
              </div>
              <div className="text">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                  Our Office Address
                </Typography>
                <Typography sx={{ my: 1 }} fontFamily="Sansita" variant="p">
                  Lakeside-6, Pokhara
                </Typography>
              </div>
            </div>

            <div className="item-1">
              <div className="icon">
                <EmailIcon />
              </div>
              <div className="text">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                  General Enquiries
                </Typography>
                <Typography sx={{ my: 1 }} fontFamily="Sansita" variant="p">
                  info@mountainstopadventures.com
                </Typography>
              </div>
            </div>
            <div className="item-1">
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="text">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                  Call Us
                </Typography>
                <Typography sx={{ my: 1 }} fontFamily="Sansita" variant="p">
                  +977-9816652583
                </Typography>
              </div>
            </div>

            <div className="item-1">
              <div className="icon">
                <AccessTimeIcon />
              </div>
              <div className="text">
                <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                Our Timing
                </Typography>
                <Typography sx={{ my: 1 }} fontFamily="Sansita" variant="p">
                Mon - Sun : 09:00 AM - 09:00 PM
                </Typography>
              </div>
            </div>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Location;
