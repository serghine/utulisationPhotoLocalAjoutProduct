const express=require('express');
const {Router}=require('express');
const controllerProduct=require('../controller/controllerProduct');
const mkdirp=require('mkdirp');
const fs=require('fs-extra');
const resizeImg=require('resize-img');


const router=express.Router();

router.get('/product',controllerProduct.getProduct);
router.post("/ajouterProduit",controllerProduct.postProduct);

module.exports = router;