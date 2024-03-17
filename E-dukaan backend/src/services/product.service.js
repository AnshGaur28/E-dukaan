const { set } = require("y");
const { Categories } = require("../models/category.model");
const { Product } = require("../models/products.model");

const createProduct = async(productData)=>{
    console.log('createProduct');
    let topLevel = await Categories.findOne({name:productData.topLavelCategory});
    if(!topLevel){
        topLevel = new Categories({name : productData.topLavelCategory , level:1});
        await topLevel.save();
    }
    console.log(topLevel);
    let secondLevel = await Categories.findOne({name : productData.secondLavelCategory , parentCategory : topLevel._id});
    if(!secondLevel){
        secondLevel = new Categories({name : productData.secondLavelCategory , parentCategory : topLevel._id , level:2});
        await secondLevel.save();
    }
    console.log(secondLevel);
    let thirdLevel = await  Categories.findOne({name : productData.thirdLavelCategory , parentCategory:secondLevel._id});
    if(!thirdLevel){
        thirdLevel = new Categories({name : productData.thirdLavelCategory , parentCategory : secondLevel._id , level:3});
        await thirdLevel.save();
    }
    console.log(thirdLevel);
    const product = new Product({
        title : productData.title ,
        description : productData.description ,
        price : productData.price ,
        discountedPrice : productData.discountedPrice ,
        discountPercent : productData.discountPersent ,
        quantity : productData.quantity ,
        brand : productData.brand ,
        category : thirdLevel._id ,
        imageUrl : productData.imageUrl ,
        sizes : productData.size ,
        color : productData.color ,
    });
    return await product.save();
}
const deleteProductbyId =  async(productId)=>{
    const product = await findProductById(productId);
    await Product.findByIdAndDelete(product._id);
    return "Product deleted successfully";
}

async function updateProduct(productId , reqData){
    const updateProduct = await Product.findByIdAndUpdate(productId, reqData);
    return updateProduct ;
}

async function findProductById(productId){
    const product = await Product.findById(productId).populate("category").exec();
    console.log("product" , product);
    if(!product){
        throw new Error({error : "Product not found with ID" , productId});
    }
    return product ;
}

async function getAllProducts(reqQuery) {
    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;
    pageSize = pageSize || 10;

    try {
        let query = Product.find().populate("category");

        if (category) {
            let existCategory = await Categories.findOne({ name: category });
            if (existCategory) {
                query = query.where("category").equals(existCategory._id);
            } else {
                return { content: [], pageNumber: 1, totalPages: 0 };
            }
        }

        if (color) {
            let colorSet = new Set(color.split(" ").map(color => color.trim().toLowerCase()));
            let colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
            query = query.where("color").regex(colorRegex);
        }

        if (sizes) {
            let sizeSet = new Set(sizes);
            query = query.where("size.name").in([...sizeSet]);
        }

        if (minPrice) {
            query = query.where("discountedPrice").gte(minPrice);
        }

        if (maxPrice) {
            query = query.where("discountedPrice").lte(maxPrice);
        }

        if (minDiscount) {
            // console.log(minDiscount);
            query = query.where("discountPercent").gte(minDiscount);
        }

        if (stock) {
            if (stock == 'in_stock') {
                query = query.where("quantity").gt(0);
            } else if (stock == 'out_stock') {
                query = query.where("quantity").lt(1);
            }
        }
        if (sort) {
            // console.log(sort);
            let sortDirection = sort == "price_high" ? -1 : 1;
            // console.log(sortDirection)
            query = query.sort({ discountedPrice: sortDirection });
        }

        let totalProducts = await Product.countDocuments(query);
        let skip = Math.max((pageNumber - 1) * pageSize, 0);
        let products = await query.skip(skip).limit(pageSize).exec();
        console.log(products);
        // console.log("working")
        let totalPages = Math.ceil(totalProducts / pageSize);

        return { content: products, currentPage: pageNumber, totalPages };
    } catch (error) {
        throw new Error(error.message);
    }
}


async function createMultipleProducts(products){
    try{
        for(let product of products){
            await createProduct(product);
        }
    }
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {createMultipleProducts , getAllProducts , deleteProductbyId , updateProduct , createProduct , findProductById}
