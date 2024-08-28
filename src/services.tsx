import React from "react";
import { FaAngular, FaBootstrap, FaFigma, FaGit } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const technologies = [
  { icon: <FaAngular />, title: 'Angular', description: 'A powerful framework for building web applications.', proficiency: 85 },
  { icon: <SiSpringboot />, title: 'Spring Boot', description: 'A framework that simplifies Java development.', proficiency: 80 },
  { icon: <FaBootstrap />, title: 'Bootstrap', description: 'A popular CSS framework for responsive design.', proficiency: 75 },
  { icon: <SiTailwindcss />, title: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development.', proficiency: 90 },
  { icon: <FaFigma />, title: 'Figma', description: 'A collaborative interface design tool.', proficiency: 70 },
  { icon: <FaGit />, title: 'Git', description: 'A version control system for tracking changes in source code.', proficiency: 85 },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Technologies I Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-black p-4 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <div className="text-purple-500 text-2xl mb-2">
                  {tech.icon}
                </div>
                <div style={{ width: 80, height: 80 }} className="mb-2">
                  <CircularProgressbar
                    value={tech.proficiency}
                    text={`${tech.proficiency}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#805AD5", // Adjust this color to match your theme
                      trailColor: "#333",
                      textSize: '24px',
                    })}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
