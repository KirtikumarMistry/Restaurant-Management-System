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
router.get('/Food-Menu', FoodMenu);
router.get('/Login', (req, res) => {
    res.render('Login');
})

module.exports = router;