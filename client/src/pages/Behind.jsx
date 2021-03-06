/** @format */

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import behind_1 from "../assets/behind/behind_1.png";
import behind_2 from "../assets/behind/behind_2.png";
import behind_3 from "../assets/behind/behind_3.png";
import behind_4 from "../assets/behind/behind_4.png";

export class Behind extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={behind_1} alt='first slice' />
        </div>
        <div>
          <img src={behind_2} alt='second slice' />
        </div>
        <div>
          <img src={behind_3} alt='third slice' />
        </div>
        <div>
          <img src={behind_4} alt='last slice' />
        </div>
      </Carousel>
    );
  }
}

export default Behind;
