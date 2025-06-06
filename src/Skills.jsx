import './Skills.css';
import SkillExtra from './SkillExtra.jsx';
import SkillTechnical from './SkillTechnical.jsx';
export default function Skill() {
    return (
        <div className="skills">
            <SkillTechnical />
            <SkillExtra />
        </div>
    )
}