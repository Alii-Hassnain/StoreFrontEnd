import React from "react";
import { Link } from "react-router-dom";

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
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
    </>

    
  );
};

export default Hero;
