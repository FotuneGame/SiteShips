import React, {useContext} from 'react';
import PopularCard from "./PopularCard";
import {UrlClassMoreInfoContext} from "../../context";

const PopularList = ({popularList,title}) => {
    const url = useContext(UrlClassMoreInfoContext);
    return (
        <div>
            {popularList ?
                <div className="d-flex">
                {popularList?.boats ?
                    popularList.boats.map((obj,index)=>{
                        return (<PopularCard key={title + "_boats_" + obj?.name + index} {...obj} urlClassMoreInfo={url.boats} type="Катер"/>);
                    })
                    :null}
                {popularList?.yachts ?
                    popularList.yachts.map((obj,index)=>{
                        return (<PopularCard key={title + "_yachts_" + obj?.name + index} {...obj} urlClassMoreInfo={url.yachts} type="Яхта"/>);
                    })
                    :null}
                {popularList?.routers ?
                    popularList.routers.map((obj,index)=>{
                        return (<PopularCard key={title + "_routers_" + obj?.name + index} {...obj} urlClassMoreInfo={url.routers} type="Маршрут"/>);
                    })
                    :null}
                {popularList?.eventsSee ?
                    popularList.eventsSee.map((obj,index)=>{
                        return (<PopularCard key={title + "_eventsSee_" + obj?.name + index} {...obj} urlClassMoreInfo={url.eventsSee} type="Мероприятие"/>);
                    })
                    :null}
                </div>
            : null}
        </div>
    );
};

export default PopularList;