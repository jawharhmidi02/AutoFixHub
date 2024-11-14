const Article = require('../models/Article')



const getAllArticles = async(req, res) =>{
    const {page = 1, limit = 999999} = req.query;
    try{
        const articles = await Article.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Article.count();

        res.status(200)
            .json({
                articles,
                totalPages : Math.ceil(count / limit),
                currentPage : page
            });
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const createArticle = async(req, res) =>{
    try{
        const article = await Article.create(req.body);
        res.status(200).json({article});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const getChiefArticles = async(req, res) =>{
    try{
        const {email : emailArticle} = req.params;
        const articles = await Article.find({email : emailArticle});
        if(!articles){
            return res.status(404).json({msg: `No articles with email : ${emailAccount}`});
        }
        res.status(201).json({articles});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const getArticle = async(req, res) =>{
    try{
        const {id : ID} = req.params;
        const article = await Article.findOne({_id : ID});
        if(!article){
            return res.status(404).json({msg : `No article with ID : ${ID}`});
        }
        res.status(201).json({article});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const updateArticle = async(req, res) =>{
    try{
        const {id : ID} = req.params;
        const article = await Article.findOneAndUpdate({_id : ID}, req.body, {
            new : true,
            runValidators: true
        });
        if(!article){
            return res.status(404).json({msg: `No article with ID : ${ID}`});
        }
        res.status(200).json({article});
    }catch(error){
        res.status(500).json({msg : error});
    }
};

const deleteArticle = async(req, res) =>{
    try{
        const {id : ID} = req.params;
        const article = await Article.findOneAndDelete({_id : ID});
        if(!article){
            return res.status(404).json({msg : `No article with ID : ${ID}`});
        }
        res.status(200).json({article : null, status : 'Success'});
    }catch(error){
        res.status(500).json({msg : error});
    }
};


module.exports = {
    getAllArticles,
    createArticle,
    getArticle,
    getChiefArticles,
    updateArticle,
    deleteArticle
};