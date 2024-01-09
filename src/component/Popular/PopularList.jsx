import React from 'react';
import PopularCard from "./PopularCard";

const PopularList = ({popularList,title}) => {
    return (
        <div>
            {popularList && popularList?.urlClassMoreInfo ?
                <div className="d-flex">
                {popularList?.boats ?
                    popularList.boats.map((obj,index)=>{
                        return (<PopularCard key={title + "_boats_" + obj?.name + index} {...obj} urlClassMoreInfo={popularList.urlClassMoreInfo?.boats} type="Катер"/>);
                    })
                    :null}
                {popularList?.yachts ?
                    popularList.yachts.map((obj,index)=>{
                        return (<PopularCard key={title + "_yachts_" + obj?.name + index} {...obj} urlClassMoreInfo={popularList.urlClassMoreInfo?.yachts} type="Яхта"/>);
                    })
                    :null}
                {popularList?.routers ?
                    popularList.routers.map((obj,index)=>{
                        return (<PopularCard key={title + "_routers_" + obj?.name + index} {...obj} urlClassMoreInfo={popularList.urlClassMoreInfo?.routers} type="Маршрут"/>);
                    })
                    :null}
                {popularList?.eventsSee ?
                    popularList.eventsSee.map((obj,index)=>{
                        return (<PopularCard key={title + "_eventsSee_" + obj?.name + index} {...obj} urlClassMoreInfo={popularList.urlClassMoreInfo?.eventsSee} type="Мероприятие"/>);
                    })
                    :null}
                </div>
            : null}
        </div>
    );
};

export default PopularList;