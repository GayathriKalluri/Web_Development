// comments
//cmd+k+c
//document.getElementById("count-ele").innerText=5
//initialize and log the basic variable
/*let count=0
console.log(count)

let myAge=22
console.log(myAge)

//simple math operations
let count1=5 + 7
console.log(count1)

let myAge1=22
let humanDogRatio=2
let myDogAge=myAge1 * humanDogRatio
console.log(myDogAge)

//we can change the count value anytime
count=3
console.log(count)

//increment or decreament 
count=count+1
console.log(count)

//another example on increament and decrement
let bonusPoints=50
console.log(bonusPoints)
bonusPoints+=50
console.log(bonusPoints)
bonusPoints-=25
console.log(bonusPoints)
bonusPoints+=70
console.log(bonusPoints)

//creating the function
function race()
{
    console.log(42)
}
race()//calling/invoking  the function
race()

let lap1=34
let lap2=33
let lap3=36
function lapp()
{
    console.log(lap1+lap2+lap3)
}
lapp()

let laps=0
function lapscompleted()
{
    laps+=1
    //console.log(laps)
}
lapscompleted()
lapscompleted()
lapscompleted()
console.log(laps)


//creating button interactive and creating increament function
let counter=4
let countEl=document.getElementById("count-ele")
function increment()
{
    counter+=2
    console.log("clicked")
    countEl.innerHTML=counter//passing the argument
}
let saveEl=document.getElementById("save-el")
function save()
{
    saveEl.innerText+=counter+"-" //textContent is alternative for innerText
    countEl.innerText=0
    counter=0
    console.log(saveEl)
}

//strings "" we store inside double quotes
let username="per"
console.log(username)
let message="you have three notifications"
console.log(message + "," + username + "!") //concatenation of strings
let messagetouser=message + "," + username + "!"
console.log(messagetouser)
let name="Gayathri"
let greeting="Hi, my name is "
let mygreeting= greeting + name
console.log(mygreeting)

//strings vs numbers
let name1=42
let greeting1="Hi, my name is "
let mygreeting1=greeting1+name1
console.log(mygreeting1)

let points=4
let bonuspoints="10"
let totalpoints=points+bonuspoints
console.log(totalpoints)

console.log(4+5) //9 we can differentiate strings and numbers using colors in the console
console.log("2"+"4") //"24"
console.log("5"+1) //"51"
console.log(100+"100") //"100100"

//quotation inside the text
let wish='I\'d love to see the show \"the lion king\".' //escape character is backslash 
console.log(wish)

//render a welcome message
let welcomeEl=document.getElementById("welcome-el")
let name2="Gayathri "
let greeting2="Welcome back"
console.log(welcomeEl.innerText = name2 + greeting2)
//add something without modifying the existing code
welcomeEl.innerText += " byee"*/

/*let errormsg=document.getElementById("error")
console.log(errormsg)
function textmsg()
{
    console.log("button clicked")
    errormsg.innerHTML="something went wrong,please try again later"
}*/

/*let num1=8
let num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let sum=document.getElementById("sum-el")
//let sumA=document.getElementById("Add").innerText=num1+num2
//let sumS=document.getElementById("Sub").innerText=num1-num2
//let sumM=document.getElementById("Mul").innerText=num1*num2
//let sumD=document.getElementById("Divi").innerText=num1/num2
//console.log(sum)
function add(){
    //console.log("add clciked")
    sum.textContent="Sum: "+ num1+num2
}
function sub(){
    sum.innerText="Sum: "+num1-num2
}
function mul(){
    sum.innerText="Sum: "+num1*num2
}
function divi(){
    sum.innerText="Sum: "+num1/num2
}*/

let output1=document.getElementById("outputH")
let output2=document.getElementById("outputG")
function first1()
{
    output1.innerText=Number(output1.innerText)+1
}
function first2(){
    output1.innerText=Number(output1.innerText)+2
}
function first3(){
    output1.innerText=Number(output1.innerText)+3
}
function second1(){
    output2.innerText=Number(output2.innerText)+1
}
function second2()
{
    output2.innerText=Number(output2.innerText)+2
}
function second3()
{
    output2.innerText=Number(output2.innerText)+3
}

//instead of the above we can write like this

let output1 = document.getElementById("outputH");
let output2 = document.getElementById("outputG");

function addHome(points) {
    output1.innerText = Number(output1.innerText) + points;
}

function addGuest(points) {
    output2.innerText = Number(output2.innerText) + points;
}
