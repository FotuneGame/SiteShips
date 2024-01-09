import React from 'react';
import style from './MainImg.module.css';
import Hr from "../hr/Hr";

const MainImg = ({main,img,title}) => {
    return (
        <div className="p-0 mx-0 w-100">
                    {main ?
                        <div className={["overflow-hidden",style.min_35].join(" ")}>
                            <figure className={["position-relative bg-black m-0 ",style.min_35].join(" ")}>
                                <img src={img} alt={title} className={["img-fluid position-absolute w-100 opacity-75",style.min_35,style.img].join(" ")}/>
                            </figure>
                        </div>
                        :
                        <div className={["overflow-hidden",style.min_25].join(" ")}>
                            <figure className={["position-relative bg-black m-0 ",style.min_25].join(" ")}>
                                <img src={img} alt={title} className={["img-fluid position-absolute w-100 opacity-75",style.min_25,style.img].join(" ")}/>
                            </figure>
                        </div>
                    }
            <Hr className={style.upLine}/>
        </div>
    );
};

export default MainImg;