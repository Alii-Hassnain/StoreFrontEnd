import React, { useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";
import { CustomUri } from "../utils";
import axios from "axios";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carosalItems = [hero1, hero2, hero3, hero4];

const Hero = () => {
  
  return (
    <>
      <div className="min-h-screen flex justify-between items-center">
        {/* upper */}
        <div className="flex flex-col gap-5 max-w-xl">
          <h1 className="font-bold text-4xl sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Link to="/products">
            <button className="btn btn-primary h-6 w-1/3">OUR PRODUCTS</button>
          </Link>
        </div>
        {/* lower */}

        <div className="carousel carousel-center bg-neutral rounded-box max-w-lg space-x-4 p-4 max-lg:hidden">
          {carosalItems.map((hero, index) => {
            return (
              <div className="carousel-item" key={index}>
                <img className="rounded-box object-contain w-80 h-full" src={hero} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
