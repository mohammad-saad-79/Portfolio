import './AboutCard.css';

export default function AboutCard() {
  return (
    <div className='AboutCard'>
      <div className='Heading'>
        <h3>What I'm Doing</h3>
      </div>
      <div className='CardBox'>
        <div className='Card'>
          <div className='CardIcon'>
            <i className="fa-solid fa-web-awesome"></i>
          </div>
          <div className='CardInfo'>
            <h4>Frontend Development</h4>
            <p>High-quality design made at a professional level.</p>
          </div>
        </div>
        <div className='Card'>
          <div className='CardIcon'>
            <i className="fa-solid fa-code"></i>
          </div>
          <div className='CardInfo'>
            <h4>UI/UX Design</h4>
            <p>Modern and high-quality development services.</p>
          </div>
        </div>
        <div className='Card'>
          <div className='CardIcon'>
            <i className="fa-solid fa-code-compare"></i>
          </div>
          <div className='CardInfo'>
            <h4>Web Design</h4>
            <p>Responsive and interactive user interfaces.</p>
          </div>
        </div>
        <div className='Card'>
          <div className='CardIcon'>
            <i className="fa-solid fa-snowflake"></i>
          </div>
          <div className='CardInfo'>
            <h4>Backend Development</h4>
            <p>Robust and scalable backend solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
