import { Typography } from "@mui/material";
import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import "../Assests/Adventure.scss";

import Newlist from "../Data/Newlist";
import Slider from "react-slick";
import ImageList from "../Data/imageList";

export const CardItem = ({
  id,
  posted,
  price,
  bed,
  lock,
  sqft,
  place,
  location,
  category,
}) => {
  return (
    <div className="exploresection-card col-md-6 " key={id}>
      <div className="exploreimg row">
        <SimpleSlider category={category} />
      </div>
      <h2>{posted}</h2>
      <div>
        <span>{price}</span>
        <div className=" d-flex">
          <div className="d-flex">
            {/* < className="icon" /> */}
            {bed}
          </div>
          <div className="d-flex">
            {/* <AiFillUnlock className="icon" /> */}
            {lock}
          </div>
          <div className="d-flex">
            {/* <VscTriangleLeft className="icon" /> */}
            {sqft}
          </div>
        </div>
        <a href="">
          <span>{place} </span>
        </a>
        <div className="house-address">{location}</div>
      </div>
    </div>
  );
};

class SimpleSlider extends Component {
  render() {
    const { category } = this.props;

    // Filter images by category
    const filteredImages = ImageList.filter(
      (item) => item.category === category
    );

    // Settings for the slider
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    // Render a slider for each image set
    return (
      <div>
        {filteredImages.map((item, index) => (
          <Slider {...settings} key={index}>
            {item.images.map((image, index) => (
              <div key={index}>
                <img src={image} height="100px" width="100px" alt="" />
              </div>
            ))}
          </Slider>
        ))}
      </div>
    );
  }
}
const Adventure1 = () => {
  return (
    <>
     <div className="adventure-section" id="adventure">
        <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Adventure Sports
          </Typography>
        </div>

        <Row xs={1} md={3} className="g-4">
          {Newlist.map((item) => (
            <CardItem
              id={item.id}
              posted={item.posted}
              price={item.price}
              bed={item.bed}
              lock={item.lock}
              sqft={item.sqft}
              place={item.place}
              location={item.location}
              category={item.category}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Adventure1;
