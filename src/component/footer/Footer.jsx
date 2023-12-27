import React from 'react';
import {FaPhoneAlt,FaWhatsapp,FaTelegram} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="z-3 bg-dark text-center text-white">
            <div className="container p-2 pb-0">
                <section className="mb-4">
                    <a className="mx-auto mx-lg-1 text-decoration-none text-white" href="tel:+7-953-349-61-09">
                        <FaPhoneAlt color="white"/>+7 (953) 349-61-09
                    </a>
                    <a className="mx-auto mx-lg-1  m-1 p-2" href="#" role="button">
                        <FaTelegram size="2rem" color="white"/>
                    </a>
                    <a className="mx-auto mx-lg-1  m-1 p-2" href="#" role="button">
                        <FaWhatsapp size="2rem" color="white"/>
                    </a>
                </section>
            </div>
            <div className="text-center p-1" >
                © 2023 Site Ships:
                <a className="text-white" href="https://gnomehardbass.ru">site_ships.ru</a>
            </div>
        </footer>
    );
};

export default Footer;