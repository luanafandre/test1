//array is a collection of similar type of content
//10,20,30,40,50,60,70,80,90,100
var a=[10,5,30,40,50,60,70,80,90,100];
//array position will start at 0
//the last index will be size-1
//for(const i of a){console.log(i);}
for(let i=0;i<a.length;i++){
    const element = a[i];
    
    if(element%2==0){ 
        console.log(element);
    }
        
}
//print even numbers from array

// print the even numbers from array.
// you have to declare 2 arrays : 1st array hold the numbers and 2nd array hold the factorials .
// [1,2,3,4,5] 2nd expected : [1,2,6,24,120]

// declare an array with 10 numbers and find out palindrome numbers in the array.
// declare an array with 10 numbers and find out prime numbers in the array.
// declare an array with 10 numbers and find out strong numbers in the array.