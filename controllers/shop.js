const Shop = require('../models/Shop');



const getAllShops = async(req, res)=>{
    const { page = 1, limit = 6} = req.query;
    try{
        const shops = await Shop.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Shop.count();

        res.status(200)
            .json({
                shops,
                totalPages : Math.ceil(count / limit),
                currentPage : page
            });
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const createShop = async(req, res)=>{
    try{
        const shops = await Shop.create(req.body);
        res.status(200).json({shops});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const getShop = async(req, res)=>{
    try{
        const {email: emailShop} = req.params;
        const shop = await Shop.findOne({email : emailShop});
        if(!shop){
            return res.status(404).json({msg : `No shop with email : ${emailShop}`});
        }
        res.status(201).json({shop});
    }catch(error){
        res.status(500).json({msg : error});
    }
};


const updateShop = async(req, res)=>{
    try{
        const {email: emailShop} = req.params;
        const shop = await Shop.findOneAndUpdate({email: emailShop}, req.body , {
            new : true,
            runValidators: true
        });
        console.log("BODY : ", req.body);
        console.log("SHOP : ", shop);
        if(!shop){
            return res.status(404).json({msg : `No shop with email : ${emailShop}`});
        }
        res.status(200).json({shop});
    }catch(error){
        res.status(500).json({msg : error});
    }
};


const deleteShop = async(req, res)=>{
    try{
        const {email: emailShop} = req.params;
        const shop = await Shop.findOneAndDelete({email: emailShop});
        if(!shop){
            return res.status(404).json({msg : `No shop with email : ${emailShop}`});
        }
        res.status(200).json({shop : null, status : 'Success'});
    }catch(error){
        res.status(500).json({msg : error});
    }
};



module.exports = {
    getAllShops,
    createShop,
    getShop,
    updateShop,
    deleteShop
}