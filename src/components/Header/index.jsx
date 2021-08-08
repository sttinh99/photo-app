import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer">
                            {/* security */}
                            STTINH99
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active">
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>

            </Container>
        </header>
    );
}

Header.propTypes = {

}
