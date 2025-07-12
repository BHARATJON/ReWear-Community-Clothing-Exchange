import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    clothId: { type: mongoose.Schema.Types.ObjectId, ref: 'cloth', required: true },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    createdAt: { type: Date, default: Date.now }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
