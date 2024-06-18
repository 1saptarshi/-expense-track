document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('add-expense-form');
    const customCategoryDiv = document.getElementById('custom-category-div');
    const categorySelect = document.getElementById('category');

    // Show custom category input if 'Custom' is selected
    categorySelect.addEventListener('change', () => {
        if (categorySelect.value === 'Custom') {
            customCategoryDiv.style.display = 'block';
        } else {
            customCategoryDiv.style.display = 'none';
        }
    });

    // Add a new expense on  submit form 
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
        const category = categorySelect.value === 'Custom' ? document.getElementById('custom-category').value : categorySelect.value;
        const description = document.getElementById('description').value;

        const expense = { amount, date, category, description };
        addExpense(expense);
        expenseForm.reset();
        customCategoryDiv.style.display = 'none';
        updateUI();
    });

    updateUI();
});

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Add a new expense to the list and save to localStorage
function addExpense(expense) {
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateUI();
}

// Delete an expense from the list and update localStorage
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateUI();
}

// Edit an existing expense in the list and update localStorage
function editExpense(index, updatedExpense) {
    expenses[index] = updatedExpense;
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateUI();
}

// Update the UI with the latest expense data and redraw the chart
function updateUI() {
    const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    document.getElementById('total-expenses').textContent = ` ₹${totalExpenses.toFixed(2)}`;
    const initialBudget = 1000; // Example initial budget
    document.getElementById('remaining-budget').textContent = ` ₹${(initialBudget - totalExpenses).toFixed(2)}`;

    const ctx = document.getElementById('expenseChart').getContext('2d');
    const categories = [...new Set(expenses.map(expense => expense.category))];
    const categoryTotals = categories.map(category => {
        return expenses.filter(expense => expense.category === category)
                       .reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    });

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                label: 'Expenses',
                data: categoryTotals,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            }]
        },
        options: {
            responsive: true
        }
    });

    // Render the expense list with edit and delete buttons
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'bg-white p-4 rounded shadow-md mb-2';
        expenseItem.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <div class="font-bold">${expense.description}</div>
                    <div>${expense.category} -  ₹${expense.amount} on ${expense.date}</div>
                </div>
                <div>
                    <button class="bg-yellow-500 text-white p-1 rounded mr-2" onclick="showEditForm(${index})">Edit</button>
                    <button class="bg-red-500 text-white p-1 rounded" onclick="deleteExpense(${index})">Delete</button>
                </div>
            </div>
        `;
        expenseList.appendChild(expenseItem);
    });
}

// Show the edit form with existing expense data
function showEditForm(index) {
    const expense = expenses[index];
    document.getElementById('amount').value = expense.amount;
    document.getElementById('date').value = expense.date;
    document.getElementById('category').value = expense.category;
    document.getElementById('description').value = expense.description;
    const expenseForm = document.getElementById('add-expense-form');
    const customCategoryDiv = document.getElementById('custom-category-div');
    
    if (expense.category === 'Custom') {
        customCategoryDiv.style.display = 'block';
        document.getElementById('custom-category').value = expense.category;
    } else {
        customCategoryDiv.style.display = 'none';
    }

    // Update the form submission to edit the expense
    expenseForm.onsubmit = (e) => {
        e.preventDefault();
        const updatedExpense = {
            amount: document.getElementById('amount').value,
            date: document.getElementById('date').value,
            category: document.getElementById('category').value === 'Custom' ? document.getElementById('custom-category').value : document.getElementById('category').value,
            description: document.getElementById('description').value,
        };
        editExpense(index, updatedExpense);
        expenseForm.onsubmit = null; // Reset to default behavior
        expenseForm.reset();
        customCategoryDiv.style.display = 'none';
    };
}
