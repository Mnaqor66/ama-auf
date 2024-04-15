import '../../style/StoryList.css'
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap'

const List = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container fluid>
                <Row xs={1} md={2} lg={4}>
                    <Col className='StoryListMenu'>
                        <div className='stry1'>
                            <h2>Telegram</h2>
                            <Button onClick={()=>navigate('/list/stry1')} variant='light' className='stry-btn'>Read More</Button>
                        </div>
                    </Col>
                    <Col className='StoryListMenu'>
                        <div className='stry2'>
                            <h2>Siksa Neraka</h2>
                            <Button variant='light' className='stry-btn'>Read More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default List