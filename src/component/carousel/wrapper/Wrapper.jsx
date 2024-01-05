import React from 'react';
import {TransformWrapper, TransformComponent, useControls} from "react-zoom-pan-pinch";
import {FaSearchMinus, FaSearchPlus, FaTimes,FaHistory} from "react-icons/fa";

const Wrapper = ({children,setModalVisible}) => {

    const Controls = () => {
        const { zoomIn, zoomOut,resetTransform} = useControls();
        return (
            <div className="position-absolute top-0 end-0 z-3">
                <div className=" d-flex justify-content-center">
                    <div className="col-4 m-0 p-0" onClick={()=>setModalVisible(false)}></div>
                    <button className="btn bg-transparent px-2 mx-0" onClick={() => zoomIn()}><FaSearchPlus size="1.5rem" color="white"/></button>
                    <button className="btn bg-transparent px-2 mx-0" onClick={() => zoomOut()}><FaSearchMinus size="1.5rem" color="white"/></button>
                    <button className="btn bg-transparent px-2 mx-0" onClick={() => resetTransform()}><FaHistory size="1.5rem" color="white"/></button>
                    <button className="btn bg-transparent px-2 mx-0" onClick={()=>setModalVisible(false)}>
                        <FaTimes  size="2rem" color="white"/>
                    </button>
                    <div className="col-4 m-0 p-0" onClick={()=>setModalVisible(false)}></div>
                </div>
            </div>
        );
    };

    return (
        <TransformWrapper>
            <Controls/>
            <TransformComponent>
                {children}
            </TransformComponent>
        </TransformWrapper>
    );
};

export default Wrapper;