import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//bootstrap
import ModalContact from '../modal';


//styles
import styles from './navbar.module.scss'


//img
import Logo from '../../../img/logo-asllan-branco.png'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.navbar_container}>
      <Container>
        <Navbar.Brand href="#home" > <img src={Logo} alt='Logo' className={styles.logo_asllan}></img></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className={styles.navbar_links}>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link>
                <ModalContact/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;