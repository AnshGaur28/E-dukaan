import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
// import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/categoryCard';
import { useState } from 'react';
const  CategoryCarousel = ({category , dt})=> {
// const navigate = useNavigate();
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
    const [activeIndex , setActiveIndex] = useState(0);
    const syncActiveIndex = ({item})=>{ setActiveIndex(item);console.log(item)};
    const slideNext  = ()=>{setActiveIndex(activeIndex+2);};
    const slidePrev = ()=>{setActiveIndex(activeIndex-2);}
    const items = dt.map((item)=><CategoryCard product={item} key={item.name}/>);
    return(
    <div className='flex px-12   border-gray-200 border-2 my-2 py-1 '>
    <div className='w-full items-center justify-center py-2 my-4  relative'>
        <div className='flex  items-center justify-start  text-3xl text-secondary my-3 py-2 mx-1 bold'>{category}</div>
            
            <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                className='flex w-full h-full '
                activeIndex = {activeIndex}
                onSlideChange={()=>{syncActiveIndex}}
                keyboardNavigation={true}
                controlsStrategy="responsive"
                mouseTracking
                slideToIndex={activeIndex}
                
            />
            {activeIndex!=items.length-4 && <Button onClick={slideNext} variant='contained' className='z-50 bg-white ' sx={{position:'absolute' , top:"20rem" , right:"0rem" , transform : "translateX(50%) rotate(90deg) " , bgcolor: "white",  }} aria-label="next">
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)" , color:"black"}}/>
            </Button>}

            {activeIndex>0 &&<Button onClick={slidePrev} variant='contained' className='z-50 bg-white' sx={{position:'absolute' , top:"20rem" , left:"0rem" , transform : "translateX(50%) rotate(90deg) " , bgcolor: "white",  }} aria-label="next">
                <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)" , color:"black"}}/>
            </Button>}
            
        
    </div>
    </div>
    )

}

export default CategoryCarousel ;