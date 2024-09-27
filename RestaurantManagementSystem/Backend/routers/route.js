const express=require('express');
const router = express.Router();

router.post('/', (res, req) => {
    res.render('food-menu-3');
})

module.exports = router;