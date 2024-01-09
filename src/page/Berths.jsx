import React,{useState} from 'react';
import ListPosts from "../component/listPosts/ListPosts";
import PostBerth from "../component/listPosts/PostBerth/PostBerth";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";
const Berths = () => {

    const sendProposal = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
    }

    const [berthsPost,setBerthsPost] = useState([
        {id:"1",name:"имя причала",ship:[
                {id:"1",name:"имя",typeShip:"Катер",price:"500"},
                {id:"2",name:"имя",typeShip:"Яхта",price:"1000"},
                {id:"3",name:"имя",typeShip:"Катер",price:"2000"},
            ]},
        {id:"2",name:"имя причала",ship:[
                {id:"4",name:"имя",typeShip:"Катер",price:"500"},
                {id:"5",name:"имя",typeShip:"Яхта",price:"1000"},
                {id:"6",name:"имя",typeShip:"Катер",price:"2000"},
            ]},
        {id:"3",name:"имя причала",ship:[
                {id:"7",name:"имя",typeShip:"Катер",price:"500"},
                {id:"8",name:"имя",typeShip:"Яхта",price:"1000"},
            ]},
        {id:"4",name:"имя причала",ship:[
                {id:"9",name:"имя",typeShip:"Катер",price:"500"},
            ]},
   ]);

    return (
        <div className="content pt-5">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3eed6f6eb7f99e0ba0fea2c7deda8d11030fcdf8256ac87b829192365d10c30d&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
            <ListPosts isAdaptive={true} urlClassMoreInfo={["/boats","/yachts"]} PostType={PostBerth} posts={berthsPost} title="НАШИ ПРИЧАЛЫ"/>
            <PersonalityOrder title="ПОДГОТОВИТЬ ДЛЯ ВАС СПЕЦ ПРЕДЛОЖЕНИЕ?" callback={sendProposal}/>
        </div>
    );
};

export default Berths;