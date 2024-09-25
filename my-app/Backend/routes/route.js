const express=require('express');
const router = express.Router();

const AddItem = require('../controllers/AddItem');
const AddItemOrdered = require('../controllers/AddItemOrdered');
const GetItem=require('../controllers/GetItem');
const AddTable=require('../controllers/AddTable');
const GetTables=require('../controllers/GetTables');
const GetItemOrdered=require('../controllers/GetItemOrdered');
const AddTotalOrdered=require('../controllers/AddTotalOrdered');
const AddAdminData=require('../controllers/AddAdminData');
const GetAdminData=require('../controllers/GetAdminData');

router.post('/additem', AddItem);
router.post('/additemordered',AddItemOrdered);
router.get('/getitem', GetItem);
router.post('/addtable', AddTable);
router.get('/gettables', GetTables);
router.get('/getitemordered/:number', GetItemOrdered);
router.post('/addtotalordered', AddTotalOrdered);
router.post('/addadmindata', AddAdminData);
router.get('/getadmindata', GetAdminData);

module.exports = router;