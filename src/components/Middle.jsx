import React from 'react';
import sonyaPortrait from "../assets/images/sonya.png";
import whatsappIcon from "../assets/images/whatsapp_icon_white.png";
import vkIcon from "../assets/images/vk_icon_white.png";
import telegramIcon from "../assets/images/telegram_white.png";
import instagramIcon from "../assets/images/instagram_white.png";

const Middle = () => {
    return (
        <>
            <div className="sonya-wrapper">
                <div className="sonya-content-wrapper">
                    <img id="sonya-image" src={sonyaPortrait} alt="sonya-image" />
                    <div className="contacts-services-wrapper">
                        <ul>
                            <li>- Кератиновое выпрямление</li>
                            <li>- Пилинг</li>
                            <li>- Индивидуальный подбор средств</li>
                            <li>- Ботокс для волос</li>
                            <li>- Холодное восстановление</li>
                            <li>- Нанопластика</li>
                        </ul>
                        <a className="take-recall">Заказать звонок</a>
                        <a className="phone" href="tel:+79600872086">+7 960 087 2086</a>
                        <p className="address">г.&nbsp;Казань,&nbsp;ул.&nbsp;Салимжанова, д.&nbsp;25</p>
                        <div className="icons-wrapper">
                            <a><img className="whatsapp-icon" src={whatsappIcon}
                                    alt="whatsapp-icon" width="37px" height="37px" /></a>
                            <a href="https://vk.com/sonyushaaaa"><img className="vk-icon"
                                                                      src={vkIcon} alt="vk-icon"
                                                                      width="37px" height="37px" /></a>
                            <a><img className="telegram-icon" src={telegramIcon} alt="telegram-icon"
                                    width="37px" height="37px" /></a>
                            <a><img className="istagram-icon" src={instagramIcon} alt="" width="37px"
                                    height="37px" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Middle;
