import { Typography } from "@mui/material";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Assests/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="top-part">
          {/* <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                   <b>USEFUL LINKS</b> 
                  </Typography>
                </Card.Title>
                <ul>
                  <li>ADVENTURE SPORTS</li>
                  <li>VIDEOS</li>
                  <li> SERVICES</li>
                  <li>GALLERY</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                    USEFUL LINKS
                  </Typography>
                </Card.Title>
                <ul>
                  <li>HOME</li>
                  <li>SIGN IN</li>
                  <li>SIGN UP</li>
                 
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                    CONTACT
                  </Typography>
                </Card.Title>
                <ul>
                  <li>Malad West, Mumbai, 400064, Maharashtra</li>
                  <li>contact@gmail.com</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
                    CONNECT
                  </Typography>
                </Card.Title>
                <ul>
                  <li>
                    <FacebookIcon /> <LinkedInIcon /> <InstagramIcon />{" "}
                    <TwitterIcon />
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </CardGroup> */}
        </div>
        <div className="bottom-part">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h6">
            © Copyrights 2023 - Suraj Thapaliya.All Rights Reserved.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
