import React, { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '../index.css' // Importer un fichier CSS pour les styles supplémentaires

const MyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="md" className={`navbar-transparent fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <NavbarBrand href="/">OLYMPICS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/data">Données</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Visualisations
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/medalVizualisation">Visualisation sur les médailles</DropdownItem>
                <DropdownItem href="/visualisation2">Visualisation 2</DropdownItem>
                <DropdownItem href="/visualisation3">Visualisation 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/analyses">Analyses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/prediction">Prédictions</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
