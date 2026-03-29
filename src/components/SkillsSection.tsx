import Section from "./Section";

interface Skills {
  languages: string[];
  tooling: string[];
  frameworks: string[];
}

interface SkillsSectionProps {
  skills: Skills;
}

const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="mb-3">
    <h4 className="text-sm font-medium text-gray-400 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-stone-700 text-gray-200 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <Section title="Skills" id="skills">
      <div className="space-y-4">
        <SkillCategory title="Languages" items={skills.languages} />
        <SkillCategory title="Tools & Infrastructure" items={skills.tooling} />
        <SkillCategory title="Frameworks" items={skills.frameworks} />
      </div>
    </Section>
  );
};

export default SkillsSection;
