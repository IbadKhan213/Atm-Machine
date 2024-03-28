#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 21307;

const answerPin = await inquirer.prompt([
    {
        type:"number",
        name:"pin",
        message:"Enter your pin number"
    }
])

if(answerPin.pin === myPin){
    console.log("Correct pin code");

    const operatorAns = await inquirer.prompt([
        {
            type:"list",
            name:"operator",
            message:"What want to do ? ",
            choices:["Withdraw","CheckBalance","FastCash"]
        }
    ])

    if(operatorAns.operator === "Withdraw"){

        const amountAns = await inquirer.prompt([
            {
                type:"number",
                name:"amount",
                message:"Enter your amount"
            }
        ])

        console.log(`Your remaing balance is ${myBalance - amountAns.amount}`);
        
    } else if(operatorAns.operator === "CheckBalance"){
        console.log(`Your balance is ${myBalance}`);
    } else if(operatorAns.operator === "FastCash"){
        
        const fastAns = await inquirer.prompt([
            {
                type:"list",
                name:"fastOperator",
                message:"How many amount woud you like to withdraw ? ",
                choices:["1000","2000","5000"]
            }
        ])

        if(fastAns.fastOperator === "1000"){
            console.log(`Your remaing balance is ${myBalance - fastAns.fastOperator}`);

        } else if(fastAns.fastOperator === "2000"){
            console.log(`Your remaing balance is ${myBalance - fastAns.fastOperator}`);

        } else if(fastAns.fastOperator === "5000"){
            console.log(`Your remaing balance is ${myBalance - fastAns.fastOperator}`);

        } else {
            console.log("Please select valid option");
            
        }

    } else{
        console.log("Please select valid option");
    }

} else{
    console.log("Incorrect pin code");
}
