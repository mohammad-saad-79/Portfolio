import './SkillExtra.css';
export default function SkillExtra() {
    return (
        <div className="skill-extra">
            <div className="skill-card">
                <h3>Professional Skills</h3>
                <div className="professional-skills">
                    <div className="circle-box">
                        <div className="skills-circle1">90%</div>
                        <span>Creativity</span>
                    </div>
                    <div className="circle-box">
                        <div className="skills-circle2">75%</div>
                        <span>Communication</span>
                    </div>
                    <div className="circle-box">
                        <div className="skills-circle3">70%</div>
                        <span>Problem Solving</span>
                    </div>
                    <div className="circle-box">
                        <div className="skills-circle4">80%</div>
                        <span>Teamwork</span>
                    </div>
                </div>
            </div>
            <div className="skill-card">
                <h3>Tools</h3>
                <div className="tool-card">
                    <div className="card">
                        <div className='card-title'>
                            <i class="fa-brands fa-github"></i>
                            Git & GitHub :
                        </div>
                        <div className="card-info">
                            Version control and collaboration.
                        </div>
                    </div>
                    <div className="card">
                        <div className='card-title'>
                            <i className="fa-solid fa-globe"></i>
                            Deployment :
                        </div>
                        <div className="card-info">
                            Hosting with Vercel and Netlify.
                        </div>
                    </div>
                    <div className="card">
                        <div className='card-title'>
                            <i className="fa-solid fa-book-open-reader"></i>
                            VS Code :
                        </div>
                        <div className="card-info">
                            Responsive design.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}