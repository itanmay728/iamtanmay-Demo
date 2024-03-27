// About.js

import React from "react";
import IMG1 from "../assets/HeroImg.jpg";
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const About = () => {
  
  const [text] = useTypewriter({
    words: ['YouTuber', 'Full-Stack Developer', 'Freelancer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <section id="About" className=" bg-slate-950  py-10 lg:py-10">
      <div className=" inset-0 bg-opacity-50 bg-black"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col items-center justify-center h-full text-center">
          <img
            className="w-48 md:w-64 lg:w-80 mb-4 md:mb-4 lg:mb-6 rounded-full "
            src={IMG1}
            alt="Hero"
          />

          <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white mb-1 md:mb-1 lg:mb-2">
            Hello, my name is{" "}
            <span className="text-rose-600 hover:text-blue-500 text-4xl md:text-4xl lg:text-4xl">
              Tanmay.
            </span>
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-1 md:mb-1 lg:mb-2">
            I'm a <span className="text-rose-600">{text}</span><span className="text-red-600"><Cursor/></span>
          </h1>

          <div className="flex flex-wrap justify-center  hover:border-rose-600">

          {/* Email */}
            <a
              href="mailto:ktanmay1130@gmail.com"
              className="item m-4 text-gray-300 hover:text-red-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/itanmay728"
              target="_blank"
              className="item m-4 text-gray-300 hover:text-red-200"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/in/tanmay-kumar-%F0%9F%87%AE%F0%9F%87%B3-282a0a204"
              target="_blank"
              className="item m-4 text-gray-300 hover:text-red-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 lg:mb-12">
            I'm a skilled software developer with experience in Java and Spring
            Boot. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. I'm a passionate developer ready to bring your
            ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
