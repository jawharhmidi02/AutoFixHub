const Account = require('../models/Account');

const getAllAccounts = async(req, res)=>{
    const { page = 1, limit = 100000} = req.query;
    try{
        const accounts = await Account.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Account.count();

        res.status(200)
            .json({
                accounts,
                totalPages : Math.ceil(count / limit),
                currentPage : page
            });
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const createAccount = async(req, res)=>{
    try{
        const account = await Account.create(req.body);
        res.status(200).json({account});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const getAccount = async(req, res)=>{
    try{
        const {email: emailAccount} = req.params;
        const account = await Account.findOne({email : emailAccount});
        if(!account){
            return res.status(404).json({msg : `No account with email : ${emailAccount}`});
        }
        res.status(201).json({account});
    }catch(error){
        res.status(500).json({msg : error});
    }
};


const updateAccount = async(req, res)=>{
    try{
        const {email: emailAccount} = req.params;
        const account = await Account.findOneAndUpdate({email: emailAccount}, req.body, {
            new : true,
            runValidators: true
        });

        if(!account){
            return res.status(404).json({msg : `No account with email : ${emailAccount}`});
        }
        res.status(200).json({account});
    }catch(error){
        res.status(500).json({msg : error});
    }
};


const deleteAccount = async(req, res)=>{
    try{
        const {email: emailAccount} = req.params;
        const account = await Account.findOneAndDelete({email: emailAccount});
        if(!account){
            return res.status(404).json({msg : `No account with email : ${emailAccount}`});
        }
        res.status(200).json({account : null, status : 'Success'});
    }catch(error){
        res.status(500).json({msg : error});
    }
};



module.exports = {
    getAllAccounts,
    createAccount,
    getAccount,
    updateAccount,
    deleteAccount
};