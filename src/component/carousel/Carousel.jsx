import React, {useState} from 'react';
import {Carousel as CarouselB} from "react-bootstrap"
import ModuleImg from '../modal/Modal';
import Wrapper from "./wrapper/Wrapper";

const Carousel = ({imgs}) => {
    const [modalVisible,setModalVisible]=useState(false);

    return (
        <ModuleImg visible={modalVisible} setVisible={setModalVisible}>
            <CarouselB interval={null}>
                {imgs
                    ? imgs.map((path,index) =>
                        <CarouselB.Item key={path+index}>
                            {modalVisible ? <Wrapper setModalVisible={setModalVisible}><img className="img-fluid rounded" src={path}/></Wrapper>
                                : <img className="img-fluid rounded" src={path}
                                       onClick={() => setModalVisible(true)}/>
                            }
                        </CarouselB.Item>)
                    :null}
            </CarouselB>
        </ModuleImg>
    );
};

export default Carousel;