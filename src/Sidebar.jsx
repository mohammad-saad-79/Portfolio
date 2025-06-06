import './Sidebar.css';
import SidebarProfile from './SidebarProfile.jsx';
import SidebarInfo from './SidebarInfo.jsx';
export default function Sidebar() {
    return(
        <div className='Sidebar'>
            <SidebarProfile />
            <SidebarInfo />
        </div>
    )
}