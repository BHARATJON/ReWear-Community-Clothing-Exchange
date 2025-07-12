import clothModel from "../models/clothModel.js";
import orderModel from "../models/orderModel.js";
import soldClothModel from "../models/soldClothModel.js";


// already exists
const uploadCloth = async (req, res) => {
    try {
        const { type, description, category, size, image } = req.body;
        const userId = req.userId; // From middleware

        if (!type || !description || !category || !size || !image) {
            return res.json({ success: false, message: "Missing cloth data" });
        }

        const cloth = new clothModel({
            type,
            description,
            category,
            size,
            image,
            userId
        });

        await cloth.save();
        res.json({ success: true, message: "Cloth uploaded successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
// get clothes available to buy (not your own & not sold)
const getMarketplace = async (req, res) => {
    try {
        const clothes = await clothModel.find({
            userId: { $ne: req.userId },
            isSold: false
        });
        res.json({ success: true, clothes });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// buy cloth
const buyCloth = async (req, res) => {
    try {
        const { clothId } = req.body;

        const cloth = await clothModel.findById(clothId);
        if (!cloth) return res.json({ success: false, message: "Cloth not found" });

        if (cloth.isSold) return res.json({ success: false, message: "Cloth already sold" });

        if (String(cloth.userId) === req.userId) {
            return res.json({ success: false, message: "Cannot buy your own item" });
        }

        // mark as sold
        cloth.isSold = true;
        cloth.buyerId = req.userId;
        await cloth.save();

        // create order
        const order = new orderModel({
            clothId,
            buyerId: req.userId,
            sellerId: cloth.userId
        });

        await order.save();

        res.json({ success: true, message: "Purchase successful" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// get buyer orders
const getMyOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ buyerId: req.userId }).populate("clothId");
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const getAllAvailableClothes = async (req, res) => {
    try {
        const clothes = await clothModel.find({ isSold: false }).populate("userId", "name email");
        res.json({ success: true, clothes });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const soldCloth = new soldClothModel({
    type: cloth.type,
    description: cloth.description,
    category: cloth.category,
    size: cloth.size,
    image: cloth.image,
    price: cloth.price,
    sellerId: cloth.userId,
    buyerId: req.userId
});

const getAllSoldClothes = async (req, res) => {
    try {
        const sold = await soldClothModel.find()
            .populate("sellerId", "name email")
            .populate("buyerId", "name email");

        res.json({ success: true, sold });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


export { uploadCloth, getMarketplace, buyCloth, getMyOrders, getAllAvailableClothes, soldCloth , getAllSoldClothes };
