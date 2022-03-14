//1. Given an array․ Compute the length of the array. (without using .length)
let arr = [0,1,2,3,4,5]
let elementCount = 0
while (arr[0]!==undefined) {
    arr.pop()
    elementCount++
}
alert(elementCount)

//2. Given an array of numbers. Print the sum of the elements in array.
let arr = [0,1,2,3]
let elementSum = 0
while (arr[0]!==undefined) {
    elementSum += arr[0]
    arr.shift()
}
alert(elementSum)

//3. Given two numbers. Print powers of 2 between that numbers. (without using
Math.pow)
let num1 = +prompt('any number')
let num2 = +prompt('any number')

while (num1 <= num2){
    let a = num1
    if (a % 2 == 0 ){
                while (a > 1 && a % 2==0){
                a = a / 2
            } if (a==1){
                    console.log(num1), num1 += 1
            } else if (num1==0){
                    console.log(1)
                    num1 += 1} else num1 += 1   
            
                   

       
}  else num1 += 1 
}

//4. Given a number as input, insert dashes (-) between each two even numbers.
let num = +prompt('any number')
let numStr = `${num}`
let result = `${num%10}`
num = Math.trunc(num/10)

let checker = 0
if (+result % 2 == 0){
    checker = 0
}else if (+result == 0){
    checker = 0
}else {
    checker = 1
}
let x = 1
while (x<numStr.length) {
    let lastdigit = num%10
    if (lastdigit % 2 == 0 && checker == 0){
        checker = 0
        result = `${lastdigit}-`+result
        num = Math.trunc(+num/10)
        x+=1
    } else if (lastdigit == 0 && checker == 0){
        checker = 0
        result = `${lastdigit}-`+result
        num = Math.trunc(+num/10)
        x+=1
        
    } else if (lastdigit == 0 && checker == 1 ){
        checker = 0
        result = String(lastdigit)+result
        num = Math.trunc(+num/10)
        x+=1
        
    } else {
        checker = 1
        result = String(lastdigit)+result
        num = Math.trunc(+num/10)
        x+=1
    }
    
} console.log(result)

//5 Insert a n positive number. Print the n-st prime number.
let whichPrime = +prompt('any positive number')
let whichNum = 0
let num = 3
let primeOrNot = false
let result = 2


    while (whichNum + 1 != whichPrime){
        whichNum++
        primeOrNot = false
        let i = 2
        while (primeOrNot == false ){
            for (; i <= num; i++) {
                if (num % i == 0 && i!==num ) {
                primeOrNot = false
                num++
                i = 2
                
                
                
            }else if (num % i !== 0 && i !== num){
                    primeOrNot = false 

                    
            } else if (num % i== 0){
                    result = num
                    num++
                    primeOrNot = true
                    break;
            
                    
                    
          }         
        }          
    }    
} console.log(result)
