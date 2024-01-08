import React from 'react';
import PopularCard from "./PopularCard";

const PopularList = (props) => {
    return (
        <div>
            {props?.popularList && props.popularList?.urlClassMoreInfo ?
                <div className="d-flex">
                {props.popularList?.boats ?
                    props.popularList.boats.map((obj,index)=>{
                        return (<PopularCard key={props?.title + "_boats_" + obj?.name + index} {...obj} urlClassMoreInfo={props.popularList.urlClassMoreInfo?.boats} type="Катер"/>);
                    })
                    :null}
                {props.popularList?.yachts ?
                    props.popularList.yachts.map((obj,index)=>{
                        return (<PopularCard key={props?.title + "_yachts_" + obj?.name + index} {...obj} urlClassMoreInfo={props.popularList.urlClassMoreInfo?.yachts} type="Яхта"/>);
                    })
                    :null}
                {props.popularList?.routers ?
                    props.popularList.routers.map((obj,index)=>{
                        return (<PopularCard key={props?.title + "_routers_" + obj?.name + index} {...obj} urlClassMoreInfo={props.popularList.urlClassMoreInfo?.routers} type="Маршрут"/>);
                    })
                    :null}
                {props.popularList?.eventsSee ?
                    props.popularList.eventsSee.map((obj,index)=>{
                        return (<PopularCard key={props?.title + "_eventsSee_" + obj?.name + index} {...obj} urlClassMoreInfo={props.popularList.urlClassMoreInfo?.eventsSee} type="Мероприятие"/>);
                    })
                    :null}
                </div>
            : null}
        </div>
    );
};

export default PopularList;