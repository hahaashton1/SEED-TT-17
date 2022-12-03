import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/dbslogo.jpg'; 
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar variant="dark" fixed="top" style={{backgroundColor: "#010001", paddingLeft:0}}>
        <Container>
          <Navbar.Brand href="home">
          <img
              src={logo}
              width="160"
              height="60"
              alt-prop= "dbs logo"
            />
          </Navbar.Brand>
            
          
        </Container>
    </Navbar>
  );
}

export default NavBar;
