import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const IntroGallery = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2}>
                    <Col className="des23" onClick={() => navigate('/des23')}>
                        <div>
                            <p>2023</p>
                            <h1>DECEMBER</h1>
                        </div>
                    </Col>
                    <Col className="feb24" onClick={() => navigate('/feb24')}>
                        <div>
                            <p>2024</p>
                            <h1>FEBRUARY</h1>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col className="mar24" onClick={() => navigate('/mar24')}>
                        <div>
                            <p>2024</p>
                            <h1>MARCH</h1>
                        </div>
                    </Col>
                    <Col className="comingSoon" onClick={() => navigate('/soon')}>
                        <div>
                            <p>COMING</p>
                            <h1>SOON</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IntroGallery