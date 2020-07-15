import Header from './components/header'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Interests from './components/interests'
import Contact from './components/contact'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Contact />
      </div>
    </>
  )
}
