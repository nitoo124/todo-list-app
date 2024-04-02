#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

//todo array

let Todos : string[] = ['Nitoo kumari', 'Neeta',];

async function create_array(aray:string[]) {


while (true){

    let todo_operation = await inquirer.prompt([
        {
            name : 'selectoperation',
            type : 'list',
            message: 'Please select an operation',
            choices : ['Add', 'Update', 'Read', 'Delete']
        },
        
    ])
   //condition for Add
    if (todo_operation.selectoperation === 'Add') {
        
        let add_todo = await inquirer.prompt([
            {
                name : 'addtodo',
                type : 'input',
                message : 'what would you like to add in your todo?'

            }
        ])

        Todos.push(add_todo.addtodo);
        console.log(chalk.yellowBright(Todos));
            
    }
       
    //condition for Update
    if (todo_operation.selectoperation === 'Update') {
        
        let update_todo = await inquirer.prompt(
            {
                name : 'updatetodo',
                type : 'list',
                message : 'Update your todo?',
                choices : Todos.map(item => item)
            },)

            let add_todo = await inquirer.prompt([
                {
                    name : 'addtodo',
                    type : 'input',
                    message : 'what would you like to add in your todo?'
    
                }
            ])

            let new_todo = Todos.filter(val => val !== update_todo.updatetodo)
            Todos = [...new_todo, add_todo.addtodo]
            console.log(Todos);
        

        }

     //condition for Update
     if (todo_operation.selectoperation === 'Read') {
        console.log(Todos)
            
     }

      //condition for Update
    if (todo_operation.selectoperation === 'Delete') {

        let Delete_todo = await inquirer.prompt(
            {
                name : 'deletetodo',
                type : 'list',
                message : 'Update your todo?',
                choices : Todos.map(item => item)
            },)

            let new_todo = Todos.filter(val => val !== Delete_todo.deletetodo)
            Todos = [...new_todo]
            console.log(chalk.blue(Todos));
        
    }

  console.log(chalk.red(todo_operation));
    
}
    
}

create_array(Todos);
