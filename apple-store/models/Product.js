import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['iphone', 'laptop', 'music'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)