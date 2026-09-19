/*const getSpendAlert=function(amount){
    return `warning! you just spent ${amount}`
}*/

//using arrow function
/*const getSpendAlert= amount => { //for one parameter no need of bracke
    return `warning! you just spent ${amount}`
}
console.log(getSpendAlert(150))

//if there is function with no parameters
const getSpendAlert1= () => {
    return `warning! you just spent money`
}
console.log(getSpendAlert1())

//function with 2 parameters
const getSpendAlert2= (name,amount) => {
    return `warning! Hey ${name}! you just spent ${amount}`
}
console.log(getSpendAlert2('Tom',150))

//when to use brackets
//1 parameter no need to use brackets
// 0 or 2 and more need brackets
// arrow function is all on one line and we can even avoid return statement also
const getSpendAlert3= (name,amount) => `warning! Hey ${name}! you just spent ${amount}`
console.log(getSpendAlert3('Tom',150))

//complex arrow function
const getSpendAlert4=amount => {
    if(amount>50) {
        return `warning! you just spent ${amount}`
    }
}
console.log(getSpendAlert4(100))

//when to use {} + return
//return one line of code without curly braces or the return keyword
//more complex logic requires the curly braces and the return keyword

//arrow function challenge
/*function speedWarning(speed){
    return `you are going at ${speed} mph`
}
console.log(speedWarning(400))*/

/*const res=speed => `you are going at ${speed} mph`
console.log(res(400))

const speedWarning=(speedLimit, driversSpeed) => {
    if(driversSpeed>speedLimit) return `exceeded`
    else return `good to go`
}
console.log(speedWarning(30,40))

//inline arrow cahllenge
const distanceTraveledMiles=[267,345,234,190,290]
const distanceTraveledKm=distanceTraveledMiles.map(function(distance){
    return Math.round(distance*1.6)
})
console.log(distanceTraveledKm)

//refactoring this .map method into arrow method
const distanceTraveledKm1=distanceTraveledMiles.map(distance => Math.round(distance*1.6))
console.log(distanceTraveledKm1)

//inline arrow function refactor challenge
import { itemsBoughtArr } from "./itemsBoughtArr.js"

/*function calculateTotalCost(itemsBoughtArr,discount){
    const total=itemsBoughtArr.reduce((total,currentItem) => 
            total+currentItem.priceUSD, 0)
    return total-discount
}
console.log(calculateTotalCost(itemsBoughtArr,10))*/

//default parameters
//here discount is not passed in function calling even though it works in the below way
/*function calculateTotalCost(itemsBoughtArr,discount){
    if(!discount) discount=0
    const total=itemsBoughtArr.reduce((total,currentItem) => 
            total+currentItem.priceUSD, 0)
    return total-discount
}
console.log(calculateTotalCost(itemsBoughtArr))*/

//default params
//we can also pass defalut parameter directly in function
//default parameter is used only when parameter is not passed in function
//if parameter is passed in function call default parameter is not used
/*function calculateTotalCost(itemsBoughtArr,discount = 10){
    if(!discount) discount=0
    const total=itemsBoughtArr.reduce((total,currentItem) => 
            total+currentItem.priceUSD, 0)
    return total-discount
}
console.log(calculateTotalCost(itemsBoughtArr,20))

//the rest parameter => catching the rest of the arguments
/*function setPermissionLevel(permissionLevel,name1,name2,name3)
{
    console.log(`${name1} now has ${permissionLevel} level access.`)
    console.log(`${name2} now has ${permissionLevel} level access.`)
    console.log(`${name3} now has ${permissionLevel} level access.`)
}
console.log(setPermissionLevel('admin','Dave','Sally','Mike'))
console.log(setPermissionLevel('admin','Dave','Sally','Mike','Clare')) //clare is just ignored
console.log(setPermissionLevel('admin','Dave','Sally')) //undefined now has admin level access. is the output*/

/*function setPermissionLevel(permissionLevel, ...names){
    console.log(names) // we will get array of remaining names
    names.forEach((name) =>
        console.log(`${name} now has ${permissionLevel} level access.`)) //this will access all the names
    /*console.log(`${name1} now has ${permissionLevel} level access.`)
    console.log(`${name2} now has ${permissionLevel} level access.`)
    console.log(`${name3} now has ${permissionLevel} level access.`)*/
//}
//console.log(setPermissionLevel('admin','Dave','Sally','Mike'))
//rest parameter must be last formal parameter

//the rest parameter challenge
/*function getLabelsHtml(text,sender, ...staffObjs){
    const labelsHtml=staffObjs.map(staffObjs => 
    `<div class="label-card">
        <p> Dear ${staffObjs.name}</p>
        <p>${text}</p>
        <p>BestWishes</p>
        <p>${sender}</p>
    </div>`
    ).join('')
    return labelsHtml
}
const text='Thank you for all you hard work throughout the year'
const sender='Tom'

document.getElementById('labels-container').innerHTML=getLabelsHtml(
    text,
    sender,
    {name:'Sally'},
    {name:'Mike'},
    {name:'Rob'},
    {name:'Harriet'}
)

//callback functions
//javascript functions are "first class citizens"
function notifyUser(notificationFn)
{
    notificationFn()
}
const emailNotification = () => console.log('Emial sent')
const smsNotification = () => console.log('SMS sent')

notifyUser(emailNotification)
notifyUser(smsNotification)*/


//superChallenge
import { placeHolderPropertyObj } from "./placeHolderPropertyObj.js"
import { propertyForSalesArr } from "./propertyForSalesArr.js"
function getPropertyHtml(propertyArr = [placeHolderPropertyObj]){ //default param and converting object into an array
    return propertyArr.map(property => {
        const {propertyLocation,priceGBP,roomsM2,comment,image}=property
        const totalRooms=roomsM2.reduce((total,current) => total + current)
        return `<section>
        <img>
        <div>
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalRooms}</h3>
        </div>
    </section>`
    }).join('')
}
document.getElementById('container').innerHTML= getPropertyHtml( propertyForSalesArr)