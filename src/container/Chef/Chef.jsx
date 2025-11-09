import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>

      <div className="app__chef-conent">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quos est alias, assumenda dignissimos quae unde voluptatibus. Veniam
            ipsa debitis odio eligendi suscipit corrupti esse obcaecati, natus
            facilis sed voluptates.
          </p>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque,
          earum nisi, quidem inventore incidunt error et ullam dignissimos, sunt
          repellendus. Quo suscipit facere accusantium eum corrupti repudiandae
          quidem nihil.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signs" />
      </div>
    </div>
  </div>
);

export default Chef;
