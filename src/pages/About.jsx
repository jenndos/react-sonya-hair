import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Image from "../components/Image.jsx";
import certificateImg from "../assets/images/certificate.jpg";
import sonyaAbout1Img from "../assets/images/sonya-about1.jpg";
import sonyaAbout2Img from "../assets/images/sonya-about2.jpg";

const About = () => {

    const images = [certificateImg, sonyaAbout1Img, sonyaAbout2Img];

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Обо мне';
    }, []);

    return (
        <>

            <div className="container">
                <h1>Обо мне</h1>
                <button className="toMainPgBtn" onClick={() => navigate('/')}>Вернуться на главную страницу</button>
                <div className="about-page">
                    <p id="text-welcome">Предоставляю большой спектр современных услуг по реконструкции волос. Регулярно провожу обучения, повышаю свою компетентность и ввожу в работу новые улучшенные продукты. Чувствую, понимаю и люблю волосы! Умею с ними работать! Веду блог в Instagram.</p>
                    <div className="image-container">
                        <div className="left-col">
                            <Image id="img1" src={sonyaAbout1Img} clickable={false} alt="Photo Profile"/>
                            <Image id="img2" src={sonyaAbout2Img} clickable={false} alt="Photo Profile"/>
                            <p>В салоне также имеется массажёр для ног</p>
                        </div>
                        <div className="right-col">
                            <Image id="img3" src={certificateImg} clickable={false} alt="Certificate"/>
                            <p>Сертификат о повышении квалификации по<br/>реконструкции волос с правом преподавания</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;
