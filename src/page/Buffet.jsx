import React,{useState,useContext} from 'react';
import Carousel from "../component/carousel/Carousel";
import {FaFilePdf} from "react-icons/fa";
import CarouselCard from "../component/carousel/CarouselCard";
import ListPosts from "../component/listPosts/ListPosts";
import PostShip from "../component/listPosts/PostShip/PostShip";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";
import Hr from "../component/hr/Hr";
import {UrlClassMoreInfoContext} from "../context";

const Buffet = () => {

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

    const sendProposal = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
    }

    return (
        <div className="content mt-3 pt-5">
            <div className="container shadow d-grid align-content-center  p-lg-3">
                <div className="row">
                    <div className="col-12 py-3 col-lg-6 py-lg-0 align-self-center">
                        <Carousel imgs={["./img/page/main.jpg","./img/page/main.jpg"]}/>
                    </div>
                    <div className="col-12 py-3 col-lg-6 py-lg-0">
                        <h1>МОБИЛЬНЫЙ ФУРШЕТ</h1>
                        <p>В долгой водной прогулке незаменим мобильный фуршет, заказанный и приготовленный специально для Вас. Кейтеринг предоставляет разнообразное меню: от антипасти до сета круассанов, от канапе из морских продуктов до ассорти из твёрдого сыра с виноградом, орехами и мёдом. Все блюда готовятся непосредственно перед доставкой на борт и доставляются за 10-15 минут до начала рейса в специальных рефрижераторных автомобилях, что гарантирует их свежесть и высокие вкусовые качества.</p>
                        <div className="d-grid d-lg-flex py-3 py-lg-0 justify-content-around">
                            <div className="mx-1 row py-2">
                                <FaFilePdf size="2rem" color="black" />
                                <a className="text-black text-center" href="#" >Мобильный фуршет</a>
                            </div>
                            <div className="mx-1 row py-2">
                                <FaFilePdf size="2rem" color="black" />
                                <a className="text-black text-center" href="#">Фуршетное меню</a>
                            </div>
                            <div className="mx-1 row py-2">
                                <FaFilePdf size="2rem" color="black" />
                                <a className="text-black text-center" href="#">Банкетное меню</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <Hr/>
                <CarouselCard title="Катера" size={boatsPostFirst.length} urlMore={useContext(UrlClassMoreInfoContext).boats}>
                    <ListPosts  isAdaptive={false} urlClassMoreInfo={useContext(UrlClassMoreInfoContext).boats} PostType={PostShip} posts={boatsPostFirst}/>
                </CarouselCard>
                <Hr/>
                <CarouselCard title="Яхты" size={yachtsPostFirst.length} urlMore={useContext(UrlClassMoreInfoContext).yachts}>
                    <ListPosts  isAdaptive={false} urlClassMoreInfo={useContext(UrlClassMoreInfoContext).yachts} PostType={PostShip} posts={yachtsPostFirst}/>
                </CarouselCard>
                <PersonalityOrder title="ПОДГОТОВИТЬ ДЛЯ ВАС СПЕЦ ПРЕДЛОЖЕНИЕ?" callback={sendProposal}/>
            </div>
        </div>
    );
};

export default Buffet;