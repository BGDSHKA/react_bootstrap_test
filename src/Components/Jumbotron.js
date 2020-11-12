import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import background from '../Background.webp';
import styled from 'styled-components';

const Styles = styled.div`
.jumbo {
    background: url(${background}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
    color: black;
}
.overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className='overlay'></div>
            <Container>
                <h1>Test Title</h1>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam eaque ipsa, quae ab illo inventore veritatis et
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit, qui in ea
       voluptate velit esse, quam nihil</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron