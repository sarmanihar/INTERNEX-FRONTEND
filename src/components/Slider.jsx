import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper'; 
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
const Slider = ({content}) => {
  // console.log(content)
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className='slidee'>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Reiciendis soluta molestias officia, accusamus cum et quia 
      maiores accusantium distinctio sunt mollitia doloribus placeat
      laboriosam quaerat enim iure ipsa animi ut!
      </p>
      </SwiperSlide>
    <SwiperSlide className='slidee'>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Reiciendis soluta molestias officia, accusamus cum et quia 
      maiores accusantium distinctio sunt mollitia doloribus placeat
      laboriosam quaerat enim iure ipsa animi ut!
      </p>
    </SwiperSlide>
    <SwiperSlide className='slidee'>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Reiciendis soluta molestias officia, accusamus cum et quia 
      maiores accusantium distinctio sunt mollitia doloribus placeat
      laboriosam quaerat enim iure ipsa animi ut!
      </p>
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider