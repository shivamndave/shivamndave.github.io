import { createFileRoute } from "@tanstack/react-router";
import ProfilePictures from "../components/ProfilePictures";
import ResumeSection from "../components/ResumeSection";
import Section from "../components/Section";
import SkillsSection from "../components/SkillsSection";
import resumeData from "../data/resume.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <main className="min-h-screen bg-stone-900">
        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* Header with name and profile pictures */}
          <header className="flex flex-col items-center md:flex-row md:justify-between md:items-start mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h1 className={`text-3xl font-bold text-white mb-2`}>
                {resumeData.name}
              </h1>
              <p className="text-xl text-gray-400">{resumeData.title}</p>
            </div>
            <ProfilePictures images={resumeData.images.profile} />
          </header>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left sidebar - Skills (desktop only) */}
            <aside className="hidden lg:block lg:col-span-1 space-y-6">
              <SkillsSection skills={resumeData.skills} />
            </aside>

            {/* Main content - Summary, Experience, Education */}
            <div className="lg:col-span-2 space-y-6">
              <Section title="About" id="about">
                <p>{resumeData.summary}</p>
              </Section>

              {/* Skills inline on mobile only */}
              <div className="lg:hidden">
                <SkillsSection skills={resumeData.skills} />
              </div>

              <ResumeSection
                experience={resumeData.experience}
                education={resumeData.education}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="text-gray-500">Made by Shivam Dave</p>
      </footer>
    </div>
  );
}
