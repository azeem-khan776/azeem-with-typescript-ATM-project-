#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "Input",
        name: "userID",
        message: "Enter User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your pin "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Cash Withdraw", " Balance Inquiry"],
        message: "select your tarsaction"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount you want to withdrow",
        when(userInput) {
            return userInput.transactionType === "cash withdraw";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        message: "select amount you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash";
        }
    }
]);
// making variables of user input data
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "Balance inquiry") {
    const userBalance = Math.floor(Math.random() * 10000);
    console.log(`Your current balance is Rs is Rs ${userBalance}\n`);
}
else if (userID && userPin) {
    const userBalance2 = Math.floor(Math.random() * 10000);
    if (userBalance2 > enteredAmount) {
        console.log(`Your account has been dedited wit Rs ${enteredAmount}and your remaining blance is  ${userBalance2 -
            enteredAmount}`);
    }
    else {
        console.log(`\n Unsufficient Balance`);
    }
}
