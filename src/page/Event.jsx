import React,{useState}  from 'react';
import {NavLink, useParams} from "react-router-dom";
import Carousel from "../component/carousel/Carousel";
import {FaFire} from "react-icons/fa";
import style from "../component/listPosts/PostRouter/PostRoute.module.css";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";

const Event = () => {
    const params = useParams();
    console.log(params.id);

    const [eventSee,setEventSee] = useState(
        {
            id:"1",
            name:"имя",
            oldPrice:"1000",
            oldPriceWeekday:"8000",
            price:"500",
            priceWeekday:"5000",
            isHit:"true",
            imgPath:"../img/page/events.jpg",
            text:"Катер имя идеально подходит для больших компаний, комфортное размещение как в просторном теплом салоне, так и на открытой палубе."
        }
    );

    const [img,setImg] = useState(["../img/page/events.jpg","../img/page/events.jpg"]);

    const sendOrder = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
    }

    return (
        <div className="content pt-5">

            <div className="container shadow d-grid align-content-center  p-lg-3">
                <div className="row">
                    <div className="col-12 py-3 col-lg-6 py-lg-0 align-self-center">
                        <Carousel imgs={img}/>
                    </div>
                    <div className="col-12 py-3 col-lg-6 py-lg-0">
                        <div className="d-flex justify-content-between">
                            <ol className="breadcrumb py-2">
                                <li className="breadcrumb-item">
                                    <NavLink className="mx-0  text-decoration-none text-black" to={"/"}>Главная</NavLink>
                                </li>
                                <li className="breadcrumb-item">
                                    <NavLink className="mx-0 text-decoration-none text-black" to={"/events"}>Мероприятия</NavLink>
                                </li>
                                <li className="breadcrumb-item active">
                                    <NavLink className="mx-0 text-decoration-none text-black" to={"#"}>{eventSee.name}</NavLink>
                                </li>
                            </ol>
                            {eventSee.isHit==='true' ?
                                <div className={"z-0 px-2 d-flex"}>
                                    <FaFire color='orange' size="1.5rem"/>
                                    <strong className="p-0">Хит</strong>
                                </div>
                                : null}
                        </div>
                        <div className="d-md-flex justify-content-between">
                            <h1>{eventSee.name}</h1>
                        </div>
                        <p>{eventSee.text}</p>
                        <div className="d-md-flex">
                            <div className="col-12 col-md-6">
                                <div className="col-12 d-flex rounded-3 bg-primary opacity-75 p-2 my-2">
                                    <p className={["text-start text-white  m-0",style.oldPrice].join(' ')}>пн-чт</p>
                                    <div className="col d-flex rounded-3 bg-white">
                                        {eventSee.oldPrice ?
                                            <p className={["text-start m-0",style.oldPrice].join(' ')}>
                                                от<s className={style.redLine}><span className="text-black">{eventSee.oldPriceWeekday}</span></s><strong className="text-black"> {eventSee.priceWeekday}</strong> ₽/час
                                            </p>
                                            : null}
                                    </div>
                                </div>
                                <div className="col-12 d-flex rounded-3 bg-success opacity-75 p-2 my-2">
                                    <p className={["text-start text-white  m-0",style.oldPrice].join(' ')}>пт-вс</p>
                                    <div className="col d-flex rounded-3 bg-white">
                                        {eventSee.oldPrice ?
                                            <p className={["text-start m-0",style.oldPrice].join(' ')}>
                                                от<s className={style.redLine}><span className="text-black">{eventSee.oldPrice}</span></s><strong className="text-black"> {eventSee.price}</strong>₽/час
                                            </p>
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PersonalityOrder title="ОФОРМИТЬ ЗАЯВКУ" callback={sendOrder} withoutContacts={true}/>
            </div>

        </div>
    );
};

export default Event;