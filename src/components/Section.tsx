import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  id: string;
  children: ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-stone-700 pb-2">
        {title}
      </h2>
      <div className="text-gray-300">{children}</div>
    </section>
  );
};

export default Section;
