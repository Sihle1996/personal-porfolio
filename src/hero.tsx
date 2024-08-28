import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-purple-500">Oring Essen</span>
          </h1>
          <p className="text-lg mb-6">A Professional Web Designer and Imaginative Developer.</p>
          <a href="#" className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">
            Download CV
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="/path-to-your-image.jpg" alt="Oring Essen" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
