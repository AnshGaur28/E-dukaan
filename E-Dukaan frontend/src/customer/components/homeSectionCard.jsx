export default function HomeSectionCard(product){

    return (

    <a key={product.id} href={product.product.href} className="group">
    <div className="rounded-lg bg-gray-100 mx-3 border-gray-200 border-2">
        <img
        src={product.product.imageSrc}
        alt={product.product.imageAlt}
        className="h-[320px] w-full object-cover object-center group-hover:opacity-75 p-3 "
        />
    </div>
    <h3 className="mt-4 flex text-center justify-center align-center text-sm text-gray-700">{product.product.name}</h3>
    <p className="mt-1 flex justify-center align-center text-lg font-medium text-gray-900">{product.product.price}</p>
    </a>
    )
}