const Dev =  require('../models/Dev');



const getAllDevs = async(req, res)=>{
    const { page = 1, limit = 100000} = req.query;
    try{
        const devs = await Dev.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Dev.count();

        res.status(200)
            .json({
                devs,
                totalPages : Math.ceil(count / limit),
                currentPage : page
            });
    }catch(error){
        res.status(500).json({msg : error});
        // console.log("error");
    }
};

const createDev = async(req, res)=>{
    try{
        const dev = await Dev.create(req.body);
        res.status(200).json({dev});
    }catch(error){
        res.status(500).json({msg: error});
    }
};

const getDev = async(req, res)=>{
    try{
        const {username : USERNAME} = req.params;
        const dev = await Dev.findOne({username : USERNAME});
        if(!dev){
            return res.status(404).json({msg : `No Dev accounts with username : ${USERNAME}`});
        }
        res.status(201).json({dev});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const updateDev = async(req, res)=>{
    try{
        const {username: USERNAME} = req.params;
        const dev = await Dev.findOneAndUpdate({username: USERNAME}, req.body, {
            new : true,
            runValidators: true
        });

        if(!dev){
            return res.status(404).json({msg : `No account with email : ${USERNAME}`});
        }
        res.status(200).json({dev});
    }catch(error){
        res.status(500).json({msg : error});
    }
};


const deleteDev = async(req, res)=>{
    try{
        const {username: USERNAME} = req.params;
        const dev = await Dev.findOneAndDelete({username : USERNAME});
        if(!dev){
            return res.status(404).json({msg : `No account with email : ${USERNAME}`});
        }
        res.status(200).json({dev : null, status : 'Success'});
    }catch(error){
        res.status(500).json({msg : error});
    }
};



module.exports = {
    getAllDevs,
    createDev,
    getDev,
    updateDev,
    deleteDev
};