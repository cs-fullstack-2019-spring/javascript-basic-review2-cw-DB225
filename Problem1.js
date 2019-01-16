//Ask the user for 5 numbers. Print the sum of the 5 numbers.

var sum = 0;
for(var i=5; i<10; i++)
{
    var number = parseInt(prompt("Enter a number"));
    sum += number;
}
console.log("The sum is: " + sum);