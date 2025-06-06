import './ViewbarContainer.css';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
export default function ViewbarContainer({activeSection}) {
    return (
        <div className="ViewbarContainer">
            {activeSection === "about" && <About />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "resume" && <Resume />}
            {activeSection === "contactUs" && <Contact />}
        </div>
    )
}