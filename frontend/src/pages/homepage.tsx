import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(){
  

  return(
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Blog Website</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blogs</Nav.Link>
            <Nav.Link href="#pricing">login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}