const form = document.getElementById('my-form');
form.addEventListener('submit', addExpense);
const list =document.querySelector('.expense-list');
list.addEventListener('click',change);

//function to add list elemenst
function addli(info){
    let newLi = document.createElement('li');
    //delete button
    let deleteBtn = document.createElement('button');

    deleteBtn.textContent='Delete Expense';
    newLi.style.margin='5px';
    deleteBtn.style.marginLeft='5px';
    deleteBtn.className='delete';
    //edit button
    let editBtn = document.createElement('button');
    editBtn.textContent='Edit Expense';
    editBtn.style.marginLeft='5px';
    editBtn.className='edit';
    newLi.appendChild(document.createTextNode(info));
    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);
    return newLi;
}
//function to add expense
function addExpense(e){
    e.preventDefault();
    let expenseDetails = {
        amount: e.target.expense.value,
        description: e.target.description.value,
        category :e.target.category.value
    };

    let info = expenseDetails.amount +' - '+expenseDetails.description+' - '+expenseDetails.category;
    console.log(info);
    list.appendChild(addli(info));

    localStorage.setItem(''+expenseDetails.description,JSON.stringify(info));
    form.reset();
}
if(localStorage.length) show();

//function to show the expense details after page reloads
function show(){
    let keys = Object.keys(localStorage);

    for(let i=0;i<keys.length;i++){
        let expenseDetails = JSON.parse(localStorage.getItem(keys[i]));
        list.appendChild(addli(expenseDetails));
    }
}
function change(e){
    let li = e.target.parentElement;
    let arr = li.childNodes[0].textContent.split(' - ');
    console.log(arr);
    //delete functionality
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete?')){
            list.removeChild(li);
            localStorage.removeItem(arr[1]);
        }
    }
    //edit functionality
    if(e.target.classList.contains('edit')){
        //removing user data to edit
        list.removeChild(li);
        //setting field values
        
        document.getElementById('expense').value=arr[0];
        document.getElementById('description').value=arr[1];
        document.getElementById('category').value=arr[2];
        localStorage.removeItem(arr[1]);

    }
}