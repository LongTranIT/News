const express=require('express');
const router=express.Router();

const newsController=require('../app/controllers/NewsController.js');

router.get('/home',newsController.showHome);
router.get('/search',newsController.search);
router.get('/contact',newsController.contact);
router.get('/:catelogy/:slug',newsController.showDetail);
router.get('/:catelogy',newsController.showCatelogy);

module.exports=router;