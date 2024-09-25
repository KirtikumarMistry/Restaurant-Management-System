const express=require('express');
const router = express.Router();

const AddItem = require('../controllers/AddItem');
const GetItem = require('../controllers/GetItems');
const AddTable = require('../controllers/AddTable');
const GetTable = require('../controllers/GetTables');
const AddOrder = require('../controllers/AddOrder');
const GetOrders = require('../controllers/GetOrders');
const signup=require('../controllers/Signup')
const Login=require('../controllers/Login')
 const AdminData=require('../controllers/AdminData')

router.post('/Signup',signup)
router.get('/AdminData',AdminData)
router.post('/Login',Login)
router.post('/additem', AddItem);
router.get('/getitems', GetItem);
router.post('/addtable', AddTable);
router.get('/gettables', GetTable);
router.post('/addorder', AddOrder);
router.get('/getorders', GetOrders);

module.exports = router;