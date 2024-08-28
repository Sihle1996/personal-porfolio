
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
  const techSkills = [
    { name: 'Angular', level: 80 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section id="skills" className="bg-primary text-neutral py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techSkills.map((skill) => (
            <div key={skill.name} className="text-center">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: '#fff',
                  pathColor: '#10b981',
                  trailColor: '#4b5563',
                })}
              />
              <h3 className="mt-4 text-xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
