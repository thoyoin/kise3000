import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import longsleeve from '../images/longsleeve.png'
import black_hat from '../images/black_hat.png'
import pink_hat from '../images/pink_hat.png'
import tshirt from '../images/tshirt.png' 

const products = [
    {
        name: `ЛОНГСЛИВ "КИСА3000"`,
        image: longsleeve
    },
    {
        name: 'КЕПКА АНГЕЛЬСКАЯ ЛИГА БЛЭК',
        image: black_hat
    },
    {
        name: 'КЕПКА АНГЕЛЬСКАЯ ЛИГА САКУРА',
        image: pink_hat
    },
    {
        name: 'ФУТБОЛКА ВЕРСИЯ 1',
        image: tshirt
    }
];



const ProductSlider = () => {
    return (
      <div className='product-slider'>
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            speed={1100}
          >
            {products.map((product, index) => (
            <SwiperSlide key={index}>
                <div className="product-slide">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-title">{product.name}</div>
                </div>
            </SwiperSlide>
            ))}
            <a href='#'><button className="main__btn" >ОФОРМИТЬ ЗАКАЗ</button></a>
          </Swiper>
      </div>
    );
  };


export default ProductSlider