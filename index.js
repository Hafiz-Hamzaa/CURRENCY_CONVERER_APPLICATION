#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("<==========> Welcme to my Currency Converter Application <==========>"));
// Define the list of currencies of exchange rates
const currency = {
    USD: 1, // Base Currency
    EUR: 0.92,
    RIY: 3.749,
    GBP: 0.789,
    INR: 83.18,
    PKR: 280
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.bold.magentaBright("Enter from Currency"),
        choices: ["USD", "EUR", "RIY", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.bold.magentaBright("Enter to Currency"),
        choices: ["USD", "EUR", "RIY", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.bold.yellow("Enter your amount :")
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
// Formula for Conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bold.green(`Congratulation!! Your amount is converted : ${convertedAmount.toFixed(2)}`));
