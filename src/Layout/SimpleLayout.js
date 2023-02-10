import React from "react";
import { Button } from "react-bootstrap";
import "../Assests/Home.scss";
import Navbar from "../Commons/Navbar";

const SimpleLayout = ({ children }) => {
  return (
    <>
      <Navbar />


      <div className="main-section" id="home">
        <div className="main-container">
          <div className="main">
            <div className="main-text">
              <h1>Enjoyable and Breathtaking Adventure Sport</h1>
            </div>
          </div>
        </div>
        <div className="content-area">
            {children}
        </div>

 
      </div>
    </>
  );
};

export default SimpleLayout;
