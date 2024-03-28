let expenseName = document.getElementById("expenseName");
let expenseDate = document.getElementById("expenseDate");
let expenseAmount = document.getElementById("expenseAmount");
let addExpenseBtn = document.getElementById("addExpense");
let expenseRecord = document.getElementById("expenseRecord");

addExpenseBtn.addEventListener('click', () => {
    let expense = expenseName.value;
    let date = expenseDate.value;
    let amount = expenseAmount.value;
    let newExpense = `
    <tr>
        <td>${date}</td>
        <td>${expense}</td>
        <td>$${amount}</td>
    </tr>`

    expenseRecord.innerHTML += newExpense;
})