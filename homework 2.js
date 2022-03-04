//1.For a given number calculate the sum of its digits.
let num = +prompt('type any number')
let a = 0 
while (num){
    a = a + num%10
    num = Math.trunc(num/10)
}
alert (Math.abs(a))


//2.Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).
let a = +prompt('first side')
let b = +prompt('second side')
let c = +prompt('third side')
if (a+b>c && a+c>b && b+c>a){
    alert ('yes')
} else {
    alert('no')
}


//Given a number print its digits count.
let num = +prompt('type any number')
let a = 0 
while (num){
    a = a + 1
    num = Math.trunc(num/10)
}
alert (Math.abs(a))


//4. Count numbers of digit 9 in a number.
let num = +prompt('type any number')
let a = 0 
while (num){ 
    if(num%10==9){
    a = a + 1}
    num = Math.trunc(num/10)
}
alert (Math.abs(a))


//5 Given a positive number. Print it in reverse order.
let num = +prompt('type any number')
let a = ``
while (num){    
     a =`${a}`+`${num%10}`
     num = Math.trunc(num/10)
}
alert(a)