import mainPic from '../images/фон_main.png'
import ProductSlider from './ProductSlider';

const MainSection = () => {
    return ( 
        <div className="main__wrapper">
            <section className="main__section">
                <img className="main__pic" src={mainPic}/>
                <ProductSlider/>
            </section>
        </div>
     );
}
 
export default MainSection;