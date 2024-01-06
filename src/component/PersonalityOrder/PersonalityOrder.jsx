import React, {useState} from 'react';
import {FaArrowCircleRight, FaEnvelope, FaPhoneAlt, FaTelegram, FaWhatsapp} from 'react-icons/fa';

const PersonalityOrder = (props) => {

    const [message,setMessage] = useState({name:"",phone:"",date:"",time:"",text:""});

    const sendMessage = (e)=>{
        e.preventDefault();
        if(message.name.length>128 || message.text.length > 1024){
            alert("Слишком много символов в имене (>128) или в сообщении (>1024)");
            return;
        }
        if(message.name.length===0 || message.phone.length===0 || message.date.length===0 || message.time.length===0 || message.text.length===0){
            alert("Не заполненое поле");
            return;
        }
        props?.callback(message);
        setMessage({name:"",phone:"",date:"",time:"",text:""});
        alert("Сообщение отправлено");
    }

    return (
        <div className="container shadow  align-content-center  p-0 p-md-3 mt-3">
            <div className="row mx-1 mb-2"><h1 className="text-center text-md-start">{props?.title}</h1></div>
            <div className="row">
                <form method="POST" className="d-grid ">
                    <div className="row">
                            <div className="col-12 col-lg-6 mt-2">
                                <input className="form-control mt-1" value={message.name} type="text" maxLength="128" placeholder="Имя" onChange={(e)=>setMessage({...message,name:e.target.value})}/>
                                <input className="form-control mt-1" value={message.phone} type="phone" placeholder="Телефон" onChange={(e)=>setMessage({...message,phone:e.target.value})}/>
                                <div className="d-flex justify-content-between">
                                    <input className="form-control mt-2 me-2" value={message.date} type="date" placeholder="дд.мм.гггг" onChange={(e)=>setMessage({...message,date:e.target.value})}/>
                                    <input className="form-control mt-2" value={message.time} type="time" placeholder="чч.мм" onChange={(e)=>setMessage({...message,time:e.target.value})}/>
                                </div>
                                {props.withoutContacts ?
                                    null
                                    :
                                    <div className="mx-auto my-2 d-grid d-md-flex">
                                        <div className="p-1 border-opacity-50 border border-black rounded mt-2 me-md-2">
                                            <a className=" mx-1 text-decoration-none text-black" href="tel:+7-953-349-61-09"><FaPhoneAlt/>+7 (953) 349-61-09</a>
                                            <a className=" mx-1" href="#"><FaWhatsapp color="black"/></a>
                                            <a className=" mx-1" href="#"><FaTelegram color="black"/></a>
                                        </div>
                                        <div className="p-1 border-opacity-50 border border-black rounded mt-2">
                                            <a className=" mx-1 text-decoration-none text-black" href="mailto:titovgrisha04@gmail.com"><FaEnvelope/> titovgrisha04@gmail.com</a>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="col-12 col-lg-6 mt-2 align-content-around">
                                <textarea cols="60" rows="5" className="form-control" value={message.text}  maxLength="1024" placeholder="Сообщение" onChange={(e)=>setMessage({...message,text:e.target.value})}/>
                                <button className="btn btn-success my-2 float-end col-8 text-start" onClick={(e)=>sendMessage(e)}>
                                    Отправить
                                    <FaArrowCircleRight className="float-end" size="1.5rem" color="white"/>
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalityOrder;