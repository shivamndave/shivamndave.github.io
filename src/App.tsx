import Nav from "./components/Nav";
import ProfilePictures from "./components/ProfilePictures";
import ResumeSection from "./components/ResumeSection";
import SkillsSection from "./components/SkillsSection";
import LinksSection from "./components/LinksSection";
import Section from "./components/Section";
import resumeData from "./data/resume.json";

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-stone-900">
        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* Header with name and profile pictures */}
          <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold text-white mb-2">
                {resumeData.name}
              </h1>
              <p className="text-xl text-gray-400">{resumeData.title}</p>
            </div>
            <ProfilePictures images={resumeData.images.profile} />
          </header>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left sidebar - Links and Skills */}
            <aside className="lg:col-span-1 space-y-6">
              <LinksSection links={resumeData.links} />
              <SkillsSection skills={resumeData.skills} />
            </aside>

            {/* Main content - Summary, Experience, Education */}
            <div className="lg:col-span-2 space-y-6">
              <Section title="About" id="about">
                <p>{resumeData.summary}</p>
              </Section>

              <ResumeSection
                experience={resumeData.experience}
                education={resumeData.education}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
