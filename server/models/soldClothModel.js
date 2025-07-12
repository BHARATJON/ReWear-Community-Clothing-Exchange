import mongoose from "mongoose";

const soldClothSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    soldAt: { type: Date, default: Date.now }
});

const soldClothModel = mongoose.models.soldcloth || mongoose.model("soldcloth", soldClothSchema);

export default soldClothModel;
