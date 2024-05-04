import React from 'react';
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilPic1 from '../../img/profile1.jpg';
import profilPic2 from '../../img/profile2.jpg';
import profilPic3 from '../../img/profile3.jpg';
import profilPic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: profilPic1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente?",
        },
        {
            img: profilPic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente?",
        },
        {
            img: profilPic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente?",
        },
        {
            img: profilPic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sapiente?",
        }
        
    ];
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}>Toujours faire </span>
            <span>un excellent Travail </span>
            <span style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}>pour moi..</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
        <Swiper modules={[Pagination]} slidesPerview={1} pagination={{clickable:true}}>
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                         <img src={client.img} alt="" />
                         <span>{client.review}</span>
                        </div>
                    </SwiperSlide> 
                );
               }
              )
            }
        </Swiper>
    </div>
  );
}

export default Testimonials;
