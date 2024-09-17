import './hero.css'
import buttonImage from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
     <div className="hero-text">
      <h1>We Ensure better eduction for a better world</h1>
      <button className='btn'>Explore More <img src={buttonImage} alt="" /> </button>
     </div>
    </div>
  )
}
export default Hero