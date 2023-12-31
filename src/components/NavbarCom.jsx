import {Navbar, Nav, Container} from "react-bootstrap";
import {useState, useEffect} from "react";

const  NavbarCom = () => {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () =>{
    if(window.scrollY > 580){
      setChangeColor(true);
    } else{
      setChangeColor(false);
    }
  };

  useEffect(()=>{
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor)
  });

    return ( 
        <div className="sticky-top">
<Navbar expand="lg"  variant="dark" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">Relax Gacor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#galleri"  className="mx-2">Galley</Nav.Link>
            <Nav.Link href="#services"  className="mx-2">Services</Nav.Link>
            <Nav.Link href="#faq"  className="mx-2">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
     );
}
 
export default NavbarCom;