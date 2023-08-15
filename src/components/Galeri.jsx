import { Container, Row, Col } from "react-bootstrap";
import Gal1 from "../assets/img/galleri/Gal1.jpg"
import Gal2 from "../assets/img/galleri/Gal2.jpg"
import Gal3 from "../assets/img/galleri/Gal3.jpg"
import Gal4 from "../assets/img/galleri/Gal4.jpg"
import Gal5 from "../assets/img/galleri/Gal5.jpg"



const Galeri = () => {
    return(
        <div className="galleri min-vh-100 d-flex align-items-center" id="galleri" >
            <Container>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
                    <Col>
                    <img src={Gal1} alt="Gal1" className="w-100" data-aos="fade-up"/>
                    </Col>
                    <Col>
                    <img src={Gal2} alt="Gal2" className="w-100" data-aos="fade-up" data-aos-delay="150"/>
                    </Col>
                    <Col>
                    <img src={Gal3} alt="Gal3" className="w-100" data-aos="fade-up" data-aos-delay="300"/>
                    </Col>
                    <Col>
                    <img src={Gal4} alt="Gal4" className="w-100" data-aos="fade-up" data-aos-delay="450"/>
                    </Col>
                    <Col>
                    <img src={Gal5} alt="Gal5" className="w-100" data-aos="fade-up" data-aos-delay="600"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Galeri;