const express=require('express');
const router = express.Router();

const Home=require('../controllers/Home');
const Shop=require('../controllers/Shop');
const Blog =require('../controllers/Blog');
const FoodMenu=require('../controllers/Food-Menu');
const Chef=require('../controllers/Chef');
const AboutUs=require('../controllers/AboutUs');
const ChefDeatils = require('../controllers/ChefDetails');
const FoodGallery=require('../controllers/FoodGallery');
const AddItem=require('../controllers/AddItem');
const GetItem=require('../controllers/GetItem');

router.get('/', Home);
router.get('/Home', Home);
router.get('/Shop', Shop);
router.get('/Blog', Blog);
router.get('/Food-Menu', FoodMenu);
router.get('/Login', (req, res) => {
    res.render('Login');
});
router.get('/Chef', Chef);
router.get('/AboutUs', AboutUs);
router.get('/ChefDetails', ChefDeatils);
router.get('/FoodGallery', FoodGallery);
router.post('/AddItem', AddItem);
router.get('/Food-Menu/GetItem', GetItem);

module.exports = router;