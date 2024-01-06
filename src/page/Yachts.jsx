import React, {useState} from 'react';
import MainImg from "../component/MainImage/MainImg";
import ListPosts from "../component/listPosts/ListPosts";
import PostShip from "../component/listPosts/PostShip/PostShip";

const Yachts = () => {

    const [boatsPost,setBoatsPost] = useState([
        {id:"1",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"./img/page/yachts.jpg"},
        {id:"2",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"./img/page/yachts.jpg"},
        {id:"3",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"./img/page/yachts.jpg"},
        {id:"4",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"./img/page/yachts.jpg"},
        {id:"5",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:01",countPerson:"1",oldPrice:"1000",price:"500",isHit:"true",imgPath:"./img/page/yachts.jpg"},
        {id:"6",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:15",countPerson:"2",oldPrice:"",price:"2000",isHit:"false",imgPath:"./img/page/yachts.jpg"},
        {id:"7",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"00:22",countPerson:"3",oldPrice:"",price:"3000",isHit:"true",imgPath:"./img/page/yachts.jpg"},
        {id:"8",name:"имя",pier:"имя причала",onBoard:"на борту, на борту, на борту.",minTime:"20:15",countPerson:"4",oldPrice:"23",price:"4000",isHit:"false",imgPath:"./img/page/yachts.jpg"},
    ]);

    return (
        <div className="content pt-5">
            <div className="d-md-none position-absolute w-100 h-50 z-1 py-md-5 mt-5">
                <div className="mx-5  text-center py-5">
                    <h1 className="text-white">АРЕНДА ЯХТЫ</h1>
                    <p className="text-white">Большой выбор моторных яхт с капитаном, для водных прогулок по Санкт-Петербургу.</p>
                </div>
            </div>
            <MainImg img="./img/page/yachts.jpg"/>
            <ListPosts urlClassMoreInfo="/yachts" postType={PostShip} posts={boatsPost} title="АРЕНДА ЯХТЫ" text="Большой выбор моторных яхт с капитаном, для водных прогулок по Санкт-Петербургу."/>
        </div>
    );
};

export default Yachts;