import './Resume.css';
export default function Resume() {
    return (
        <div className="resume">
            <div className="resume-container">
                <button><a href='/Mohammad_Saad_Resume.pdf' target="_blank" rel="noreferrer">Download Resume <i class="fa-solid fa-download"></i></a></button>
                <div className="card">
                    <div className="card-title">
                        <div className="icon-box">
                            <i className="fa-solid fa-book-open"></i>
                        </div>
                        <h2>Mohammad Saad</h2>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Full Stack Developer</h3>
                        <p>Hyderabad, India</p>
                        <p><span>saadayinas9322@gmail.com | 8542929798</span></p>
                        <p>
                            <span>
                                <a href="https://www.linkedin.com/in/mohammadsaad79/" target="_blank" rel="noreferrer">
                                LinkedIn
                                </a> | <a href="https://github.com/mohammad-saad-79" target="_blank" rel="noreferrer">
                                GitHub</a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <div className="icon-box">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>
                        <h2>Objective</h2>
                    </div>
                    <div className="card-info">
                        <p>A passionate and dedicated Full Stack Developer with a strong foundation 
                            in frontend (React, HTML, CSS, JavaScript) and backend (Node.js, MongoDB) 
                            technologies. Seeking an opportunity to apply my skills in real-world projects 
                            and contribute to impactful software solutions.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <div className="icon-box">
                            <i className="fa-solid fa-book-open"></i>
                        </div>
                        <h2>Education</h2>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----B.Tech in Computer Science</h3>
                        <p>Maulana Azad National Urdu University</p>
                        <p><span>2023 – Present</span></p>
                        <p>CGPA: 8.48</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Intermediate</h3>
                        <p>Muslim Inter College Mau</p>
                        <p><span>Passing Year - 2020</span></p>
                        <p>69.8%</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----High School</h3>
                        <p>Talimuddin Inter College Mau</p>
                        <p><span>Passing Year - 2018</span></p>
                        <p>78.5%</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <div className="icon-box">
                            <i className="fa-solid fa-bolt"></i>
                        </div>
                        <h2>Skills</h2>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Frontened Skills</h3>
                        <p>HTML, CSS, JavaScript, React.js</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Programming Languages</h3>
                        <p>C, C++, Java, Python</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Version Control</h3>
                        <p>Git, GitHub</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Tools/Platforms</h3>
                        <p>VS Code, Netlify, Vercel</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <div className="icon-box">
                            <i className="fa-solid fa-diagram-project"></i>
                        </div>
                        <h2>Projects</h2>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Portfolio Website</h3>
                        <p>A responsive personal portfolio website to showcase my skills and projects using React.js.</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Register/Login App</h3>
                        <p>Basic UI for user authentication made with React.</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----ToDo App</h3>
                        <p>A task management tool made using React, with real-time task addition and deletion.</p>
                    </div>
                    <div className="card-info">
                        <h3>🔷-----Weather App</h3>
                        <p>Displays current weather using live API data and dynamic UI with React.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <div className="icon-box">
                            <i className="fa-solid fa-medal"></i>
                        </div>
                        <h2>Achievments</h2>
                    </div>
                    <ul>
                        <li>Completed frontend development track (HTML, CSS, JavaScript, React)</li>
                        <li>Built and deployed multiple full-stack projects independently</li>
                        <li>Consistently contributing code to GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}