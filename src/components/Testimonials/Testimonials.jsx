import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name:'Ramesh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus accusamus perferendis excepturi non rem vero. Accusamus hic ea reprehenderit corrupti deleniti, inventore vero iusto nesciunt ab excepturi labore eligendi.'
  },
  {
    avatar: AVTR2,
    name:'Shilpa',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus accusamus perferendis excepturi non rem vero. Accusamus hic ea reprehenderit corrupti deleniti, inventore vero iusto nesciunt ab excepturi labore eligendi.'
  },
  {
    avatar: AVTR3,
    name:'Sunil Kumar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus accusamus perferendis excepturi non rem vero. Accusamus hic ea reprehenderit corrupti deleniti, inventore vero iusto nesciunt ab excepturi labore eligendi.'
  },
  {
    avatar: AVTR4,
    name:'Reju Mohan Kumar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus accusamus perferendis excepturi non rem vero. Accusamus hic ea reprehenderit corrupti deleniti, inventore vero iusto nesciunt ab excepturi labore eligendi.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
     <h5>Review from clients</h5>
     <h2>Testimonials</h2>
     < Swiper className="container testimnials__container"
       modules={[ Pagination,]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}      
     >
      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className='testimnials'>
              <div className='client__avatar'>
                <img src={avatar} alt="Avatar One" />
            </div>
             <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                 {review}
            </small>
          </SwiperSlide>
    
          )
        })
      }

    
       
     </ Swiper>
    </section>
  )
}

export default Testimonials