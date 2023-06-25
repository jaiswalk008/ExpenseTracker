const expenseController = require('../controller/expenseController');

const express = require('express');

const router = express.Router();

//controller for getting expense details
router.get('/',expenseController.getExpenses);

//controller for adding expense details
router.post('/',expenseController.postAddExpense);

//controller for editing expense details
router.get('/editExpense/:id',expenseController.getEditExpense);

//controller for deleting expense details
router.delete('/deleteExpense/:id',expenseController.deleteExpense);

module.exports = router;