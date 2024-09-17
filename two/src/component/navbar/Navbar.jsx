import "./navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`cotaniner ${sticky ? 'dark-nav' : ''}`} >
      <img src={logo} alt='logo' className='logo' />

      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className='btn'>Contact US</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
