import React from 'react';
import {useParams} from "react-router-dom";

const RouterSee = () => {
    const params = useParams();

    return (
        <div className="content pt-5">
            <h1>Маршрут под id:{params.id}</h1>
        </div>
    );
};

export default RouterSee;