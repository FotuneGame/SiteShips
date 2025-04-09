import React, {useState} from 'react';
import style from "./PostShip.module.css";
import {FaArrowCircleRight, FaFire, FaTimes} from 'react-icons/fa';
import Modal from '../../modal/default/Modal';
import PersonalityOrder from "../../PersonalityOrder/PersonalityOrder";
import {NavLink} from "react-router-dom";

const PostShip = (props) => {

    const [modalVisible,setModalVisible]=useState(false);

    const sendOrder = (message) =>{
        //{name:"",phone:"",date:"",time:"",text:""}
        console.log(message);
        setModalVisible(false);
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 rounded-3 p-3">

            <div className="position-relative m-0 p-0 overflow-hidden">
                <div className="position-absolute z-0 m-2">
                    <div className="rounded-5 bg-white px-2 me-2"><strong>{props?.countPerson}</strong> чел.</div>
                </div>
                <div className="p-0">
                    <NavLink className={style.img_a} to={props?.urlClassMoreInfo+"/"+ props?.id}></NavLink>
                    <img className="img-fluid rounded-3 col z-n1" src={props?.imgPath} alt={props?.name}/>
                </div>
                {props.isHit==='true' ?
                    <div className={["position-absolute z-0 rounded-5 bg-white px-1 m-2 bg-opacity-75",style.hit].join(' ')}>
                        <FaFire color='orange'/>
                        <strong>Хит</strong>
                    </div>
                    : null}
                {props.oldPrice ?
                    <div className={["position-absolute z-0  bg-white",style.oldPrice].join(' ')}>
                        <p className="text-start">от<s className={style.redLine}> <strong className="text-black">{props.oldPrice}</strong> </s>₽/час</p>
                    </div>
                    : null}
            </div>

            <div className="container pb-4">
                <div className="row d-flex justify-content-between align-content-center pt-1">
                    <h2 className="col-6 text-start m-0 p-0">{props?.name}</h2>
                    <p className="col-6 text-end m-0 pt-2 align-self-center">от <strong>{props?.price}</strong> ₽/час</p>
                </div>
                <div className="row d-flex justify-content-between align-content-center pt-1">
                    <NavLink className="col-12 col-sm-6 btn btn-outline-success float-end text-start mt-1  text-decoration-none " to={props?.urlClassMoreInfo+"/"+ props?.id}>
                        Подробнее
                        <FaArrowCircleRight className="float-end" size="1.5rem" color="white"/>
                    </NavLink>
                    <button className="col-12 col-sm-5 btn btn-outline-primary float-end text-start mt-1" onClick={()=>setModalVisible(true)}>
                        Заказать
                        <FaArrowCircleRight className="float-end" size="1.5rem" color="white"/>
                    </button>
                </div>
                <div className="row mt-1  d-flex justify-content-between">
                    <p className="col m-0 p-1 align-middle border border-black rounded-2 border-opacity-25">На борту: {props?.onBoard}</p>
                </div>
            </div>

            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <div className="container bg-white shadow p-3 rounded-3">
                    <div className="d-flex justify-content-between py-2">
                        <h1 className="me-4 my-0">Оформление</h1>
                        <button className="float-end btn bg-transparent px-md-4 mx-0" onClick={()=>setModalVisible(false)}>
                            <FaTimes  size="2rem" color="black"/>
                        </button>
                    </div>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col ps-lg-0 pt-sm-0">
                                <img className="img-fluid rounded-3 z-n1 mt-3" src={props?.imgPath} alt={props?.name}/>
                            </div>
                            <div className="col pe-lg-0 d-flex align-items-center">
                                <PersonalityOrder title={props?.name} withoutContacts={true} callback={sendOrder}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PostShip;