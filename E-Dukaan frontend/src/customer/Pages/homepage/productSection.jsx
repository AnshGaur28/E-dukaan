import {products} from '../../assets/homepagedata';
import ProductCard from '../../components/homeSectionCard';
const  FavouriteProducts = ()=> {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-18 lg:max-w-8xl lg:px-8">
        <div className=' flex justify-start text-secondary mb-5 p-2 text-3xl'>Hot deals</div>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
    )
};
export default FavouriteProducts ;