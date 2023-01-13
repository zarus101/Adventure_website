import React from "react";
import Navbar from "../Commons/Navbar";
import "../Assests/Home.scss";
import { Button } from "@mui/material";
import Topbar from "../Commons/Topbar";
import Adventure from "../Components/Adventure";
import Services from "../Components/Services";
import About from "../Components/About";
import Gallery from "../Components/Gallery";
import Videos from "../Components/Videos";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Location from "../Components/Location";
import Footer from "../Commons/Footer";

const Home = () => {
  return (
    <>
      {/* <Topbar /> */}

      <Navbar />

      <div className="main-section">
        <div className="main-container">
          <div className="main">
            <div className="main-text">
              <h1>Enjoyable and Breathtaking Adventure Sport</h1>
            </div>

            <Button className="button">Enquire Now</Button>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      


      <Adventure/>

      <Services/>

      <About/>

      <Gallery/>

      <Videos/>

      <Testimonials/>

      <Contact/>

      <Location/>

      <Footer/>
    </>
  );
};

export default Home;
