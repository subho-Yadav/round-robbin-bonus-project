import express from 'express'
import chalk from 'chalk';



 const generateFixture=(players,teams)=>{
  //creating a twoD array

  let fix=[]
  for(let i=0;i<=teams-1;i++){
    fix[i]=[]
    for(let j=i+1;j<=teams-1;j++){
      console.log(`Team ${String.fromCharCode(65+i)} will play with Team ${String.fromCharCode(65+j)}`)
    }
  }
  
}


const app=express()

import inquirer from 'inquirer';

const log=console.log

inquirer
  .prompt([
    {
        type:'number',
        name:'players',
        message:chalk.bgRed('Enter the number of players:')
    },
    {
        type:'number',
        name:'groups',
        message:chalk.bgMagenta('Enter the number of Teams:')
    }
  ])
  .then((answers) => {
        
        generateFixture(answers.players,answers.groups)
})
  .catch((error) => {
    if (error.isTtyError) {
     console.log('Prompt could not be rendered.')
    } else {
        console.log('Something else went wrong!')
    }
  });
