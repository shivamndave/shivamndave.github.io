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
          {experience.map((exp) => {
            const isCurrent = exp.endDate === "Present";
            return (
              <div
                key={exp.id}
                className={`border-l-2 pl-4 ${isCurrent ? "border-amber-500" : "border-stone-700"}`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm mt-0.5">
                      <span className="text-stone-300 font-medium">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="text-gray-500"> · {exp.location}</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    <span className="text-sm text-gray-500">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </div>
                {exp.highlights.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {exp.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.35em]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
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
