import './Navbar.css';

export default function Navbar({ activeSection, setActiveSection }) {
  const sections = ["about", "skills", "projects", "resume", "contactUs"];
  return (
    <div className='Navbar'>
      <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
      <nav>
        {sections.map((section) => (
          <button
            key={section}
            className={activeSection === section ? "active" : ""}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
}
