// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Nav() {
  return (
    <Header
      links={[

        <Link key={1} className="navlink" to="/About">
        About Me
        </Link>,

        <Link key={2} className="navlink" to="/Portfolio">
        Portfolio
        </Link>,

        <Link key={3} className="navlink" to="/Contact">
        Contact Me
        </Link>,

        <Link key={4} className="navlink" to="/Resume">
        Resume
        </Link>,

      ]}
    />
  );
}