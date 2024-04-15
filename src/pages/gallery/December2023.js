import { Image, Container, Row, Col } from "react-bootstrap"
import Des23 from "../../libs/images/des23image"

const December2023 = () => {
    return (
        <div>
            <div className='introBG'>
                <div className="introText">
                    <div>
                        <h1>DECEMBER</h1> <span>2023</span>
                    </div>
                </div>
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Image src={Des23.Img1} className="gallery-image" />
                        </Col>
                        <Col>
                            <Image src={Des23.Img2} className="gallery-image" />
                        </Col>
                        <Col>
                            <Image src={Des23.Img3} className="gallery-image" />
                        </Col>
                        <Col>
                            <Image src={Des23.Img4} className="gallery-image" />
                        </Col>
                        <Col>
                            <Image src={Des23.Img5} className="gallery-image" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default December2023