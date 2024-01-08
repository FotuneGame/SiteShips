import React, {useState} from 'react';
import MainImg from "../component/MainImage/MainImg";

import {FaShip,FaMap,FaLaugh,FaLocationArrow} from "react-icons/fa";
import CarouselCard from "../component/carousel/CarouselCard";
import PopularList from "../component/Popular/PopularList";

const Main = () => {

    const [popularList,setPopularList] = useState({
        boats:[{id:"1",name:"имя",typeShip:"Катер",imgPath:"./img/page/boats.jpg"},{id:"2",name:"имя",typeShip:"Катер",imgPath:"./img/page/boats.jpg"}],
        yachts:[{id:"1",name:"имя",typeShip:"Яхта",imgPath:"./img/page/yachts.jpg"},{id:"2",name:"имя",typeShip:"Яхта",imgPath:"./img/page/yachts.jpg"}],
        routers:[ {id:"1",name:"имя",typeShip:"Катер",imgPath:"./img/page/routers.jpg"}, {id:"2",name:"имя",typeShip:"Яхта",imgPath:"./img/page/routers.jpg"}],
        eventsSee:[{id:"1",name:"имя",imgPath:"./img/page/events.jpg"},{id:"2",name:"имя",imgPath:"./img/page/events.jpg"}],
        urlClassMoreInfo:{boats:"/boats",yachts:"/yachts",routers:"/routers",eventsSee:"/events"}
    });
    const [sizeCarouselCard,setSizeCarouselCard] = useState(popularList?.boats?.length + popularList?.yachts?.length + popularList?.routers?.length + popularList?.eventsSee?.length)

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

            <CarouselCard title="Популярное" size={sizeCarouselCard}>
                <PopularList popularList={popularList}/>
            </CarouselCard>
        </div>
    );
};

export default Main;