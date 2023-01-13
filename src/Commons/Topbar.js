import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import "../Assests/Topbar.scss";
import { IconButton, Typography } from "@mui/material";

const Topbar = () => {
  return (
    <>
      <div className="topbar-section">
        <div className="left-part">
          <div className="icons">
            <IconButton
             color="inherit"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
             color="inherit"
            
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
             color="inherit"
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
             color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </div>
          <div className="gmail">
            <IconButton
             color="inherit"
            >
              <EmailIcon />
            </IconButton>
            <Typography sx={{ my: 2 }} variant="h7">raz.thapaliya600@gmail.com</Typography>
          </div>
        </div>
        <div className="right-part">
          <div className="location">

          <IconButton
             color="inherit"
            >
            <LocationOnIcon />
            </IconButton>
            <Typography sx={{ my: 2 }} variant="h7">Melad West</Typography>
          </div>

          {/* <div className="user-profile">
            <PersonIcon />
            <h5>Suraj Thapaliya</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Topbar;
