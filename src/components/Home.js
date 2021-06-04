import React from "react";
import "./Home.css";
import goods from "./goods.png";
import crate from "./crate.png";
import ibc from "./ibc.png";
import pail from "./pail.png";
import steeldrum from "./steeldrum.png";

import fastDelivery from "./fast1.png";

function Home() {
  return (
    <>
      <div id="section1">
        <div className="jumbotron">
          <h1 className="heading">Welcome to Vishal Royal Roadlines,</h1>
          <h1 className="linebelow__heading">
            We provide roadway solutions for your logistical problems
          </h1>
        </div>
      </div>
      <div className="mainBody">
        <div className="row__two ">
          <div className="fastSide">
            <h1>Quickest shipping </h1>
            <h3>
              We push ourself to ensure that we provide fastest and safest
              delivery each and everytime we deliver.{" "}
            </h3>
          </div>
          <div className="fast">
            <img src={fastDelivery} alt="fast" height="100%" />
          </div>
        </div>
        <div className="row__three">
          <div className="materialHandling">
            <h1>Expertice in material handling</h1>
            <h3>
              we can handle anything that fits in a truck, from ibcs to pails,
              bags, crates, pallets, barrels and boxes and everything that comes
              out of an industry.
            </h3>
          </div>

          <div className="crossfade">
            <figure>
              <img src={goods} alt="goods" />
            </figure>
            <figure>
              <img src={ibc} alt="" />
            </figure>
            <figure>
              <img src={pail} alt="" />
            </figure>
            <figure>
              <img src={steeldrum} alt="" />
            </figure>
            <figure>
              <img src={crate} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div id="aboutUs">
        <h1 className="Aheading">About us</h1>
        <h3 className="para">
          We are providing road transport from Pune to Coimbatore and other
          parts of karnataka and Tamilnadu, Our company was Established in 2008
          and is running successfully ever since. We provide full loads, part
          load, and LCV to and fro Coimbatore and pune. We have lot of
          experience handling materials of differnt type, shape and size and
          delivering it safe and sound.
        </h3>
      </div>
      <div id="contactUs">
        <div>
          <h1 className="Cheading">Contact Us</h1>
        </div>
        <div className="contactDetails">
          <h4>
            <strong>Address</strong> : 357/3, kalapanaiken palayam
          </h4>
          <h4>
            <strong>E-mail</strong> : vishalroyal03@gmail.com
          </h4>
          <h4>
            <strong>phone</strong>:{" "}
            <li style={{ listStyle: "none", display: "inline" }}>
              9363227569,
            </li>
            <li style={{ listStyle: "none", display: "inline" }}>
              {" "}
              9363227564
            </li>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Home;
