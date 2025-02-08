import React, {useEffect, useState} from 'react';
import whatsappIcon from "../assets/images/whatsapp_icon_white.png";
import vkIcon from "../assets/images/vk_icon_white.png";
import telegramIcon from "../assets/images/telegram_white.png";
import instagramIcon from "../assets/images/instagram_white.png";
import hairBefore1 from "../assets/images/client_image_1_small.jpg";
import hairAfter1 from "../assets/images/client_image_2_small.jpg";
import hairBefore2 from "../assets/images/client_image_3_small.jpg";
import hairAfter2 from "../assets/images/client_image_4_small.jpg";
import hairBefore3 from "../assets/images/client_image_5_small.jpg";
import hairAfter3 from "../assets/images/client_image_6_small.jpg";
import locationImg from "../assets/images/location.jpg";
import Toggle from "../components/Toggle";
import Image from "../components/Image.jsx";

const Home = () => {

    useEffect(() => {
        document.title = 'Соня Данилова';
    }, []);

    const images = [hairBefore1, hairAfter2, hairBefore2, hairAfter2, hairBefore3, hairAfter3];

    return (
        <>
            <h1 className="sofia-label">София Данилова</h1>
            <div className="sonya-wrapper">
                <div className="sonya-content-wrapper">
                    <Image id={"sonya-image"} src={"/src/assets/images/sonya.png"} clickable={false}/>
                    <div className="contacts-services-wrapper">
                        <ul>
                            <li>- Кератиновое выпрямление</li>
                            <li>- Пилинг</li>
                            <li>- Индивидуальный подбор средств</li>
                            <li>- Ботокс для волос</li>
                            <li>- Холодное восстановление</li>
                            <li>- Нанопластика</li>
                        </ul>
                        <a className="phone" href="tel:+79600872086">+7 960 087 2086</a>
                        <p className="address">г.&nbsp;Казань, ул.&nbsp;Кави&nbsp;Наджми&nbsp;8, офис.&nbsp;23</p>
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

            <div className="container">
                <div className="rectangles-wrapper">
                    <div className="gray-rectangle"><p>5 лет опыта работы</p></div>
                    <div className="gray-rectangle"><p>более 300 клиентов</p></div>
                </div>

                <h1 className="client-results-label">Результаты посещения клиентов</h1>

                <div className="clients-result-wrapper">
                    <div className="pair-card-wrapper">
                        <div className="card">
                            <Image src={hairBefore1} images={images} width="200px" height="267px" clickable={true}/>
                            <p>Было</p>
                        </div>
                        <div className="card">
                            <Image src={hairAfter1} images={images} width="200px" height="267px" clickable={true}/>
                            <p>Стало</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="pair-card-wrapper">
                        <div className="card">
                            <Image src={hairBefore2} images={images} width="200px" height="267px" clickable={true}/>
                            <p>Было</p>
                        </div>
                        <div className="card">
                            <Image src={hairAfter2} images={images} width="200px" height="267px" clickable={true}/>
                            <p>Стало</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="pair-card-wrapper">
                        <div className="card">
                            <Image src={hairBefore3} images={images} width="200px" height="267px" clickable={true}/>
                            <p>Было</p>
                        </div>
                        <div className="card">
                            <Image src={hairAfter3} images={images} width="200px" height="267px" clickable={true}/>
                            <p>Стало</p>
                        </div>
                    </div>
                </div>

                <Toggle show={true} header={'Пилинг'} content={
                    <>
                        <p>С помощью этой процедуры можно удалить омертвевшие клетки с поверхности кожи, которые мешают ей
                            дышать и делают
                            ее тусклой и «уставшей». Кроме того, такое очищение способствует лучшему проникновению
                            питательных веществ в
                            глубокие слои кожи, что способствует более эффективному уходу за ней.
                        </p>
                        {/*<br/>*/}
                        {/*<ul>*/}
                        {/*    <li>1. Очищение иобезжиривание кожи головы</li>*/}
                        {/*    <li>2. Нанесение пилинга на кожу головы</li>*/}
                        {/*    <li>3. Нанесение нейтрализаторана 10-15 минут</li>*/}
                        {/*    <li>4. Смывание состава</li>*/}
                        {/*</ul>*/}
                    </>
                } />


                <Toggle show={true} header={'Кератиновое выпрямление'} content={
                    <>
                        <p>
                            Кератиновое выпрямление волос используется для укрепления и разглаживания волос, снижения
                            пушистости,
                            улучшения их текстуры и придания сияния. Это процедура, во время которой на волосы наносится
                            специальный состав,
                            содержащий кератин – протеин, который составляет основу волос. После обработки волосы становятся
                            более прямыми,
                            сияющими и легкими в укладке. Кератиновое выпрямление также помогает предотвратить сечение
                            кончиков, защищает
                            волосы от воздействия вредных факторов окружающей среды и увлажняет их.
                        </p>
                        {/*<br/>*/}
                        {/*<ul>*/}
                        {/*    <li>1. Мытье головы ШГО — шампунем глубокойочистки</li>*/}
                        {/*    <li>2. Удаление остатков влаги сухим полотенцем</li>*/}
                        {/*    <li>3. Нанесение состава на каждую прядь по всей длине</li>*/}
                        {/*    <li>4. Сушка головы феном</li>*/}
                        {/*    <li>5. Закрепление кератина разогретым утюжком</li>*/}
                        {/*</ul>*/}
                    </>

                } />


                <Toggle show={false} header={'Ботокс для волос'} content={
                    <>
                        <p>Ботокс для волос особенно подходит для тех, кто сталкивается с сухостью, ломкостью, отсутствием объема, повышенной электризацией или выпадением волос.</p>
                        {/*<br/>*/}
                        {/*<ul>*/}
                        {/*    <li>1. Мытье головы</li>*/}
                        {/*    <li>2. Разделение волос на пряди и нанесение состава.</li>*/}
                        {/*    <li>3. Обработка фиксирующим средством.</li>*/}
                        {/*    <li>4. Смывание препарата.</li>*/}
                        {/*    <li>5. Нанесение несмываемой маски.</li>*/}
                        {/*    <li>6. Укладка волос.</li>*/}
                        {/*</ul>*/}
                    </>
                } />

                <Toggle show={false} header={'Холодное восстановление'} content={
                    <>
                        <p>Холодное восстановление волос — это процедура, направленная на восстановление повреждённых, секущихся, тусклых и тонких прядей. Она помогает реконструировать защитную оболочку волоса, улучшая его структуру и внешний вид.</p>
                        {/*<br/>*/}
                        {/*<ul>*/}
                        {/*    <li>1. Очищение волос</li>*/}
                        {/*    <li>2. Сушка волос</li>*/}
                        {/*    <li>3. Нанесение восстанавливающего состава</li>*/}
                        {/*    <li>4. Выдержка состава</li>*/}
                        {/*    <li>5. Нанесение фиксирующего средства</li>*/}
                        {/*    <li>6. Нанесение маски</li>*/}
                        {/*    <li>7. Смывание и укладка</li>*/}
                        {/*</ul>*/}
                    </>
                } />

                <Toggle show={false} header={'Нанопластика'} content={
                    <>
                        <p>
                            Это современная процедура, направленная на выпрямление и оздоровление волос с использованием органических кислот и натуральных компонентов. Основная цель нанопластики — сделать волосы прямыми, гладкими и блестящими, а также восстановить их структуру и укрепить изнутри.
                        </p>
                        {/*<br/>*/}
                        {/*<ul>*/}
                        {/*    <li>1. Глубокое очищение волос с помощью специального шампуня.</li>*/}
                        {/*    <li>2. Нанесение выпрямляющего состава, содержащего органические кислоты и натуральные компоненты.</li>*/}
                        {/*    <li>3. Выдержка состава на волосах в течение определенного времени.</li>*/}
                        {/*    <li>4. Термическая обработка волос утюжком для запечатывания активных веществ внутри структуры волоса.</li>*/}
                        {/*    <li>5. Смывание состава и нанесение ухаживающей маски.</li>*/}
                        {/*    <li>6. Окончательная сушка и укладка волос.</li>*/}
                        {/*</ul>*/}
                    </>

                } />

                <h2>Как добраться?</h2>

                <div className="location-wrapper">
                    <a
                        href="https://yandex.ru/maps/?um=constructor%3Ab2b03670ba62cbf7ae78e06704f67481c625f59cdd737c507b4574f7e7973495&source=constructorStatic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ab2b03670ba62cbf7ae78e06704f67481c625f59cdd737c507b4574f7e7973495&amp;width=600&amp;height=300&amp;lang=ru_RU"
                            alt=""
                            style={{ border: 0 }}
                        />
                    </a>

                    {/*<img src={locationImg} alt="location" />*/}
                    <div className="description">
                        <p>Адрес: г.&nbsp;Казань, ул.&nbsp;Салимжанова, д.&nbsp;25</p>
                        <p>2 этаж, третья дверь справа</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
