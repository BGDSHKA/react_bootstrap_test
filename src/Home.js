import React from 'react';
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import background from './Background.webp';

export const Home = () => (
    <>
        <Slider />
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
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
    </>
)