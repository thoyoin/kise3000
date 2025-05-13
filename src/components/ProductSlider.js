import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const ProductSlider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://committed-nurture-5f052329ed.strapiapp.com/api/products?populate=*')
          .then(res => res.json())
          .then(data => {setProducts(data.data);})
          .catch(err => console.error('Ошибка загрузки продуктов:', err));
    }, []);

    return (
        <div className='product-slider'>
            <Swiper
                navigation
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                speed={800}
            >
            {products.map((product) => {
                if (!product || !product.Image || product.Image.length === 0) return null;
                const imageUrl = product.Image[0].url;

                return (
                    <SwiperSlide key={product.id}>
                    <div className="product-slide">
                        <img
                            src={`http://localhost:1337${imageUrl}`}
                            alt={product.Title}
                            className="product-image"
                        />
                        <div className="product-title">{product.Title}</div>
                    </div>
                    </SwiperSlide>
                );
            })}
            <a href='https://t.me/drainmp3' target='blank'><button className="main__btn" >ОФОРМИТЬ ЗАКАЗ</button></a>
            </Swiper>
            </div>
          );
        };


export default ProductSlider