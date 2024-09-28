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
const ManagerTable=require('../controllers/ManagerTable');
const AddTable=require('../controllers/AddTable');
const GetTable=require('../controllers/GetTable');

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
router.get('/ManagerTable', ManagerTable);
router.post('/AddTable', AddTable);
router.get('/GetTable', GetTable);

module.exports = router;