import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff'
      }}
    >
      <div><strong>MyCompany</strong></div>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>About</Link>
        <Link to="/services" style={{ margin: '0 10px', color: '#fff' }}>Services</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: '#fff' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
