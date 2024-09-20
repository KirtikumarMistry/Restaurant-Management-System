const express=require('express');
const router = express.Router();

const AddItem = require('../controllers/AddItem');
const GetItem = require('../controllers/GetItems');
const AddTable = require('../controllers/AddTable');
const GetTable = require('../controllers/GetTables');
const AddOrder = require('../controllers/AddOrder');
const GetOrders = require('../controllers/GetOrders');


router.get('/login', (req, res) => {
    const user= "admin" ;
    res.status(201).json({
        status: true,
        identity: "manager"
    })
});
router.post('/additem', AddItem);
router.get('/getitems', GetItem);
router.post('/addtable', AddTable);
router.get('/gettables', GetTable);
router.post('/addorder', AddOrder);
router.get('/getorders', GetOrders);

module.exports = router;