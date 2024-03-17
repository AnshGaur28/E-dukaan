export default function CategoryCard(product){

    return (

    <a key={product.id} href={product.product.href} className="group">
    <div className="rounded-lg bg-gray-100 mx-3 border-gray-200 border-2 items-center">
        <img
        src={product.product.imageUrl}
        alt={product.product.imageAlt}
        className=" flex flex-col w-full h-[300px] object-cover object-top  justify-start group-hover:opacity-75 p-3 "
        />
        <h3 className="bold text-xl mx-2 mt-4  text-start justify-start  text-gray-700">{product.product.brand}</h3>
        <p className="mx-2 mt-2 text-sm text-gray-500">{product.product.description}</p>
        <p className="mx-2 my-1 flex justify-end align-center text-lg font-medium text-gray-900">${product.product.price}</p>

    </div>
    </a>
    )
}