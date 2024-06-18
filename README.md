# -expense-track



```markdown
# Expense Tracker

A simple and intuitive web application to track expenses and manage a budget. Built with Tailwind CSS, JavaScript, and Chart.js for visualization.

## Features

- **Add, Edit, and Delete Expense Entries**
  - Add Expense: Input new expenses with details such as amount, date, category, and description.
  - Edit Expense: Modify existing expense entries to correct mistakes or update information.
  - Delete Expense: Remove expenses that are no longer relevant to maintain accurate records.
  
- **Categorize Expenses**
  - Expense Categories: Organize expenses into categories like food, travel, entertainment, etc.
  - Custom Categories: Create custom categories tailored to specific needs for accurate tracking.
  
- **Display a Summary of Total Expenses and Remaining Budget**
  - Total Expenses: View the total amount spent over a selected period.
  - Remaining Budget: Monitor the remaining budget based on the initial budget and total expenses.
  - Expense Breakdown: Get a detailed breakdown of expenses by category.
  
- **Visualize Expenses Using Charts**
  - Pie Chart: Visualize the distribution of expenses across different categories.
  - Bar Chart: Display spending trends over time.
  - Line Chart: Track changes in expenses over an extended period.
  - Customization: Customize the date range and categories displayed in the charts.
  
- **Data Storage**
  - Local Storage: Store data in the user’s browser for offline access and quick retrieval.

## Tech Stack

- **Frontend:** HTML, Tailwind CSS
- **Scripting:** JavaScript
- **Visualization:** Chart.js
- **Storage:** Local Storage (browser)

## Getting Started

### Prerequisites

- A modern web browser

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/expense-tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd expense-tracker
   ```

### Usage

1. Open `index.html` in your browser:
   ```sh
   open index.html
   ```

2. Use the form to add new expenses. The expenses will be displayed in the expense list, and the summary and chart will update accordingly.

### Code Structure

- **index.html:** Main HTML file containing the structure of the app.
- **style.css:** Custom styles for the application (if any).
- **script.js:** JavaScript file containing all the logic for adding, editing, deleting expenses, and updating the UI.

### Customization

- You can change the initial budget by modifying the `initialBudget` variable in `script.js`.
- Customize the categories in the form by editing the options in the `select` element in `index.html`.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

Distributed under the MIT License. See `LICENSE` for more information.

### Contact

Project Link: [https://1saptarshi.github.io/expense-track/](https://1saptarshi.github.io/expense-track/)
