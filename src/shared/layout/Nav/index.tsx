import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';

import { ReactComponent as ReactLogo } from 'assets/react.svg';
import css from './Nav.module.css';

const links = [
    { name: 'Home', url: '/' },
    { name: 'Feature 1', url: '/feature-one' },
    { name: 'Feature 2', url: '/feature-two' },
];

const Nav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSignUp = () => {
        setShow(false);
    };

    return (
        <nav className={css.nav}>
            <Link to={'/'}>
                <ReactLogo className={css.logo} alt="Sample App" />
            </Link>
            <div className={css.navRight}>
                <ul>
                    {links.map((value, i) => {
                        return (
                            <li key={i}>
                                <NavLink
                                    to={value.url}
                                    className={css.navLink}
                                    activeClassName="active"
                                >
                                    {value.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <Button className={css.signup} variant="primary" onClick={handleShow}>
                    Sign Up
                </Button>
            </div>
            {/* BELOW - * NOTE * IT WOULD BE BEST TO CREATE AN ENTIRELY NEW MODAL COMPONENT */}
            <Modal show={show} onHide={handleClose}>
                <button onClick={handleClose}>x</button>
                <Modal.Body>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSignUp}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </nav>
    );
};

export default Nav;
