import React from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="public/image.png" alt="Sihle Mafokeng" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Sihle Mafokeng</h2>
            <p className="text-lg mb-4">
              Junior Full Stack Developer
            </p>
            <p className="text-lg mb-4">
              During the 6 month period of the IT: Systems Development NQF 5 learnership programme at Shaper, Sihle and his team created a mobile application called NEMSS. Sihle's main responsibilities on the project were to ensure that the PostgreSQL database communicates effectively with the RESTful API backend, supporting a well-designed and user-friendly interface for the app.
            </p>
            <ul className="text-lg">
              <li className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-500" /> Johannesburg
              </li>
              <li className="mb-2 flex items-center">
                <FaGraduationCap className="mr-2 text-purple-500" /> Matric
              </li>
              <li className="mb-2 flex items-center">
                <FaGithub className="mr-2 text-purple-500" /> <a href="https://github.com/Sihle1996" target="_blank" rel="noopener noreferrer">github.com/sihle1996</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
