"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Carrousel, MediaImage } from '@/types/api';
import RenderMediaImage from '../Media/renderMediaImage';

const renderCarrousel: React.FC<Carrousel> = (props)  => {
    const Component = props
    //console.log(Component)

    return (
        <section className="carrousel">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="mySwiper"
            >
            {Component.Element.map((elt, index) => (
                <SwiperSlide key={index} className='image-container'>
                    <RenderMediaImage  {... (elt as MediaImage)}/>
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    );
};

export default renderCarrousel;
