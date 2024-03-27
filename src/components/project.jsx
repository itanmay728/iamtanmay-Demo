// Project.js

import React from "react";

const Project = ({ title, description, TechStack, GitHub, Demo }) => {
  return (
    <div
      id="project"
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white  "
    >
    
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base italic font-semibold mb-8">{TechStack}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="py-2 flex space-x-20 justify-center">
      {/* Demo */}
        <a href={Demo} target="_blank" className=" text-blue-800 text-xl font-bold py-2  rounded ">
          Demo
        </a>

        {/* GitHub */}
        <a
          href={GitHub} target="_blank"
          className=" text-black text-xl font-bold py-2 "
        >
         GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
