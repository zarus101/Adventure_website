import { Typography } from "@mui/material";
import React from "react";
import Tabs from "./Tabs";
const AnnapurnaTrek = () => {
  return (
    <>
      <div className="maincontent">
        <div className="content-title">
          <div className="adventure-title">
            <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
              Annapurna Base Camp Trek
            </Typography>
          </div>
        </div>
        <br />
        <br />

        <div className="nav">
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default AnnapurnaTrek;
