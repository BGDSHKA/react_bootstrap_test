import React from 'react';
import { Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../Background.webp';
import styled from 'styled-components';

const Styles = styled.div`
h3, p {
    color: black;
}
`;

function Slider() {
    return (
        <>
        <Styles>
            <Carousel>
                <Carousel.Item style={{ 'height': '600px'}}>
                    <img
                        className="d-block w-100"
                        src={background}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Title first slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ 'height': '600px' }}>
                    <img
                        className="d-block w-100"
                        src={background}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Title second slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ 'height': '600px' }}>
                    <img
                        className="d-block w-100"
                        src={background}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Title third slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Styles>
        </>
    )
}
export default Slider;