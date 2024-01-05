import React from 'react';
import Carousel from "../component/carousel/Carousel";
import {FaFilePdf} from "react-icons/fa";

const Buffet = () => {
    return (
        <div className="content mt-2 pt-5">
            <div className="container shadow d-grid align-content-center  p-lg-3">
                <div className="row">
                    <div className="col-12 py-3 col-lg-6 py-lg-0 align-self-center">
                        <Carousel imgs={["./img/page/main.jpg","./img/page/main.jpg"]}/>
                    </div>
                    <div className="col-12 py-3 col-lg-6 py-lg-0">
                        <h1>МОБИЛЬНЫЙ ФУРШЕТ</h1>
                        <p>В долгой водной прогулке незаменим мобильный фуршет, заказанный и приготовленный специально для Вас. Кейтеринг предоставляет разнообразное меню: от антипасти до сета круассанов, от канапе из морских продуктов до ассорти из твёрдого сыра с виноградом, орехами и мёдом. Все блюда готовятся непосредственно перед доставкой на борт и доставляются за 10-15 минут до начала рейса в специальных рефрижераторных автомобилях, что гарантирует их свежесть и высокие вкусовые качества.</p>
                        <div className="d-grid d-lg-flex py-3 py-lg-0 justify-content-around">
                            <div className="mx-1 row py-2">
                                <FaFilePdf size="2rem" color="black" />
                                <a className="text-black text-center" href="#" >Мобильный фуршет</a>
                            </div>
                            <div className="mx-1 row py-2">
                                <FaFilePdf size="2rem" color="black" />
                                <a className="text-black text-center" href="#">Фуршетное меню</a>
                            </div>
                            <div className="mx-1 row py-2">
                                <FaFilePdf size="2rem" color="black" />
                                <a className="text-black text-center" href="#">Банкетное меню</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buffet;