import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Header = () => {
    return (
        <Container>
            <Navbar className="pl-5 pr-5" fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="pl-5" href="#home">MEET ME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto pl-5">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link className="pl-3" href="/about">ABOUT</Nav.Link>
                        <NavDropdown className="pl-2" title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">CONTACT</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="pr-5">
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}