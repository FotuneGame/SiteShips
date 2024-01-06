import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import style from "../PostEvent/PostEvent.module.css";
import {FaArrowCircleRight} from "react-icons/fa";
const PostEvent = (props) => {
    return (
        <div className="rounded-3 col p-3">
            <div className="position-relative m-0 p-0 overflow-hidden">
                <div className="p-0">
                    <NavLink className={style.img_a} to={props?.urlClassMoreInfo+"/"+ props?.id}></NavLink>
                    <img className={["img-fluid rounded-3 col z-n1",style.img].join(' ')} src={props?.imgPath} alt={props?.name}/>
                </div>

                <div className={["position-absolute pt-1",style.name].join(" ")}>
                    <h2 className="col-6 text-start text-white m-0 p-2">{props?.name}</h2>
                    <div className="d-flex justify-content-center">
                        <NavLink className="col-11 btn btn-success text-start mt-1  text-decoration-none z-0 p-1 py-3" to={props?.urlClassMoreInfo+"/"+ props?.id}>
                            Подробнее
                            <FaArrowCircleRight className="float-end" size="1.5rem" color="white"/>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostEvent;