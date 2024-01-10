import React,{useState,useContext} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Carousel from "../component/carousel/Carousel";
import {FaArrowCircleRight, FaFire, FaTimes} from "react-icons/fa";
import style from "../component/listPosts/PostShip/PostShip.module.css";
import Modal from "../component/modal/default/Modal";
import PersonalityOrder from "../component/PersonalityOrder/PersonalityOrder";
import {UrlClassMoreInfoContext} from "../context";

const Yacht = () => {
    const params = useParams();
    console.log(params.id);

    const [yacht,setYacht] = useState(
        {
            id:"1",
            name:"имя",
            pier:{
                id:"1",
                name:"имя причала",
            },
            onBoard:"на борту, на борту, на борту.",
            minTime:"00:01",
            countPerson:"1",
            oldPrice:"1000",
            oldPriceWeekday:"8000",
            price:"500",
            priceWeekday:"5000",
            isHit:"true",
            imgPath:"../img/page/yachts.jpg",
            text:"Катер имя идеально подходит для больших компаний, комфортное размещение как в просторном теплом салоне, так и на открытой палубе.",
            size:"10"
        }
    );

    const [img,setImg] = useState(["../img/page/yachts.jpg","../img/page/yachts.jpg"]);
    const [modalVisible,setModalVisible]=useState(false);

    const sendOrder = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
        setModalVisible(false);
    }

    return (
        <div className="content mt-3 pt-5">

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
                                    <NavLink className="mx-0 text-decoration-none text-black" to={useContext(UrlClassMoreInfoContext).yachts}>Яхты</NavLink>
                                </li>
                                <li className="breadcrumb-item active">
                                    <NavLink className="mx-0 text-decoration-none text-black" to={"#"}>{yacht.name}</NavLink>
                                </li>
                            </ol>
                            {yacht.isHit==='true' ?
                                <div className={"z-0 px-2 d-flex"}>
                                    <FaFire color='orange' size="1.5rem"/>
                                    <strong className="p-0">Хит</strong>
                                </div>
                                : null}
                        </div>
                        <div className="d-md-flex justify-content-between">
                            <h1>{yacht.name}</h1>
                            <div className="d-sm-flex">
                                <div className="z-0 m-2">
                                    <div className="rounded-5 border-3 border bg-white px-2 me-2"><strong>{yacht.countPerson}</strong> чел.</div>
                                </div>
                                <div className="z-0 m-2">
                                    <div className="rounded-5 border-3 border bg-white px-2 me-2"><strong>{yacht.size}</strong> метров</div>
                                </div>
                            </div>
                        </div>
                        <p>{yacht.text}</p>
                        <p className="d-flex  text-start my-2">
                            <strong className="text-black">На борту</strong>{": "+yacht.onBoard}
                        </p>
                        <p className="d-flex  text-start my-4">
                            <strong className="text-black">Минимальное время аренды</strong>{": "+yacht.minTime + " ч."}
                        </p>
                        <div className="d-md-flex">
                            <div className="col-12 col-md-6">
                                <div className="col-12 d-flex rounded-3 bg-primary opacity-75 p-2 my-2">
                                    <p className={["text-start text-white  m-0",style.oldPrice].join(' ')}>пн-чт</p>
                                    <div className="col d-flex rounded-3 bg-white">
                                        {yacht.oldPrice ?
                                            <p className={["text-start m-0",style.oldPrice].join(' ')}>
                                                от<s className={style.redLine}><span className="text-black">{yacht.oldPriceWeekday}</span></s><strong className="text-black"> {yacht.priceWeekday}</strong>₽/час
                                            </p>
                                            : null}
                                    </div>
                                </div>
                                <div className="col-12 d-flex rounded-3 bg-success opacity-75 p-2 my-2">
                                    <p className={["text-start text-white  m-0",style.oldPrice].join(' ')}>пт-вс</p>
                                    <div className="col d-flex rounded-3 bg-white">
                                        {yacht.oldPrice ?
                                            <p className={["text-start m-0",style.oldPrice].join(' ')}>
                                                от<s className={style.redLine}><span className="text-black">{yacht.oldPrice}</span></s><strong className="text-black"> {yacht.price}</strong>₽/час
                                            </p>
                                            : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-end justify-content-end">
                                <button className=" btn btn-outline-primary text-start m-2 py-2" onClick={()=>setModalVisible(true)}>
                                    Заказать
                                    <FaArrowCircleRight className="float-end ms-4" size="1.5rem" color="white"/>
                                </button>
                            </div>
                        </div>
                        <NavLink className={["d-flex  text-start my-4  float-lg-end text-decoration-none",style.name_berth].join(" ")} to={useContext(UrlClassMoreInfoContext).berths+"/"+yacht.pier.id}>
                            <strong className="text-black">Причал</strong>{": "+yacht.pier.name}
                        </NavLink>
                    </div>
                </div>
            </div>

            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <div className="container bg-white shadow p-2">
                    <div className="d-flex justify-content-between pt-2">
                        <h1 className="mx-4 my-0">Заказать</h1>
                        <button className="float-end btn bg-transparent px-md-4 mx-0" onClick={()=>setModalVisible(false)}>
                            <FaTimes  size="2rem" color="black"/>
                        </button>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col pe-lg-0">
                                <PersonalityOrder title={yacht.name} withoutContacts={true} callback={sendOrder}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default Yacht;