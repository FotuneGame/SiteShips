import React from 'react';
import style from "./PostBerth.module.css";
import {NavLink} from "react-router-dom";

const PostBerth = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 rounded-3 p-3">
                <div className="pt-1">
                    <NavLink className="text-decoration-none" to={props.urlClassMoreInfo.berths+"/"+props?.id}>
                        <h2 className={["text-start m-0",style.name_berth].join(" ")}>{props?.name}</h2>
                    </NavLink>
                    <div className="shadow rounded mt-1 p-2">
                        {props?.urlClassMoreInfo ?
                            props.ship.map((obj,index) => {
                                return(
                                    <div className="p-1 m-0 mt-1" key={obj?.name + "_" + props?.id + "_" + "_" + obj?.id}>
                                        {obj.typeShip==="Яхта"
                                            ?
                                            <div>
                                                <NavLink className={["text-decoration-none",style.name_ship].join(" ")} to={props.urlClassMoreInfo.yachts+"/"+obj?.id}>{obj?.name}</NavLink>
                                                <span className={style.type_ship}>Яхта</span>
                                                <span className="float-end">от {obj?.price} ₽/час</span>
                                                <hr/>
                                            </div>
                                            :
                                            <div>
                                                <NavLink className={["text-decoration-none",style.name_ship].join(" ")} to={props.urlClassMoreInfo.boats+"/"+obj?.id}>{obj?.name}</NavLink>
                                                <span className={style.type_ship}>Катер</span>
                                                <span className="float-end">от {obj?.price} ₽/час</span>
                                                <hr/>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                            : null}


                    </div>
                </div>
        </div>
    );
};

export default PostBerth;