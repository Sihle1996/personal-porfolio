import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="public/image.png" alt="About Oring Essen" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">I'm Oring</h2>
            <p className="text-lg mb-4">
              A qualified Full-Stack Developer with a holistic knowledge of software design and development. I specialize in creating high-quality designs and effective online solutions.
            </p>
            <ul className="text-lg">
              <li>Full Name: Oring Essen</li>
              <li>Email: oring@domain.com</li>
              <li>Phone: +1234567890</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
