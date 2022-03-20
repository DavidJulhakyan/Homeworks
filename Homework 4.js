//1.Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step.
let a = +prompt('number1')
let b = +prompt('number2')
let s = +prompt('step')
let arr = []

while (a<=b){
    arr.push (a)
    a += s
}
arr


//2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.
let ourtext = prompt ('Text')
let symbol = prompt ('symbol')
let counter = 0

for (let i = 0;i < ourtext.length  ; i++ ){
    if (ourtext[i] == symbol){
        counter ++
    } 
        
} alert (counter)


//3. Given a string. Check whether the string is palindrome or not.
let text = prompt ('polindrome or not')
a = 0

while(text[0+a] == text[text.length-1-a] && text[0+a]!== undefined){
        a++

} if(text[0+a] == text[text.length-1-a]){
    alert ('yes')
} else {
    alert('no')
} 


//4. Given an array of numbers. Find the maximum element in array.
let arr = [1,4,43,-112]
let theHighest = 0

for (let i = 0;i<arr.length;i++){
    if (theHighest <= arr[i]){
        theHighest = arr[i]
    }
} alert(theHighest)


//5. Given an array. Create the array which elements are products between two neighbours.
let arr1 = [1,1,4,32,6]
let arr2 = []
a = 0

while (arr1[0]!=undefined){
    if(arr1[1]!=undefined){
        let a = arr1[0]*arr1[1]
        arr2.push(a)
        arr1.shift()
        
    } else {
        arr1.shift()
    }
} arr2


//6. Given a string and symbols. Change first symbol by the second one in the string.
let ourtext = prompt ('Type your text')
let symbol = prompt ('symbol that we want to change')
let symbol2 = prompt ('to change to')
result = ''
debugger

for (let i = 0;i < ourtext.length  ; i++ ){
    if (ourtext[i] == symbol){
        result += symbol2  
        
    } else {
        result += ourtext[i]
    }
        
} alert (result)


//7. 



