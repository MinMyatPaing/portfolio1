import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import logo from '../assets/img/logo.svg';
import icon1 from '../assets/img/nav-icon1.svg';
import icon2 from '../assets/img/nav-icon2.svg';
import icon3 from '../assets/img/nav-icon3.svg';

export default function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col sm={6}>
                    <img className='logo' src={logo} alt='Logo' />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href="#"><img src={icon1} alt='1' /></a>
                        <a href="#"><img src={icon2} alt='2' /></a>
                        <a href="#"><img src={icon3} alt='3' /></a>
                    </div>
                    <p>CopyRight 2022. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
