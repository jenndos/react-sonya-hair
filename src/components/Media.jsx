import clientImg1 from '../assets/images/clients-media/client_image_1.jpg';
import clientImg2 from '../assets/images/clients-media/client_image_2.jpg';
import clientImg3 from '../assets/images/clients-media/client_image_3.jpg';
import clientImg4 from '../assets/images/clients-media/client_image_4.jpg';
import clientImg5 from '../assets/images/clients-media/client_image_5.jpg';
import clientImg1Small from '../assets/images/clients-media/client_image_1_small.jpg';
import clientImg2Small from '../assets/images/clients-media/client_image_2_small.jpg';
import clientImg3Small from '../assets/images/clients-media/client_image_3_small.jpg';
import clientImg4Small from '../assets/images/clients-media/client_image_4_small.jpg';
import clientImg5Small from '../assets/images/clients-media/client_image_5_small.jpg';
import clientPreview1 from '../assets/images/clients-media/preview_1.jpg';
import clientPreview2 from '../assets/images/clients-media/preview_2.jpg';
import clientPreview3 from '../assets/images/clients-media/preview_3.jpg';
import clientPreview4 from '../assets/images/clients-media/preview_4.jpg';
import clientPreview5 from '../assets/images/clients-media/preview_5.jpg';
import clientPreview6 from '../assets/images/clients-media/preview_6.jpg';
import clientPreview7 from '../assets/images/clients-media/preview_7.jpg';
import clientPreview8 from '../assets/images/clients-media/preview_8.jpg';
import clientPreview9 from '../assets/images/clients-media/preview_9.jpg';
import clientPreview10 from '../assets/images/clients-media/preview_10.jpg';
import clientPreview11 from '../assets/images/clients-media/preview_11.jpg';
import clientPreview12 from '../assets/images/clients-media/preview_12.jpg';
import clientPreview13 from '../assets/images/clients-media/preview_13.jpg';
import clientPreview14 from '../assets/images/clients-media/preview_14.jpg';
import clientPreview15 from '../assets/images/clients-media/preview_15.jpg';
import clientVid1 from '../assets/images/clients-media/client_video_1.mov';
import clientVid2 from '../assets/images/clients-media/client_video_2.mov';
import clientVid3 from '../assets/images/clients-media/client_video_3.mov';
import clientVid4 from '../assets/images/clients-media/client_video_4.mov';
import clientVid5 from '../assets/images/clients-media/client_video_5.mov';
import clientVid6 from '../assets/images/clients-media/client_video_6.mov';
import clientVid7 from '../assets/images/clients-media/client_video_7.mov';
import clientVid8 from '../assets/images/clients-media/client_video_8.mov';
import clientVid9 from '../assets/images/clients-media/client_video_9.mov';
import clientVid10 from '../assets/images/clients-media/client_video_10.mov';
import clientVid11 from '../assets/images/clients-media/client_video_11.mov';
import clientVid12 from '../assets/images/clients-media/client_video_12.mov';
import clientVid13 from '../assets/images/clients-media/client_video_13.mov';
import clientVid14 from '../assets/images/clients-media/client_video_14.mov';
import clientVid15 from '../assets/images/clients-media/client_video_15.mov';

const images = [clientImg1, clientImg2, clientImg3, clientImg4, clientImg5];
const imagesSmall = [clientImg1Small, clientImg2Small, clientImg3Small, clientImg4Small, clientImg5Small];
const previews = [clientPreview1, clientPreview2, clientPreview3, clientPreview4, clientPreview5, clientPreview6, clientPreview7, clientPreview8, clientPreview9, clientPreview10, clientPreview11, clientPreview12, clientPreview13, clientPreview14, clientPreview15];
const videos = [clientVid1, clientVid2, clientVid3, clientVid4, clientVid5, clientVid6, clientVid7, clientVid8, clientVid9, clientVid10, clientVid11, clientVid12, clientVid13, clientVid14, clientVid15];

const Media = () => {
    return [
        ...imagesSmall.map((url) => ({type: 'imageSmall', url})),
        ...previews.map((url) => ({type: 'preview', url})),
        ...images.map((url) => ({type: 'image', url})),
        ...videos.map((url) => ({type: 'video', url})),
    ];
};

export default Media;

