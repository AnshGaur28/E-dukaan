import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {callouts} from '../assets/homepagedata' ;
// import { useNavigate } from 'react-router-dom';
import ProductCard from './homeSectionCard';
const responsive = {
    0: { 
        items: 1
    },
    240 : {
        items : 2
    },
    568: { 
        items: 3
    },
    1024: {
        items: 4, 
        itemsFit: 'contain'
    },
};

const  HomeSectionCarousel = ()=> {
// const navigate = useNavigate();
    const items = callouts.map((item)=><ProductCard product={item} key={item.name}/>);
    return(
    <div className='flex px-12   border-gray-200 border-2 my-2 py-1 '>
    <div className='w-full items-center justify-center py-2 my-4  '>
        <div className='flex  items-center justify-start  text-3xl text-secondary my-3 py-2 mx-1'>Top Picks</div>
            
            <AliceCarousel
                autoPlay
                items={items}
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                responsive={responsive}
                disableButtonsControls
                className='flex w-full h-full '
            />
        
    </div>
    </div>
    )

}

export default HomeSectionCarousel ;