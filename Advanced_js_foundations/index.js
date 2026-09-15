//Event loop, call stack
//how long will it be before this code executes
//javascript is a single-threaded non-blocking language
const exersiceTimeMins=30

//let message=''
/*if(exersiceTimeMins<30)
{
    message='you need to try harder!'
}
else{
    message='doing good'
}*/
const message=exersiceTimeMins<30 ? 'you need to try harder!':'doing good'

console.log(message)


//more complex ternary operator
const exersiceTimeMins1=90

/*let message1=''
if(exersiceTimeMins1<30)
{
    message1='you need to try harder!'
}
else if(exersiceTimeMins1<60){
    message1='doing good'
}
else{
    message='Excellent'
}*/

const message1=exersiceTimeMins1<30?'you need to try harder!'
                :exersiceTimeMins1<60?'doing good'
                :'Excellent' //multiple conditions can be used here
//as ternary becomes complex it is harder to read then if-else is better to read
console.log(message1)

//switch statements
//select one of many code blocks to execute
function selectItem(item){
    let price=0
    switch(item)
    {
        case 'coffee':
            price=2
            break
        default:
           return `sorry, we don't sell ${item}`
    }
    return `you selected ${item}.that will be ${price}`
}
console.log(selectItem("grapes"))
console.log(selectItem("coffee"))

//object destructuring
//object destructuring enables us to extract properties from the objects into distinct variables
const favouriteFilm={
    title:"Top Gun",
    year:"1986",
    genre:"action",
    star:"tom cruise",
    director:"tony scott"
}
//old method
/*const title=favouriteFilm.title
const year=favouriteFilm.year
const genre=favouriteFilm.genre*/

const {title,year,genre,star,director}=favouriteFilm //assign it to object name

console.log(`my favorite film is ${title}. It's an ${genre} and released in ${year}`)

//set timeout with parm
function displayTrafficLight(light)
{
    console.log(light)
}
//setTimeout(displayTrafficLight('green'),3000,)
setTimeout(displayTrafficLight, 3000, 'green') //after 3secs we will get green in the console
displayTrafficLight('red')

function logAnswer(answer,points)
{
    console.log(`the answer is ${answer} of course!, If you got that right,give yourseld ${points} points.`)
}
const questionTimer=setTimeout(logAnswer, 5000, 'Lima', 20)// we can give as many as arguments we wish

//we can also interrupt this settimeout before it executes using html
document.getElementById("stop").addEventListener('click',function(){
    clearTimeout(questionTimer) //this will cancel executing this settimeout method
})
//export and import -> export is written in data.js
import {shortSpceTripsArr} from './data.js'
console.log(shortSpceTripsArr)

