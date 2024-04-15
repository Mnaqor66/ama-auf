import { Col, Container, Image, Row } from "react-bootstrap"
import instagram from '../../assets/images/logo/instagram putih.png'
import linkedin from '../../assets/images/logo/linkedin putih.png'
import github from '../../assets/images/logo/github putih.png'
import web from '../../assets/images/logo/web putih.png'
import { useNavigate } from "react-router-dom"


const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2}>
                    <Col className="blank"></Col>
                    <Col className="AmaAbout">
                        <div className="AmaFoto"></div>
                        <div className="AmaIntro">
                            <p>
                                Hai semuanya... <br /> Aku Rahmawati, seorang mahasiswi Pendidikan IPA universitas Lambung Mangkurat Banjarmasin
                            </p>
                        </div>
                        <div className="AmaSosmed">
                            <a href="https://www.instagram.com/rrchmaaa._/">
                                <Image src={instagram} className="sosmed-logo" />
                            </a>
                        </div>
                    </Col>

                    <Col className="AufAbout">
                        <div className="AufFoto"></div>
                        <div className="AufIntro">
                            <p>
                                Hai semuanya... <br /> Aku Muhammad Naufal Abqori, seorang mahasiswa Teknik Informatika Universitas Islam Kalimantan Arsyad Al-Banjari Banjarmasin
                            </p>
                        </div>
                        <div className="AufSosmed">
                            <Row>
                                <Col>
                                    <a href="https://www.instagram.com/muhammadnaufalabqori/">
                                        <Image src={instagram} className="sosmed-logo" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/muhammad-naufal-abqori-a24668263/">
                                        <Image src={linkedin} className="sosmed-logo" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://github.com/Mnaqor66">
                                        <Image src={github} className="sosmed-logo" />
                                    </a>
                                </Col>
                                <Col>
                                    <Image src={web} onClick={() => navigate('*')} className="sosmed-logo" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About