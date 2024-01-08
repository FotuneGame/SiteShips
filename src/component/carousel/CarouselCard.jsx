import React, {useEffect, useState} from 'react';
import {FaAngleLeft,FaAngleRight} from "react-icons/fa";

const CarouselCard = ({title, size, children}) => {

    const getWindowSize = () => {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const MoveLeft = () => {
        if(leftValue>=0) return;
        setLeftValue(leftValue+stepPercent);
    }

    const MoveRight = () => {
        if(leftValue<=-limitPercent) return;
        setLeftValue(leftValue-stepPercent);
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [stepPercent, setStepPercent] = useState(50);
    const [limitPercent,setLimitPercent] = useState(stepPercent * (size-1));
    const [leftValue,setLeftValue] = useState(0);
    const [styleMove,setStyleMove] = useState({
        position:'relative',
        left: "0%",
        transition: "all 1s"
    });

    useEffect(()=>{
        // корректируем шаг в зависимости от col-12 col-md-6
        if(windowSize.innerWidth > 768) setStepPercent(50);
        else setStepPercent(100);
        setLimitPercent((stepPercent) * (size-1));
        if(leftValue<=-limitPercent) setLeftValue(-limitPercent);
        if(leftValue>=0) setLeftValue(0);

        setStyleMove({
            position:'relative',
            left: leftValue+"%",
            transition: "all 1s"
        });

        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },[windowSize,stepPercent,leftValue]);


    return (
        <div className="container shadow pt-3 my-3">
            <div className="p-3">
                <h1 className="text-center mx-auto">{title}</h1>
            </div>
            <div className="overflow-hidden position-relative">
                    <div className="d-flex" style={styleMove}>
                        {children}
                    </div>
                    <button className="position-absolute top-50 start-0 rounded-circle border-0 bg-white shadow p-2 z-1" onClick={MoveLeft}><FaAngleLeft size="1.5rem"/></button>
                    <button className="position-absolute top-50 end-0 rounded-circle border-0 bg-white shadow p-2 z-1"  onClick={MoveRight}><FaAngleRight size="1.5rem"/></button>
            </div>
        </div>
    );
};

export default CarouselCard;