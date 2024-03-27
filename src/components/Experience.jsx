// Experience.js

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Experience = () => {
  return (
    <div id="experience" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="Now"
            iconStyle={{ background: "#4299E1", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-semibold">
              Currently looking for an Full Time Opportunity. <br />
              <a
                href="mailto:ktanmay1130@gmail.com"
                className="hover:underline text-red-400 hover:text-red-800"
              >
                Contact me.
              </a>
              <span className="italic font-light">
                I will answer you in ~24 hours.
              </span>
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2024 - Present"
            iconStyle={{ background: "#4299E1", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-semibold">
              Full-Stack Developer Intern
            </h3>
            <div className="vertical-timeline-element-subtitle">
            
            <a href="https://www.suprams.net/about-us" className="hover:underline text-blue-700 hover:text-red-600">
              Suprams Pvt. Ltd
            </a>
            
            
            </div>
            
            <p >
              •Developing a web application for managing some customer details
              from scratch. <br /> •Added some features like role based login, Fetching
              data from mysql database and displaying that data in dashboard. <br />
              <span className=" italic font-bold ">•Working on Java, Spring boot, Spring JPA, Spring MVC, Spring
              security, Thymeleaf, Bootstrap, Hibernate, MySQL.</span>
            </p>
          </VerticalTimelineElement>

          {/* Add more VerticalTimelineElement for each experience */}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

