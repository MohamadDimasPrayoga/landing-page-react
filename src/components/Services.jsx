import { Container, Row, Col } from "react-bootstrap"

const Services = () =>{
    return(
        <div className="services min-vh-100 d-flex align-items-center" id="services" data-aos="fade-up">
            <Container>
                <Row className="mb-5">
                    <Col>
                    <h1 className="text-center fw-bold" data-aos="fade-up">Services</h1>
                    <p className="text-center" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, optio.</p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
                    <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="300">
                    <i className="fa-solid fa-laptop fs-2 mb-4"></i>
                    <h5 className="fw-bold">Jasa Pembuatan Web</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nostrum quidem sequi vel voluptate laudantium?</p>
                    </Col>

                    <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="400">
                    <i className="fa-solid fa-laptop fs-2 mb-4"></i>
                    <h5 className="fw-bold">Jasa Pembuatan Web</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nostrum quidem sequi vel voluptate laudantium?</p>
                    </Col>

                    <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="500">
                    <i className="fa-solid fa-laptop fs-2 mb-4"></i>
                    <h5 className="fw-bold">Jasa Pembuatan Web</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nostrum quidem sequi vel voluptate laudantium?</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services;