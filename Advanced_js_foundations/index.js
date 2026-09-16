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
import {
    interplanetaryDestinationsArr as destinations, 
    shortSpceTripsArr
} from './data.js' //we can also write in multiple lines like this

console.log(shortSpceTripsArr)
console.log(destinations)

const start=performance.now()

setTimeout(() => {
    const end=performance.now()
    console.log(`Execution time: ${end-start} milliseconds`)
}, 1000)

//default import and export
import getMatchingTripsArr from './searchFunction.js' 
console.log(getMatchingTripsArr(destinations,'exotic'))

//intro to constructors
//date constructor
const dateSnapshot=new Date()
console.log(dateSnapshot)
console.log(typeof dateSnapshot) //object
console.log(dateSnapshot.toString())
console.log(typeof dateSnapshot)

//we can just get the year using the date() constructor
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)

//common constructor
//const person=new Object()
const person={} //object literal, both works in the same way
person.name='Tom'
console.log(person)

//error constructor
function checkUsername(userName)
{
    if(userName)
    {
        console.log(userName)
    }
    else
    {
        console.log(new Error('No username provided')) //error constructor
        console.log('I execute') // this will execute
        //throw new Error('No username provided') //this will stop executing remaining lines
        console.log('I do not execute') // this will not execute
    }
}
checkUsername()

//preincrement and predecrement

//numeric seperator(_)
const tomsBankBalanceGBP=9007199254740991
//use numeric seperators(_) to seperate out the digits into chunks if 3 so they are easier to read
const tomsBankBalanceGBP1=9_007_199_254_740_991 * 2
console.log(tomsBankBalanceGBP1)

//so inorder to avoid such big numbers we have bigInt datatype
//we can use bigInt by adding n at the end and also using bigInt constructor
const tomsBankBalanceGBP2=9_007_199_254_740_991_345n
console.log(typeof tomsBankBalanceGBP2)

const tomsBankBalanceGBP3=BigInt(9_007_199_254_740_991_345n)
//console.log(tomsBankBalanceGBP3-1) // we can't do -1 it will throw an error so we can't combine bigint with any other data type
//console.log(Math.sqrt(tomsBankBalanceGBP3)) 

//hoisting
function getWeather()
{
    return "Today's weather is warm and sunny"
}
console.log(getWeather()) //global scope

console.log(getNews()) //this is hoisting
function getNews()
{
    return "Anew swimming pool has opened in the town centre"
}

console.log(trafficInfo) // we cannot access until it is initialized
let trafficInfo="all roads are busy right now"
var trafficInfo1="all roads are busy right now"

//stock challenge
import { getStockData } from './fakeStockAPI.js'
console.log(getStockData)

setInterval(function(){
    const stockData=getStockData()
    renderStockTicker(stockData)
},1500)

let prevPrice=null

function renderStockTicker(stockData)
{
    const stockDisplayName=document.getElementById('name')
    const stockDisplaySymbol=document.getElementById('symbol')
    const stockDisplayPrice=document.getElementById('price')
    const stockDisplayPriceIcon=document.getElementById('price-icon')
    const stockDisplayTime=document.getElementById('time')

    const {name,sym,price,time}=stockData //destructing

    const priceDirectionIcon = 
        price > prevPrice ? 'green.webp' : 
        price < prevPrice ? 'red.webp' : 
        'grey.webp'

    const priceIconElement=document.getElementById('img')
    priceIconElement.src=`${priceDirectionIcon}`
    priceIconElement.alt='price direction icon'
    stockDisplayPriceIcon.innerHTML=''
    stockDisplayPriceIcon.appendChild(priceIconElement)

    stockDisplayName.innerText=`Name: ${name}`
    stockDisplaySymbol.innerText=`Symbol: ${sym}`
    stockDisplayPrice.innerText=`Price: ${price}`
    stockDisplayTime.innerText=`Time: ${time}`

    prevPrice=price
}
