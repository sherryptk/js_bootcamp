const account = {
    name: 'Sherry',
    expenses: [],
    income: [],
    addIncome: function(description, amount){
        this.income.push({description: description, amount: amount})
    },
    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        
        this.expenses.forEach(function (expense) {
             totalExpenses += expense.amount
        })

        this.income.forEach(function (income){
            totalIncome += income.amount
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense("rent", 1350)
account.addExpense("student loan", 144)
account.addIncome("work", 4096)
account.addIncome("mom", 300)
console.log(account.getAccountSummary())
// console.log(account)