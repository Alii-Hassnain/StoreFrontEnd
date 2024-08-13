import React from "react";

const About = () => {
  return (
    <div className="flex flex-col mt-10 items-center h-screen mt-40">
      <div className="text-4xl tracking-tighter font-bold sm:text-6xl">
        <h1>
          We Love 
          <span className="bg-primary text-primary-content px-2 rounded-lg">
           Comfy
          </span>

        </h1>
        
      </div>
      <p className="max-w-2xl text-xl mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
};

export default About;
