import './Projects.css';
import todoImg from './todo.png';
import weatherImg from './weather.png';
import formImg from './form.png';
import amazonImg from './amazon.jpg';
export default function Projects() {
    return(
        <div className="projects">
            <div className="project-container">
                <div className="project-card">
                    <img src={todoImg} alt='todo' />
                    <span>📝 ToDo App</span>
                    <a href='https://mohammad-saad-79.github.io/Todo-App/' target='blank'>See more</a>
                </div>
                <div className="project-card">
                    <img src={formImg} alt='form' />
                    <span>🔐 User Login Form</span>
                    <a href='/' target='blank'>See more</a>
                </div>
                <div className="project-card">
                    <img src={weatherImg} alt='weather' />
                    <span>🌤 Weather App</span>
                    <a href='/' target='blank'>See more</a>
                </div>
                <div className="project-card">
                    <img src={amazonImg} alt='amazon' />
                    <span>Amazon Clone</span>
                    <a href='/' target='blank'>See more</a>
                </div>
            </div>
        </div>
    )
}