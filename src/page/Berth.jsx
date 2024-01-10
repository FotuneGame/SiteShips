import React, {useState,useContext} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {UrlClassMoreInfoContext} from "../context";
import ListPosts from "../component/listPosts/ListPosts";
import PostShip from "../component/listPosts/PostShip/PostShip";
import {FaArrowCircleRight} from "react-icons/fa";
import Hr from "../component/hr/Hr";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";

const Berth = () => {
    const params=useParams();
    console.log(params.id);

    const [berths,setBerths] = useState({
        id:'1',
        name:'Имя причала',
        text:"Причал Академика Павлова 11а находится в Санкт-Петербурге на Петроградской стороне и представляет собой удобное место для аренды катеров и яхт.",
        map_src:'https://yandex.ru/map-widget/v1/?um=constructor%3A977f381de48c940e7de728b41d0e13006be886b476c3bdd9f146375250868623&amp;source=constructor'
    });

    const [boatsPostOnHere,setBoatsPostOnHere] = useState([
        {id:"1",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"../img/page/boats.jpg"},
        {id:"2",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"../img/page/boats.jpg"},
        {id:"3",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"../img/page/boats.jpg"},
        {id:"4",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"../img/page/boats.jpg"},
    ]);

    const [yachtsPostOnHere,setYachtsPostOnHere] = useState([
        {id:"1",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"../img/page/yachts.jpg"},
        {id:"2",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"../img/page/yachts.jpg"},
        {id:"3",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"../img/page/yachts.jpg"},
        {id:"4",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"../img/page/yachts.jpg"},
        {id:"5",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"../img/page/yachts.jpg"},
    ]);

    const sendProposal = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
    }

    return (
        <div className="content mt-3 pt-5">
            <div className="container shadow d-grid align-content-center  p-lg-3">
                <div className="row">
                    <div className="col-12 py-3 col-lg-6 py-lg-0 align-self-center justify-content-center">
                        <iframe className="w-100"
                            src={berths.map_src}
                            height="400" frameBorder="0"></iframe>
                    </div>
                    <div className="col-12 py-3 col-lg-6 py-lg-0">
                        <ol className="breadcrumb py-2">
                            <li className="breadcrumb-item">
                                <NavLink className="mx-0  text-decoration-none text-black" to={"/"}>Главная</NavLink>
                            </li>
                            <li className="breadcrumb-item">
                                <NavLink className="mx-0 text-decoration-none text-black" to={useContext(UrlClassMoreInfoContext).berths} >Причалы</NavLink>
                            </li>
                            <li className="breadcrumb-item active">
                                <NavLink className="mx-0 text-decoration-none text-black" to={"#"}>{berths.name}</NavLink>
                            </li>
                        </ol>
                        <h1>{berths.name}</h1>
                        <p>{berths.text}</p>
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <div className="container my-3">
                    <div className="p-3">
                        <h1 className="text-center mx-auto">Катера на этом причале</h1>
                    </div>
                    <ListPosts isAdaptive={true} urlClassMoreInfo={useContext(UrlClassMoreInfoContext).boats} PostType={PostShip} posts={boatsPostOnHere}/>
                    <div className="d-flex justify-content-center">
                        <NavLink className="btn btn-success border-3 text-start m-2 p-2" to={useContext(UrlClassMoreInfoContext).boats}>
                            Смотреть ещё
                            <FaArrowCircleRight className="float-end ms-4" size="1.5rem" color="white"/>
                        </NavLink>
                    </div>
                </div>

                <Hr/>

                <div className="container my-3">
                    <div className="p-3">
                        <h1 className="text-center mx-auto">Яхты на этом причале</h1>
                    </div>
                    <ListPosts isAdaptive={true} urlClassMoreInfo={useContext(UrlClassMoreInfoContext).yachts} PostType={PostShip} posts={yachtsPostOnHere}/>
                    <div className="d-flex justify-content-center">
                        <NavLink className="btn btn-success border-3 text-start m-2 p-2" to={useContext(UrlClassMoreInfoContext).yachts}>
                            Смотреть ещё
                            <FaArrowCircleRight className="float-end ms-4" size="1.5rem" color="white"/>
                        </NavLink>
                    </div>
                </div>

                <PersonalityOrder title="ПОДГОТОВИТЬ ДЛЯ ВАС СПЕЦ ПРЕДЛОЖЕНИЕ?" callback={sendProposal}/>
            </div>

        </div>
    );
};

export default Berth;