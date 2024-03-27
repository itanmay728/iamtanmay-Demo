// Projects.js

import React from "react";
import Project from "./project";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System ",
      description:
        "•Hospital Management is a system enabling hospitals to manage information and data related to all aspects. Users can login on the basis of their roles. Admin have all rights like adding doctors, viewing patient details. •Patient can book their appointments. Doctors can see how many appointments they have.",
      TechStack:
        "#Java, #Spring boot, #Spring JPA, #Spring MVC, #Thymeleaf, #Hibernate, #MySQL",
      GitHub: "https://github.com/itanmay728/Hospital-Management-System-",
      Demo: "#",
    },
    {
      title: "LMS(Lead Management System)",
      description:
        "•Lead management is a systematic process in which incoming leads are qualified, analyzed, and nurtured so that they can be converted into new business opportunities. In a typical sales process, leads from multiple channels enter your lead management system, and the sales-ready leads are converted into deals.",
      TechStack:
        "#Java, #Spring boot, #Spring JPA, #Spring MVC, #Thymeleaf, #Hibernate, #MySQ",
      GitHub: "https://github.com/itanmay728/LMS",
      Demo: "#",
    },
    {
      title: "MailSender",
      description:
        "•The Spring Framework provides an easy abstraction for sending email by using the JavaMailSender interface, and Spring Boot provides auto-configuration for it as well as a starter module.",
      TechStack: '#Java, #Spring boot, #Spring JPA, #Spring MVC, #Thymeleaf, #Hibernate, #MySQL',
      GitHub: "https://github.com/itanmay728/MailSender",
      Demo: "#",
    },
    {
      title: "Ship-Now",
      description:
        "•Food Ordering Website.A system that allows people to order food online. •Provides search options based on a variety of criteria. like Food Item, Customer, Order, and Order Confirmation.",
      TechStack: '#HTML, #CSS, #JavaScript',
      GitHub: "https://github.com/itanmay728/Ship-Now",
      Demo: "https://ship-1sohhigxx-tanmay-kumars-projects.vercel.app/",
    },

    // Add more project objects as needed
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-4">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
