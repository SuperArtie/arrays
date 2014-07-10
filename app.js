var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');
/*
console.log(chalk.blue('this is blue text'));
console.log(chalk.blue.bgRed.bold('this is blue text'));
console.log(chalk.green('i am a green line' + chalk.blue('with a blue string') + 'that becomes green again!'));
*/
var evens = [2, 4, 6, 8];
//console.log(evens);
//console.log(chalk.red(evens[1]));
/*
for(var i=0; i<10; i++)
{
  if(i%2===0)
  {
    console.log(chalk.red(i));
  }
  else
  {
    console.log(chalk.blue(i));
  }
}

for(var j=0; j<evens.length; j++)
{
  console.log('evens -> ' + evens[j]);
}
*/
var numbers = [];
var response = prompt('Enter a number or (q)uit: ');
while(response != 'q')
{
  response = parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit: ');
}
console.log(numbers);

//TOTAL UP ELEMENTS IN AN ARRAY
//MY WAYS
var i = 0;
sum = 0;
/*
while(numbers[i]!=undefined)
{
  sum += numbers[i];
  i++;
}
console.log(sum);


for(i=0;numbers[i]=undefined;i++)
{
  sum+=numbers[i];
}
console.log(sum);
*/

//BETTER WAY
for(var k = 0; k < numbers.length; k++)
{
  sum+=numbers[k];
}
console.log('the sum of numbers ' + sum);











