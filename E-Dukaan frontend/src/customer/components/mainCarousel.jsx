import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCarouselData} from '../assets/homepagedata' ;
import { useNavigate } from 'react-router-dom';
const  MainCarousel = ()=> {
const navigate = useNavigate();
    const items = MainCarouselData.map((item)=><img src={item.image} onClick={()=>navigate(`/${item.path}`)} key={item.key} className='cursor-pointer '  role='presentation'/>);
    return(
    <div className='w-full flex items-center justify-center'>
    <AliceCarousel
        autoPlay
        // autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}

    
    />
    </div>
    )

}

export default MainCarousel;