import Section from "./Section";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ResumeSectionProps {
  experience: Experience[];
  education: Education[];
}

const ResumeSection = ({ experience, education }: ResumeSectionProps) => {
  return (
    <>
      <Section title="Experience" id="experience">
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="border-l-2 border-stone-700 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              {exp.highlights.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education" id="education">
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="border-l-2 border-stone-700 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              {edu.description && (
                <p className="mt-2 text-gray-300">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ResumeSection;
