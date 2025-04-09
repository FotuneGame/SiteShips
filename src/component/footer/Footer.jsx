import React from 'react';
import {FaPhoneAlt,FaWhatsapp,FaTelegram} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="z-3 bg-dark text-center text-white">
            <div className="container p-2 pb-3 pt-5">
                <section className="mb-3 d-flex align-items-center justify-content-center">
                    <a className="pe-2 text-decoration-none text-white" href="tel:+7-953-349-61-09">
                        <FaPhoneAlt className="me-1" color="white" size="1.4rem"/>+7 (953) 349-61-09
                    </a>
                    <a className="pe-2" href="#" role="button">
                        <FaTelegram size="1.5rem" color="white"/>
                    </a>
                    <a className="pe-2" href="#" role="button">
                        <FaWhatsapp size="1.5rem" color="white"/>
                    </a>
                </section>

                <div className="text-center p-1" >
                    © 2023 Site Ships:
                    <a className="text-white ms-1" href="https://gnomehardbass.ru">site_ships.ru</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;