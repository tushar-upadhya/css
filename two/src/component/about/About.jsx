import "./about.css";
import aboutImage from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className='about'>
      {/* left */}
      <div className='about-left'>
        <img src={aboutImage} alt='' className='about-img' />
        <img src={playIcon} alt='' className='play-icon' />
      </div>

      {/* right */}
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tommorrow's Leader Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae molestiae voluptas hic, expedita quibusdam fuga et tenetur corrupti id consequuntur.</p>
      </div>
    </div>
  );
};
export default About;
