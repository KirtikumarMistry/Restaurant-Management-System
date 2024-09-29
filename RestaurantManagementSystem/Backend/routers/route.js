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
// const ordercompleted=require('../controllers/Ordercompleted')
const Login=require('../controllers/Login')
const Admin=require('../controllers/GetAdmin')
const ManagerTable=require('../controllers/ManagerTable');
const AddTable=require('../controllers/AddTable');
const GetTable=require('../controllers/GetTable');
const DeleteTable=require('../controllers/DeleteTable')
const UpdatedTable=require('../controllers/UpdateTable')
const DeleteItem=require('../controllers/DeleteItem');
const UpdateItem = require('../controllers/UpdateItem');
const AddOrder=require('../controllers/AddOrder');
const Contact=require('../controllers/Contact');
const ShowItems=require('../controllers/ShowItems');
const GetOrder=require('../controllers/GetOrder');

router.get('/', Home);
router.get('/Home', Home);
router.get('/Shop', Shop);
router.get('/Blog', Blog);
router.get('/Food-Menu', FoodMenu);
router.get('/Chef', Chef);
router.get('/AboutUs', AboutUs);
router.get('/ChefDetails', ChefDeatils);
router.get('/FoodGallery', FoodGallery);
router.post('/admin/AddItem', AddItem);
router.get('/Food-Menu/GetItem', GetItem);
router.get('/ManagerTable', ManagerTable);
router.post('/admin/AddTable', AddTable);
router.get('/GetTable', GetTable);
router.delete('/admin/tables/:id',DeleteTable)
router.get('/admin',Admin);
router.put('/admin/tables/:tableId',UpdatedTable)
router.delete('/admin/items/:itemId',DeleteItem)
router.put('/admin/items/:itemId',UpdateItem)
router.post('/AddOrder', AddOrder);
router.get('/Contact', Contact);
router.get(/^\/ShowItems(.+)/, ShowItems);
router.get('/GetOrder/:Number', GetOrder);

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
// router.post("/ordercompleted", ordercompleted); 

module.exports = router;
