import React, { useState, useEffect, useRef, useCallback } from 'react';

import previewImage1 from '../assets/images/clients-media/preview_images/client_image_1_small.jpg';
import previewImage2 from '../assets/images/clients-media/preview_images/client_image_2_small.jpg';
import previewImage3 from '../assets/images/clients-media/preview_images/client_image_3_small.jpg';
import previewImage4 from '../assets/images/clients-media/preview_images/client_image_4_small.jpg';
import previewImage5 from '../assets/images/clients-media/preview_images/client_image_5_small.jpg';

import image1 from '../assets/images/clients-media/images/client_image_1.jpg';
import image2 from '../assets/images/clients-media/images/client_image_2.jpg';
import image3 from '../assets/images/clients-media/images/client_image_3.jpg';
import image4 from '../assets/images/clients-media/images/client_image_4.jpg';
import image5 from '../assets/images/clients-media/images/client_image_5.jpg';

import previewVideo1 from '../assets/images/clients-media/preview_videos/preview_1.jpg';
import previewVideo2 from '../assets/images/clients-media/preview_videos/preview_2.jpg';
import previewVideo3 from '../assets/images/clients-media/preview_videos/preview_3.jpg';
import previewVideo4 from '../assets/images/clients-media/preview_videos/preview_4.jpg';
import previewVideo5 from '../assets/images/clients-media/preview_videos/preview_5.jpg';
import previewVideo6 from '../assets/images/clients-media/preview_videos/preview_6.jpg';
import previewVideo7 from '../assets/images/clients-media/preview_videos/preview_7.jpg';
import previewVideo8 from '../assets/images/clients-media/preview_videos/preview_8.jpg';
import previewVideo9 from '../assets/images/clients-media/preview_videos/preview_9.jpg';
import previewVideo10 from '../assets/images/clients-media/preview_videos/preview_10.jpg';
import previewVideo11 from '../assets/images/clients-media/preview_videos/preview_11.jpg';
import previewVideo12 from '../assets/images/clients-media/preview_videos/preview_12.jpg';
import previewVideo13 from '../assets/images/clients-media/preview_videos/preview_13.jpg';
import previewVideo14 from '../assets/images/clients-media/preview_videos/preview_14.jpg';
import previewVideo15 from '../assets/images/clients-media/preview_videos/preview_15.jpg';

import video1 from '../assets/images/clients-media/videos/client_video_1.mov';
import video2 from '../assets/images/clients-media/videos/client_video_2.mov';
import video3 from '../assets/images/clients-media/videos/client_video_3.mov';
import video4 from '../assets/images/clients-media/videos/client_video_4.mov';
import video5 from '../assets/images/clients-media/videos/client_video_5.mov';
import video6 from '../assets/images/clients-media/videos/client_video_6.mov';
import video7 from '../assets/images/clients-media/videos/client_video_7.mov';
import video8 from '../assets/images/clients-media/videos/client_video_8.mov';
import video9 from '../assets/images/clients-media/videos/client_video_9.mov';
import video10 from '../assets/images/clients-media/videos/client_video_10.mov';
import video11 from '../assets/images/clients-media/videos/client_video_11.mov';
import video12 from '../assets/images/clients-media/videos/client_video_12.mov';
import video13 from '../assets/images/clients-media/videos/client_video_13.mov';
import video14 from '../assets/images/clients-media/videos/client_video_14.mov';
import video15 from '../assets/images/clients-media/videos/client_video_15.mov';
import {useNavigate} from "react-router-dom";

const MediaGrid = () => {
    const [mediaItems, setMediaItems] = useState([]);
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const items = [
            { id: 1, type: 'image', preview: previewImage1, full: image1 },
            { id: 2, type: 'image', preview: previewImage2, full: image2 },
            { id: 3, type: 'image', preview: previewImage3, full: image3 },
            { id: 4, type: 'image', preview: previewImage4, full: image4 },
            { id: 5, type: 'image', preview: previewImage5, full: image5 },
            { id: 6, type: 'video', preview: previewVideo1, full: video1 },
            { id: 7, type: 'video', preview: previewVideo2, full: video2 },
            { id: 8, type: 'video', preview: previewVideo3, full: video3 },
            { id: 9, type: 'video', preview: previewVideo4, full: video4 },
            { id: 10, type: 'video', preview: previewVideo5, full: video5 },
            { id: 11, type: 'video', preview: previewVideo6, full: video6 },
            { id: 12, type: 'video', preview: previewVideo7, full: video7 },
            { id: 13, type: 'video', preview: previewVideo8, full: video8 },
            { id: 14, type: 'video', preview: previewVideo9, full: video9 },
            { id: 15, type: 'video', preview: previewVideo10, full: video10 },
            { id: 16, type: 'video', preview: previewVideo11, full: video11 },
            { id: 17, type: 'video', preview: previewVideo12, full: video12 },
            { id: 18, type: 'video', preview: previewVideo13, full: video13 },
            { id: 19, type: 'video', preview: previewVideo14, full: video14 },
            { id: 20, type: 'video', preview: previewVideo15, full: video15 },
        ];
        setMediaItems(items);
    }, []);

    useEffect(() => {
        document.title = 'Обо мне';
    }, []);

    useEffect(() => {
        if (selectedMediaIndex !== null) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    }, [selectedMediaIndex]);


    const openMedia = (index) => {
        setSelectedMediaIndex(index);
    };

    const closeMedia = () => setSelectedMediaIndex(null);

    const navigateMedia = useCallback((direction) => {
        if (selectedMediaIndex !== null) {
            setSelectedMediaIndex((prevIndex) => (prevIndex + direction + mediaItems.length) % mediaItems.length);
        }
    }, [mediaItems.length, selectedMediaIndex]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowLeft') navigateMedia(-1);
        if (event.key === 'ArrowRight') navigateMedia(1);
    }, [navigateMedia]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (videoRef.current && selectedMediaIndex !== null) {
            const videoElement = videoRef.current;
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.src = mediaItems[selectedMediaIndex].full;
            videoElement.load();
            videoElement.oncanplay = () => videoElement.play();
        }
    }, [selectedMediaIndex, mediaItems]);

    const renderMediaContent = () => {
        if (selectedMediaIndex === null) return null;

        const media = mediaItems[selectedMediaIndex];
        if (media.type === 'image') {
            return <img src={media.full} alt={`Media ${selectedMediaIndex + 1}`} />;
        }

        return (
            <video ref={videoRef} controls autoPlay>
                <source src={media.full} type="video/mp4" />
                {/*Ваш браузер не поддерживает данный формат видео*/}
            </video>
        );
    };

    return (
        <div className="container">
            <h1>Мои клиенты</h1>
            <button className="toMainPgBtn" onClick={() => navigate('/')}>Вернуться на главную страницу</button>
            <div className="media-grid">
                {mediaItems.map((item, index) => (
                    <div key={item.id} className="media-item" onClick={() => openMedia(index)}>
                        {
                            item.type === 'video' ?
                            <span className="icon-camera">
                                <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="117 199 382 332"  // Cropped viewBox to fit the icon
                                    width="30px"
                                    height="30px"
                                >
                                    <path
                                        fill="#fff"
                                        d="M482.28,434.61c-6.79,24.47-20.43,30.07-42.54,17.44-17.83-10.2-35.72-20.29-53.35-30.8a10.64,10.64,0,0,1-4.53-7.61q-.48-41.91,0-83.84a10.68,10.68,0,0,1,4.43-7.7c17.7-10.64,35.63-20.92,53.58-31.13,22-12.53,35.49-7,42.41,17.4Z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M234.59,481.24H154c-27,0-44.28-14.73-44.78-41.56-.89-46.78-.47-93.59.42-140.38.39-20.22,18.54-36.63,38.9-36.71q86.07-.36,172.15,0c22.53.11,39.62,18,39.66,40.64q.12,68.38,0,136.77c0,23.45-17.62,41.08-41.13,41.19C291,481.34,262.8,481.24,234.59,481.24Z"
                                    />
                                </svg>
                            </span >
                            : null
                        }
                        <img src={item.preview} alt={`Media ${index + 1}`} className="media-thumbnail" />
                    </div>
                ))}

                {selectedMediaIndex !== null && (
                    <div className="media-modal" onClick={closeMedia}>
                        <div className="media-modal-content" onClick={(e) => e.stopPropagation()}>
                            {renderMediaContent()}
                            <button className="navigate-button left" onClick={() => navigateMedia(-1)}>&#8249;</button>
                            <button className="navigate-button right" onClick={() => navigateMedia(1)}>&#8250;</button>
                            <button className="close-button" onClick={closeMedia}>×</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaGrid;
