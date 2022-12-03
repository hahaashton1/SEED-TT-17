import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home"
                style={{
                    fontSize:20,
                }}>Dashboard</Nav.Link>
            <Nav.Link href="about" style={{
                    fontSize:20,
                }}>Transactions</Nav.Link>
            <Nav.Link href="pricing" style={{
                    fontSize:20,
                }}>Pricing</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;