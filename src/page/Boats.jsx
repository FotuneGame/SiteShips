import React, {useContext, useState} from 'react';
import MainImg from "../component/MainImage/MainImg";
import ListPosts from "../component/listPosts/ListPosts";
import PostShip from "../component/listPosts/PostShip/PostShip";
import {UrlClassMoreInfoContext} from "../context";

const Boats = () => {

    const [boatsPost,setBoatsPost] = useState([
        {id:"1",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"./img/page/boats.jpg"},
        {id:"2",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"./img/page/boats.jpg"},
        {id:"3",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"./img/page/boats.jpg"},
        {id:"4",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"./img/page/boats.jpg"},
    ]);

    return (
        <div className="content pt-5">
            <div className="d-md-none position-absolute w-100 h-50 z-1 py-md-5 mt-5">
                <div className="mx-5  text-center py-5">
                    <h1 className="text-white">АРЕНДА КАТЕРА</h1>
                    <p className="text-white">Большой выбор прогулочных катеров для аренды по выгодным ценам. Лучшие маршруты по СПб. Организация мероприятий под ключ с фуршетом. Опытные капитаны.</p>
                </div>
            </div>
            <MainImg img="./img/page/boats.jpg"/>
            <ListPosts isAdaptive={true} urlClassMoreInfo={useContext(UrlClassMoreInfoContext).boats} PostType={PostShip} posts={boatsPost} title="АРЕНДА КАТЕРА" text="Большой выбор прогулочных катеров для аренды по выгодным ценам. Лучшие маршруты по СПб. Организация мероприятий под ключ с фуршетом. Опытные капитаны."/>

        </div>
    );
};

export default Boats;