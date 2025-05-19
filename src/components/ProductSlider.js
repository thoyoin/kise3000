import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const ProductSlider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from('products')
                .select('*');

            if (error) {
                console.error('Ошибка загрузки продуктов:', error);
            } else {
                setProducts(data);
            }
        }

        fetchProducts();
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
                if (!product || !product.image_url) return null;
                const imageUrl = product.image_url;
                return (
                    <SwiperSlide key={product.id}>
                    <div className="product-slide">
                        <img
                            src={imageUrl}
                            alt={product.title}
                            className="product-image"
                        />
                        <div className="product-title">{product.title}</div>
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