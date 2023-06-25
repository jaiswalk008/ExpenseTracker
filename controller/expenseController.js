const Expense = require('../model/expenseModel');

exports.getExpenses = async (req,res) =>{
    try{
        const expenseDetails = await Expense.findAll()
        res.json(expenseDetails);
    }
    catch(err){console.log(err)};
}

exports.postAddExpense = async (req,res)=>{
    try{
        const expenseDetails = await Expense.create({...req.body});
        res.json(expenseDetails);
    }
    catch(err){console.log(err)};
}

exports.getEditExpense = async (req,res)=>{
    const expenseId = req.params.id;
    try{
        const expense = await Expense.findByPk(expenseId);
        res.json(expense);
    }
    catch(err){console.log(err);}
}
exports.deleteExpense = async (req,res) =>{
    const expenseId = req.params.id;
    try{
        const expense = await Expense.findByPk(expenseId);
        await expense.destroy();
        res.sendStatus(200);
    }
    catch(err){console.log(err);}
}