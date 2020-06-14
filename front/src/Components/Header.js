import React from "react";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ logined, logout }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">하루한잔</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {logined ? (
                    <Nav className="mr-auto">
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                        <NavItem>
                            <Nav.Link as={Link} to="/favorites">
                                Favorites
                            </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link as={Link} to="/statistics">
                                Statistics
                            </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                        </NavItem>
                    </Nav>
                ) : (
                    <Nav className="mr-auto">
                        <NavItem>
                            <Nav.Link as={Link} to="/">
                                Login
                            </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link as={Link} to="/signup">
                                Sign up
                            </Nav.Link>
                        </NavItem>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
