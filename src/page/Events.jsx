import React,{useState,useContext} from 'react';
import MainImg from "../component/MainImage/MainImg";
import ListPosts from "../component/listPosts/ListPosts";
import PostEvent from "../component/listPosts/PostEvent/PostEvent";
import {UrlClassMoreInfoContext} from "../context";

const Events = () => {

    const [eventsPost,setEventsPost] = useState([
        {id:"1",name:"имя",imgPath:"./img/page/events.jpg"},
        {id:"2",name:"имя",imgPath:"./img/page/events.jpg"},
        {id:"3",name:"имя",imgPath:"./img/page/events.jpg"},
        {id:"4",name:"имя",imgPath:"./img/page/events.jpg"},
        {id:"5",name:"имя",imgPath:"./img/page/events.jpg"},
    ]);

    return (
        <div className="content pt-5">
            <div className="d-md-none position-absolute w-100 h-50 z-1 py-md-5 mt-5">
                <div className="mx-5  text-center py-5">
                    <h1 className="text-white">ПРАЗДНИК НА ЯХТЕ ИЛИ КАТЕРЕ</h1>
                    <p className="text-white">Организация незабываемых мероприятий на борту яхт и катеров в Санкт-Петербурге под ключ.</p>
                </div>
            </div>
            <MainImg img="./img/page/events.jpg"/>
            <ListPosts  isAdaptive={true} urlClassMoreInfo={useContext(UrlClassMoreInfoContext).eventsSee} PostType={PostEvent} posts={eventsPost} title="ПРАЗДНИК НА ЯХТЕ ИЛИ КАТЕРЕ" text="Организация незабываемых мероприятий на борту яхт и катеров в Санкт-Петербурге под ключ." />
        </div>
    );
};

export default Events;