import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TestiData from "../Data/TestiDAta";

export default class TestimonialSlider extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      autoplay:true,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {TestiData.map((item, index) => {
            return (
              <>
                <div>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <FormatQuoteIcon className="icon" /> {item.name}
                      </Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}
