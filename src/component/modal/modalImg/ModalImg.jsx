import React from 'react';
import style from './ModalImg.module.css';

const ModalImg = ({children,visible,setVisible}) => {

    const modalClass = [];
    if(visible)modalClass.push(style.active);

    return (
        <div className={modalClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={style.content} onClick={(e)=>e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default ModalImg;