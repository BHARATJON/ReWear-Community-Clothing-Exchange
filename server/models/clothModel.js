import mongoose from "mongoose";

const clothSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },  // seller
    isSold: { type: Boolean, default: false },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null }   // buyer
}, { timestamps: true });

const clothModel = mongoose.models.cloth || mongoose.model("cloth", clothSchema);

export default clothModel;
