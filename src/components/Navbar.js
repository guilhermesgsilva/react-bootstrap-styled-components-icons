import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'

import { TiHome } from 'react-icons/ti';

import styled from "styled-components";

const HeaderTag = styled.header`
    {

    }

    .nav{
        min-height: 10vh;
        display: flex;
        align-items: center;
        padding-left: 5vw;
        padding-right: 5vw;
        font-size: 1.25em;
        background-color: orange;
    }

    .col{
        display: flex;
    }

    #navEnd{
        justify-content: flex-end;
    }

    a{
        color: white;
    }

`;

function Navbar() {
    return (
        <HeaderTag>
            <Nav as="ul">
                <Col>
                    <Nav.Item as="li">
                        <Nav.Link href="/"><TiHome id="homeLogo" /></Nav.Link>
                    </Nav.Item>
                </Col>
                <Col id="navEnd">
                    <Nav.Item as="li">
                        <Nav.Link href="#">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">Log In</Nav.Link>
                    </Nav.Item>
                </Col>
            </Nav>
        </HeaderTag>
    );
  }
  
  export default Navbar;