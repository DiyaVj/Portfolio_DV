/* eslint-disable react/react-in-jsx-scope */
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementSection from './components/AchievementSection'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <AchievementSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
