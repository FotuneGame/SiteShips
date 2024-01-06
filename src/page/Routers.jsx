import React, {useState} from 'react';
import MainImg from "../component/MainImage/MainImg";
import ListPosts from "../component/listPosts/ListPosts";
import PostRoute from "../component/listPosts/PostRouter/PostRoute";

const Routers = () => {

    const [routersPost,setRoutersPost] = useState([
        {id:"1",name:"имя",typeShip:"Катер",time:"1",imgPath:"./img/page/routers.jpg"},
        {id:"2",name:"имя",typeShip:"Яхта",time:"2",imgPath:"./img/page/routers.jpg"},
        {id:"3",name:"имя",typeShip:"Катер",time:"3",imgPath:"./img/page/routers.jpg"},
        {id:"4",name:"имя",typeShip:"Яхта",time:"4",imgPath:"./img/page/routers.jpg"},
        {id:"5",name:"имя",typeShip:"Катер",time:"5",imgPath:"./img/page/routers.jpg"},
   ]);

    return (
        <div className="content pt-5">
            <div className="d-md-none position-absolute w-100 h-50 z-1 py-md-5 mt-5">
                <div className="mx-5  text-center py-5">
                    <h1 className="text-white">МАРШРУТЫ</h1>
                    <p className="text-white">Здесь вы найдете разнообразные варианты прогулок на яхте или катере по Санкт-Петербургу и его окрестностям.</p>
                </div>
            </div>
            <MainImg img="./img/page/routers.jpg"/>
            <ListPosts urlClassMoreInfo="/routers" postType={PostRoute} posts={routersPost} title="МАРШРУТЫ" text="Здесь вы найдете разнообразные варианты прогулок на яхте или катере по Санкт-Петербургу и его окрестностям." />
        </div>
    );
};

export default Routers;