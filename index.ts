#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter frist number", type: "number", name: "firstnumber" },
  { messege: "enter second number", type: "number", name: "secondnumber" },
  {
    messege: "choice from the operator below",
    type: "list",
    name: "operator",
    choices: ["adition", "subtraction", "multiplication", "subtraction"],
  },
]);
console.log(answer)


if (answer.operator === "adition"){
    console.log(answer.firstnumber + answer.secondnumber)
} else if (answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}else if (answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}else if (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
};