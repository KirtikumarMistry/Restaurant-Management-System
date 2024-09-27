const express=require('express');
const router = express.Router();

const Home=require('../controllers/Home');
const Shop=require('../controllers/Shop');
const Blog =require('../controllers/Blog');
const FoodMenu=require('../controllers/Food-Menu');

router.get('/', Home);
router.get('/Home', Home);
router.get('/Shop', Shop);
router.get('/Blog', Blog);
router.get('/FoodMenu', FoodMenu);


module.exports = router;