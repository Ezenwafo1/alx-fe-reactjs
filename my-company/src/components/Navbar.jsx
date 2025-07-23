import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '15px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <Link to="/" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link to="/services" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
