import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            <span style={{ color: 'white' }}>
              Hello, I'm{' '}
              <span style={{ color: 'purple' }}>
                <Typewriter
                  words={['Sihle Mofokeng']}
                  loop={1} // No looping
                  typeSpeed={50}
                  deleteSpeed={0}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </span>
          </h1>
          <p className="text-lg mb-6">
            <Typewriter
              words={[
                'A Professional Web Designer.',
                'An Imaginative Developer.',
                'A Creative Problem Solver.',
              ]}
              loop={0} // Infinite looping
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1000}
              cursor
              cursorStyle="_"
            />
          </p>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/path-to-your-image.jpg"
            alt="Sihle Mofokeng"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
