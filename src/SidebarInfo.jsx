import './SidebarInfo.css';
export default function SidebarInfo() {
    return (
        <div className="SidebarInfo">
            <div className='info-box'>
                <div className='icon'>
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className='info'>
                    <p>Email</p>
                    <h4>saadayinas9322@gmail.com</h4>
                </div>
            </div>
            <div className='info-box'>
                <div className='icon'>
                    <i className="fa-solid fa-mobile"></i>
                </div>
                <div className='info'>
                    <p>Phone</p>
                    <h4>+918542929798</h4>
                </div>
            </div>
            <div className='info-box'>
                <div className='icon'>
                   <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className='info'>
                    <p>Location</p>
                    <h4>Mau, India</h4>
                </div>
            </div>
            <div className='link-box'>
                <a href='https://github.com/mohammad-saad-79' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href='https://www.linkedin.com/in/mohammadsaad79/' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/share/1Yxb1Az6VW/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.instagram.com/saad.tsck_79?igsh=MTRxanc4aXRiZGlhaQ==" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
            </div>
        </div>
    )
}