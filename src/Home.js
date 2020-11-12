import React from 'react';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import background from './Background.webp';

export const Home = () => (
    <>
        <Slider />
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={background} />
                        <Card.Body>
                            <Card.Title>Test title</Card.Title>
                            <Card.Text>
                                Lorem ipsum
                                </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={background} />
                        <Card.Body>
                            <Card.Title>Test title</Card.Title>
                            <Card.Text>
                                Lorem ipsum
                                </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={background} />
                        <Card.Body>
                            <Card.Title>Test title</Card.Title>
                            <Card.Text>
                                Lorem ipsum
                                </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron />
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={background} height={400} />
                </Col>
                <Col md={5}>
                    <h2>Test title</h2>
                    <p>Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                quasi architecto</p>
                </Col>
            </Row>
        </Container>
    </>
)