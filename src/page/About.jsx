import React,{useState,useContext} from 'react';
import {FaPhoneAlt,FaEnvelope} from "react-icons/fa";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";
import ListPosts from "../component/listPosts/ListPosts";
import CarouselCard from  "../component/carousel/CarouselCard";
import PostRoute from "../component/listPosts/PostRouter/PostRoute";
import Hr from "../component/hr/Hr";
import {UrlClassMoreInfoContext} from "../context";

const About = () => {

    const [routersPostFirst,setRoutersPostFirst] = useState([
        {id:"1",name:"имя",typeShip:"Катер",time:"1",imgPath:"./img/page/routers.jpg"},
        {id:"2",name:"имя",typeShip:"Яхта",time:"2",imgPath:"./img/page/routers.jpg"},
        {id:"3",name:"имя",typeShip:"Катер",time:"3",imgPath:"./img/page/routers.jpg"}
    ]);

    const [sizeCarouselCard,setSizeCarouselCard] = useState(routersPostFirst.length);


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
                            <div className="row py-1">
                                <h4 className='mx-0 px-0'>Телефон:</h4>
                                <a  className="mx-0 px-0 text-decoration-none text-black d-flex align-items-center" href="tel:+7-953-349-61-09"><FaPhoneAlt color='black' size="0.9rem"/>+7 (953) 349-61-09</a>
                            </div>
                            <div className="row py-1">
                                <h4 className='mx-0 px-0'>E-mail:</h4>
                                <a className="mx-0 px-0 text-decoration-none text-black" href="mailto:titovgrisha04@gmail.com"><FaEnvelope/> titovgrisha04@gmail.com</a>
                            </div>
                            <div className="row py-1">
                                <h4 className='mx-0 px-0'>Адрес:</h4>
                                <a className="mx-0 px-0 text-decoration-none text-black" href="mailto:titovgrisha04@gmail.com">
                                    ИП Горячев Сергей Сергеевич Санкт-Петербург
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <Hr/>
                <CarouselCard title="Маршруты" size={sizeCarouselCard} urlMore={useContext(UrlClassMoreInfoContext).routers}>
                    <ListPosts urlClassMoreInfo={useContext(UrlClassMoreInfoContext).routers} PostType={PostRoute} posts={routersPostFirst} isAdaptive={false}/>
                </CarouselCard>
                <PersonalityOrder title="ПОЛУЧИТЬ ПЕРСОНАЛЬНОЕ ПРЕДЛОЖЕНИЕ" callback={sendProposal}/>
            </div>
        </div>
    );
};

export default About;