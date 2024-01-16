import { Link } from 'react-router-dom';
import Nav from './Navbar';

export default function Header() {
  return (
    <>

  <div class="header-container">

    <div class="nav-container">
      <Nav
        links={[

          <Link key={1} class="navlink" to="/About">
          About Me
          </Link>,

          <Link key={2} class="navlink" to="/Portfolio">
          Portfolio
          </Link>,

          <Link key={3} class="navlink" to="/Contact">
          Contact Me
          </Link>,

          <Link key={4} class="navlink" to="/Resume">
          Resume
          </Link>,

        ]}
      />
    </div>
    
<div class='header-n-container'>
  <img class="logoimg" src="./src/assets/imgs/mmrobertslogo.svg"></img>
  <h2 class="header-name">Matthew M. Roberts</h2>
</div>
  </div>

    </>
  );
}