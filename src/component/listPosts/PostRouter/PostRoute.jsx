import React, {useState} from 'react';
import style from "../PostRouter/PostRoute.module.css";
import {FaArrowCircleRight, FaTimes} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import Modal from "../../modal/default/Modal";
import PersonalityOrder from "../../PersonalityOrder/PersonalityOrder";

const PostRoute = (props) => {

    const [modalVisible,setModalVisible]=useState(false);

    const sendOrder = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
        setModalVisible(false);
    }

    let hourInRussia = '';
    if(props.time) {
        if ((props.time > 20 && props.time % 10 === 1) || props.time === '1') hourInRussia = "час";
        else if ((props.time > 20 && props.time % 10>=2 && props.time % 10 <= 4) || props.time >= 2 && props.time <= 4) hourInRussia = "часа";
    else hourInRussia = "часов";
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 rounded-3 p-3">
            <div className="position-relative m-0 p-0 overflow-hidden">
                <div className="position-absolute z-0 m-2">
                    <div className="rounded-5 bg-white px-2 me-2"><strong>{props?.time}</strong> {hourInRussia}</div>
                </div>
                <div className="p-0">
                    <NavLink className={style.img_a} to={props?.urlClassMoreInfo+"/"+ props?.id}></NavLink>
                    <img className={["img-fluid rounded-3 col z-n1",style.img].join(' ')} src={props?.imgPath} alt={props?.name}/>
                </div>

                <div className={["position-absolute z-0 rounded-5 bg-white px-1 m-2 bg-opacity-75",style.type].join(' ')}>
                    <strong>{props?.typeShip}</strong>
                </div>

                <div className={["position-absolute pt-1",style.name].join(" ")}>
                    <h2 className="col-6 text-start text-white m-0 p-2">{props?.name}</h2>
                    <div className="d-sm-flex justify-content-between align-content-center p-1">
                        <NavLink className="col-12 col-sm-6 btn btn-success float-end text-start mt-1  text-decoration-none z-0" to={props?.urlClassMoreInfo+"/"+ props?.id}>
                            Подробнее
                            <FaArrowCircleRight className="float-end" size="1.5rem" color="white"/>
                        </NavLink>
                        <button className="col-12 col-sm-5 btn btn-primary float-end text-start mt-1 z-0" onClick={()=>setModalVisible(true)}>
                            Заказать
                            <FaArrowCircleRight className="float-end" size="1.5rem" color="white"/>
                        </button>
                    </div>
                </div>
            </div>

            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <div className="container bg-white shadow p-3 rounded-3">
                    <div className="d-flex justify-content-between pt-2">
                        <h1 className="mx-4 my-0">Оформление</h1>
                        <button className="float-end btn bg-transparent px-md-4 mx-0" onClick={()=>setModalVisible(false)}>
                            <FaTimes  size="2rem" color="black"/>
                        </button>
                    </div>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col ps-lg-0 pt-sm-0">
                                <img className="img-fluid rounded-3 z-n1 mt-3" src={props?.imgPath} alt={props?.name}/>
                            </div>
                            <div className="col pe-lg-0">
                                <PersonalityOrder title={props?.name} withoutContacts={true} callback={sendOrder}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PostRoute;