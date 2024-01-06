import React from 'react';
import style from './Modal.module.css';
import {FaHistory, FaSearchMinus, FaSearchPlus, FaTimes} from "react-icons/fa";

const Modal = ({children,visible,setVisible}) => {

    const modalClass = [style.modal];
    if(visible)modalClass.push(style.active);

    return (
        <div className={modalClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={style.content} onClick={(e)=>e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default Modal;