import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./PopularCard.module.css";

const PopularCard = (props) => {
    return (
        <div className="col-12 col-md-6 rounded-3 col p-3">
            <div className="position-relative m-0 p-0 overflow-hidden rounded-3">
                <div className="p-0 bg-black">
                    <NavLink className={style.img_a} to={props?.urlClassMoreInfo+"/"+ props?.id}></NavLink>
                    <img className={["img-fluid col z-n1 opacity-75",style.img].join(' ')} src={props?.imgPath} alt={props?.name}/>
                </div>

                <div className={["position-absolute pt-1 top-50",style.name].join(" ")}>
                    <h2 className="col-12 text-center text-white m-0 p-0">{props?.name}</h2>
                    <h6 className="col-12 m-0 p-0 text-center text-white">{props?.type}</h6>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;