//1 Declare 2 variables a and b, such that a &gt; b, and define values for them.Output S. D. P. Q. R..
let a = +prompt('Number a')
let b = +prompt('Number b')
let Sum = a + b
let Difference = a - b
let Product = a * b
let Quotient = a/b
let Remainder = a%b 

alert (`The sum is - ${Sum},The Difference is - ${Difference}, The Product is - ${Product}, The Quotient is - ${Quotient},The Remainder is - ${Remainder}`)


//2 Print your name and age in the following format: “My name is ____, I am ____ .”
let Name_Of_Yours = prompt('Type your name!')
let Age_OF_Yours = prompt ('How old are you?')
alert(`My name is ${Name_Of_Yours},I am ${Age_OF_Yours}.`)


//3 Declare a variable with defined value. Print the last digit of the number.
let Our_Number = +prompt('Type any number')
let Last_digit = Our_Number%10
alert (Last_digit)



//4 Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.
let Number = +prompt('Type Number to check whether a given number is negative')
if (Number<0){
    alert('yes')
} else {
    alert ('no')
}


 
//5 Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let Number_1 = + prompt('Type Number 1')
let Number_2 = + prompt('Type Number 2')
if (Number_1%Number_2 == 0 || Number_2%Number_1 == 0) {
    alert('1')
}else {
    alert('0')
}


//6 Given any number between 1 and 12. Print the name of the respective month.
let Month_Number = + prompt('Type 1-12 to find out which month corresponds to which number ')

switch (Month_Number) {
    case 1: 
        alert ('January')
    
    break;

    case 2: 
        alert ('February')
    
    break;

    case 3: 
        alert ('March')

    break;

    case 4: 
        alert ('April')
    
    break;

    case 5: 
        alert ('May')
    
    break;

    case 6: 
        alert ('June')
    
    break;

    case 7: 
        alert ('July')
    
    break;

    case 8: 
        alert ('August')
    
    break;

    case 9: 
        alert ('September')
    
    break;

    case 10: 
        alert ('October')
    
    break;

    case 11: 
        alert ('November')
    
    break;

    default:
        alert ('December')
}

//7 Given three numbers. Find the maximum one.
let Number_1 = +prompt('Number 1')
let Number_2 = +prompt('Number 2')
let Number_3 = +prompt('Number 3')
if (Number_1>=Number_2 && Number_1>=Number_3){
    alert(`${Number_1} is maximum`)
} else if (Number_2>=Number_1 && Number_2>=Number_3){
    alert(`${Number_2 }is maximum`)
} else {
    alert(`${Number_3} is maximum`)
}