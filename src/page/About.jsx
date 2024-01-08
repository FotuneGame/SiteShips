import React from 'react';
import {FaPhoneAlt,FaEnvelope} from "react-icons/fa";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";

const About = () => {

    const sendProposal = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
    }

    return (
        <div className="content mt-3 pt-5">
            <div className="container shadow d-grid align-content-center  p-lg-3">
                <div className="row">
                    <div className="col-12 py-3 col-lg-6 py-lg-0 align-self-center">
                        <img src="./img/page/main.jpg" className="img-fluid rounded"/>
                    </div>
                    <div className="col-12 py-3 col-lg-6 py-lg-0">
                        <h1>КОНТАКТЫ</h1>
                        <div className="container py-3 py-lg-0">
                            <div className="mx-1 row">
                                <h3>Телефон:</h3>
                                <a className="mx-auto mx-lg-1 text-decoration-none text-black" href="tel:+7-953-349-61-09"><FaPhoneAlt/>+7 (953) 349-61-09</a>
                            </div>
                            <div className="mx-1 row">
                                <h3>E-mail:</h3>
                                <a className="mx-auto mx-lg-1 text-decoration-none text-black" href="mailto:titovgrisha04@gmail.com"><FaEnvelope/> titovgrisha04@gmail.com</a>
                            </div>
                            <div className="mx-1 row">
                                <h3>Адрес:</h3>
                                <a className="mx-auto mx-lg-1 text-decoration-none text-black" href="mailto:titovgrisha04@gmail.com">
                                    ИП Горячев Сергей Сергеевич Санкт-Петербург
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PersonalityOrder title="ПОЛУЧИТЬ ПЕРСОНАЛЬНОЕ ПРЕДЛОЖЕНИЕ" callback={sendProposal}/>
        </div>
    );
};

export default About;