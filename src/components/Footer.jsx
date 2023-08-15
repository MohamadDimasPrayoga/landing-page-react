import {Container, Row, Col} from "react-bootstrap"


const currentYear = new Date().getFullYear() 

const Footer = () =>{
    return(
        <div className="footer pb-2 pt-2">
            <Container>
                <Row>
                    <Col>
                    <h3 className="fw-bold text-white">Relax Gacor {currentYear}</h3>
                    </Col>
                    
                    <Col className="text-end">
                    <i className="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
                    <i className="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
                    <i className="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;