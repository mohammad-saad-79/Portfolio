import './Viewbar.css';
import Navbar from './Navbar.jsx';
import ViewbarContainer from './ViewbarContainer.jsx';
import { useState } from 'react';
export default function Viewbar() {
    const [activeSection, setActiveSection] = useState("about");
    return (
        <div className='Viewbar'>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <ViewbarContainer activeSection={activeSection} />
        </div>
    )
}