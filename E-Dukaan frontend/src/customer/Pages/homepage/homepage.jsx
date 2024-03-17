import React from 'react';
import MainCarousel from '../homepage/../../components/mainCarousel';
import HomeSectionCarousel from '../../components/homesectioncarousel';
import CategoryCarousel from './categoryCarousel';
import { mens_kurta } from '../../assets/mensKurta';
import { womens_dress } from '../../assets/womensdress';
import FavouriteProducts from './productSection';
export default function HomePage() {
    return (
        <div>
            <MainCarousel/> 
            <HomeSectionCarousel/>
            <FavouriteProducts/>
            <CategoryCarousel category={"Men's Kurtas"} dt={mens_kurta}/>  
            <CategoryCarousel category={"Women's Dress"} dt={womens_dress}/>
        </div>
    )
}