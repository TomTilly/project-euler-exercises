/*

Problem: https://projecteuler.net/problem=2
 
Problem 2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

Code by Tom Tillistrand

*/

var x = 1,
	y = 2,
	total = 0,
	tempVar;

for(var i = 0; y < 4000000; i++){
	
	if(x % 2 === 0){
		total += x;
	}
	
	tempVar = y;
	y = x + y;
	x = tempVar;
}

console.log(total);