const express = require('express');
const router = express.Router();

const Home = require('../controllers/Home');
const Shop = require('../controllers/Shop');
const Blog = require('../controllers/Blog');
const FoodMenu = require('../controllers/Food-Menu');
const Chef = require('../controllers/Chef');
const AboutUs = require('../controllers/AboutUs');
const ChefDeatils = require('../controllers/ChefDetails');
const FoodGallery = require('../controllers/FoodGallery');
const AddItem = require('../controllers/AddItem');
const GetItem = require('../controllers/GetItem');
const { collection } = require("../models/db");
const signup = require('../controllers/Signup');
const  orderplaced=require('../controllers/Orderplaced')
const ordercompleted=require('../controllers/Ordercompleted')
const Login=require('../controllers/Login')



router.get('/', Home);
router.get('/Home', Home);
router.get('/Shop', Shop);
router.get('/Blog', Blog);
router.get('/Food-Menu', FoodMenu);
router.get('/Chef', Chef);
router.get('/AboutUs', AboutUs);
router.get('/ChefDetails', ChefDeatils);
router.get('/FoodGallery', FoodGallery);
router.post('/AddItem', AddItem);
router.get('/Food-Menu/GetItem', GetItem);
router.get('/admin', async (req, res) => {
    try {
        const tables = await findTables(); // Fetch tables
        const items = await findItems();   // Fetch items
        res.render('admin', { tables, items }); // Render the admin page with fetched data
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.get("/Login", (req, res) => {
    res.render('login', { 
        email: '', 
        forgetPassword: false, 
        showerrorinemail: false, 
        showerrorinpass: false
    });
});

router.post("/Login",Login);

router.get('/signup', (req, res) => {
    res.render('signup', {
        userdata: { name: '', email: '', password: '', confirmpassword: '', contactNumber: '' },
        data: { success: false, message: '' }
    });
});

router.post("/signup", signup);
router.get("/manager", (req, res) => {
    const data = []
    res.render("manager", { data });
});

router.post("/orderplaced", orderplaced);
router.post("/ordercompleted", ordercompleted); 

module.exports = router;
