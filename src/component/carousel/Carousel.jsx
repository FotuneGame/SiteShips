import React from 'react';
import {Carousel as CarouselB} from "react-bootstrap"


const Carousel = (props) => {
    return (
        <CarouselB>
            {props.imgs
                ? props.imgs.map((path,index) =>
                    <CarouselB.Item key={path+index} >
                        <img className="img-fluid rounded" src={path}/>
                    </CarouselB.Item>)
                :null}
        </CarouselB>
    );
};

export default Carousel;