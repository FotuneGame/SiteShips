import React from 'react';

import {Navbar as NavbarB, Container, Nav} from "react-bootstrap";
import {FaPhoneAlt,FaWhatsapp,FaTelegram} from "react-icons/fa"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarB collapseOnSelect expand='lg' className="bg-white shadow">
            <Container className="mx-auto px-0">
                <NavbarB.Brand >
                    <NavLink className="text-decoration-none text-black" to={"/"}>Имя Сайта</NavLink>
                </NavbarB.Brand>
                <NavbarB.Toggle aria-controls="list-navbar-nav"></NavbarB.Toggle>
                <NavbarB.Collapse id="list-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="mx-auto mx-lg-2 my-2  text-decoration-none text-black" to={"/"}>Главная</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/boats"}>Катера</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/yachts"}>Яхты</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/berths"}>Причалы</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/routers"}>Маршруты</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/events"}>Мероприятия</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/buffet"}>Фуршет</NavLink>
                        <NavLink className="mx-auto mx-lg-2 my-2 text-decoration-none text-black" to={"/about"}> О нас</NavLink>
                    </Nav>
                    <div className="mx-auto my-2 d-flex justify-content-between">
                        <a className="mx-auto mx-lg-1 text-decoration-none text-black" href="tel:+7-953-349-61-09"><FaPhoneAlt/>+7 (953) 349-61-09</a>
                        <a className="mx-auto mx-lg-1" href="#"><FaWhatsapp color="black"/></a>
                        <a className="mx-auto mx-lg-1" href="#"><FaTelegram color="black"/></a>
                    </div>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    );
};

export default Navbar;