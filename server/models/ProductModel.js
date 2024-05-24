import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String, 
        required: true
    },
    authorId: {
        type: String, 
        required: true
    }
}, {timestamps: true});

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;