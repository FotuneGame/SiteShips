import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaShip, FaMap, FaLaugh, FaLocationArrow, FaArrowCircleRight} from "react-icons/fa";
import MainImg from "../component/MainImage/MainImg";
import CarouselCard from "../component/carousel/CarouselCard";
import PopularList from "../component/Popular/PopularList";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";
import ListPosts from "../component/listPosts/ListPosts";
import PostShip from "../component/listPosts/PostShip/PostShip";
import Hr from "../component/hr/Hr";


const Main = () => {

    const [boatsPostFirst,setBoatsPostFirst] = useState([
        {id:"1",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"./img/page/boats.jpg"},
        {id:"2",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"./img/page/boats.jpg"},
        {id:"3",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"./img/page/boats.jpg"},
        {id:"4",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"./img/page/boats.jpg"},
    ]);

    const [yachtsPostFirst,setYachtsPostFirst] = useState([
        {id:"1",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"./img/page/yachts.jpg"},
        {id:"2",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"./img/page/yachts.jpg"},
        {id:"3",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"./img/page/yachts.jpg"},
        {id:"4",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"./img/page/yachts.jpg"},
        {id:"5",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"./img/page/yachts.jpg"},
    ]);

    const [popularList,setPopularList] = useState({
        boats:[{id:"1",name:"имя",typeShip:"Катер",imgPath:"./img/page/boats.jpg"},{id:"2",name:"имя",typeShip:"Катер",imgPath:"./img/page/boats.jpg"}],
        yachts:[{id:"1",name:"имя",typeShip:"Яхта",imgPath:"./img/page/yachts.jpg"},{id:"2",name:"имя",typeShip:"Яхта",imgPath:"./img/page/yachts.jpg"}],
        routers:[ {id:"1",name:"имя",typeShip:"Катер",imgPath:"./img/page/routers.jpg"}, {id:"2",name:"имя",typeShip:"Яхта",imgPath:"./img/page/routers.jpg"}],
        eventsSee:[{id:"1",name:"имя",imgPath:"./img/page/events.jpg"},{id:"2",name:"имя",imgPath:"./img/page/events.jpg"}],
        urlClassMoreInfo:{boats:"/boats",yachts:"/yachts",routers:"/routers",eventsSee:"/events"}
    });
    const [sizeCarouselCardPopularList,setSizeCarouselCardPopularList] = useState(popularList?.boats?.length + popularList?.yachts?.length + popularList?.routers?.length + popularList?.eventsSee?.length)

    const sendProposal = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
    }

    return (
        <div className="content pt-5">

            <div className="position-absolute w-100 h-50 z-1 py-md-5">
                <div className="mx-5  w-75 py-5">
                    <h1 className="text-white">Аренда катеров и яхт<br/>в Санкт-Петербурге</h1>
                </div>
                <div className="px-5 d-grid container  mx-auto  w-100 py-md-5">
                    <div className="row">
                        <div className="col d-flex py-1">
                            <div className="m-auto rounded-circle img-fluid">
                                <FaShip size="4rem" color="white"/>
                             </div>
                            <h4 className="m-auto text-white ">Более 20 <br/> катеров и яхт</h4>
                        </div>
                        <div className="col d-flex py-1">
                            <div className="m-auto rounded-circle img-fluid">
                                <FaMap size="4rem" color="white"/>
                            </div>
                            <h4 className="m-auto text-white ">Эксклюзивные <br/> маршруты</h4>
                        </div>
                        <div className="col d-flex py-1">
                            <div className="m-auto rounded-circle img-fluid">
                                <FaLaugh size="4rem" color="white"/>
                            </div>
                            <h4 className="m-auto text-white ">Организация <br/> мероприятий</h4>
                        </div>
                        <div className="col d-flex py-1">
                            <div className="m-auto rounded-circle img-fluid">
                                <FaLocationArrow size="4rem" color="white"/>
                            </div>
                            <h4 className="m-auto text-white ">Причалы по <br/> всему городу</h4>
                        </div>
                    </div>
                </div>
            </div>

            <MainImg img="./img/page/main.jpg" main={true}/>

            <div className="container my-3">
                <div className="container my-3">
                    <div className="p-3">
                        <h1 className="text-center mx-auto">Катера</h1>
                        <p className="text-center mx-auto w-50">Большой выбор катеров для прогулки по Петербургу в неповторимой водной атмосфере.</p>
                    </div>
                    <ListPosts isAdaptive={true} urlClassMoreInfo="/boats" PostType={PostShip} posts={boatsPostFirst}/>
                    <div className="d-flex justify-content-center">
                        <NavLink className="btn btn-success border-3 text-start m-2 p-2" to={"/boats"}>
                            Смотреть ещё
                            <FaArrowCircleRight className="float-end ms-4" size="1.5rem" color="white"/>
                        </NavLink>
                    </div>
                </div>

                <Hr/>

                <div className="container my-3">
                    <div className="p-3">
                        <h1 className="text-center mx-auto">Яхты</h1>
                        <p className="text-center mx-auto w-50">Ждём гостей на борту наших яхт, чтобы добавить лету незабываемые впечатления.</p>
                    </div>
                    <ListPosts isAdaptive={true} urlClassMoreInfo="/yachts" PostType={PostShip} posts={yachtsPostFirst}/>
                    <div className="d-flex justify-content-center">
                        <NavLink className="btn btn-success border-3 text-start m-2 p-2" to={"/yachts"}>
                            Смотреть ещё
                            <FaArrowCircleRight className="float-end ms-4" size="1.5rem" color="white"/>
                        </NavLink>
                    </div>
                </div>

                <Hr/>

                <CarouselCard title="Популярное" size={sizeCarouselCardPopularList}>
                    <PopularList popularList={popularList}/>
                </CarouselCard>

                <PersonalityOrder title="ПОДГОТОВИТЬ ДЛЯ ВАС СПЕЦ ПРЕДЛОЖЕНИЕ?" callback={sendProposal}/>

            </div>
        </div>
    );
};

export default Main;