import mainPic from '../images/фон_main.png'
import ProductSlider from './ProductSlider';

const MainSection = () => {
    return ( 
        <div className="main__wrapper">
            <section className="main__section">
                {/* <div><b>angel.</b><br/>даст</div> */}
                <img className="main__pic" src={mainPic}/>
                <ProductSlider/>
                {/* <button className="main__btn" >ОФОРМИТЬ ЗАКАЗ</button> */}
            </section>
        </div>
     );
}
 
export default MainSection;