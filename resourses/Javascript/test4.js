//find out a factor of a number.

//5!:5*4*3*2*1 or 1*2*3*4*5
//5! :20*3*2*1
// 120
var result = 1;
for(var i=5; i>=1; i--)
{result=result*i;}
console.log(result);
//strong number:
// 145:1!+5!+4!
//if sum of the factorial = original number then that number is called a strong number.