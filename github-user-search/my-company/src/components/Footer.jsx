function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '15px', marginTop: '30px' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
