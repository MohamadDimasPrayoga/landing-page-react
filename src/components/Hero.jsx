import {Container, Row, Col} from "react-bootstrap";
const Hero = () => {
    return ( 
        <div className="hero min-vh-100 w-100" id="home">
            <Container>
                <Row>
                    <Col className="text-center ">
                    <h1 className="fs-1 animate__animated animate__fadeInUp">Relax Gacor</h1>
                    <p className="text-black-50 animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur quaerat nesciunt adipisci a cumque magnam architecto natus saepe necessitatibus, repudiandae laboriosam! Autem, quaerat architecto.</p>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Hero;