import './SidebarProfile.css';
import ProfileImg from './profile.jpg';
export default function Profile() {
    return(
        <div className='SidebarProfile'>
            <div className='profile-img'>
                <img src={ProfileImg} alt='Profile'/>
            </div>
            <h2>Mohammad Saad</h2>
            <h3>Frontend Developer</h3>
        </div>
    )
}