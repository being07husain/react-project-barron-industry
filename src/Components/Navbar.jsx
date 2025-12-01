import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mynav">
      <Link to="/">Home</Link>
      <Link to="/Games">Games</Link>
      <Link to="/Register">Join Now</Link>
      <Link to="/Contact">Get in Touch</Link>
    </nav>
  );
}

export default Navbar;