//for...in
/*const character1={
    title:'Ninja',
    emoji:'-',
    powers:['agility','stealth','aggression']
}

for(const property in character1){
    console.log(property)
}

//for...of
const character='Ninja'
for(const letters of character){
    console.log(letters)
}

//.forEach() method
const character2=[
    {
        title:'unicorn',
        emoji:"-",
        powers:['agility','stealth','aggression']
    },
    {
        title:'Ninja',
        emoji:'-',
        powers:['agility','stealth','aggression']
    }
]

for(let character of character2){
    console.log(character)
    console.log(character.title)
}

character2.forEach(function(character2){
    console.log(character2)
    console.log(character2.title)
})

//nest a forEach to logout each individual power in each characters powers array
character2.forEach(function(character2)
{
    character2.powers.forEach(function(powers)
    {
        console.log(powers)
    })
})

//getting index
character2.forEach(function(character2,index)
{
    console.log(index, character2.title)
})

//includes() method
const emojis=['-','.','=']
console.log(emojis.includes('-')) //returns true 
console.log(emojis.includes(',')) //returns false 

const addItemBtn=document.getElementById('add-item-btn')
const itemInput=document.getElementById('item-input')
const list=document.getElementById('list')

const shoppingList=[]

addItemBtn.addEventListener('click',function(){
    if(!shoppingList.includes(itemInput.value))
        shoppingList.push(itemInput.value)
    render()
    itemInput.value=''
})

function render(){
    let html=''
    for(let item of shoppingList)
    {
        html+=`<li class="list-item">${item}</li>`
    }
    list.innerHTML=html
}
render()

//.map() method
import { playlistArr } from "./playlist.js"

//const playlistHtml=[]

//we can do this using for loop
/*for(let i=0;i<playlistArr.length;i++)
{
    playlistHtml.push(
        `<section class="card"
            <div class="card-mid">
                <h4 class="card-title">${playlistArr[i].title}</h4>
                <p class="card-artist">${playlistArr[i].artist}</p>
            </div>
        </section>
        `
    )
}*/

//we can also do with map function
/*const playlistHtml=playlistArr.map(function(track){
    return `
            <section class="card"
                <div class="card-mid">
                    <h4 class="card-title">${track.title}</h4>
                    <p class="card-artist">${track.artist}</p>
                </div>
            </section>
        `
}).join('')
//we can add anywhere either above or below
document.getElementById('container').innerHTML=playlistHtml.join('')*/

//so in the above output we get commas after every iteration
//for that we can use
//.join() method
/*const guestsArr=['Amy','clare','keith','dan']
console.log(typeof guestsArr.join()) //string
console.log(guestsArr.join()) //return all values in array with seperator ,
console.log(guestsArr.join('.')) //here we have seperatd with dots
console.log(guestsArr.join(' ')) //space
console.log(guestsArr.join('')) //empty string

//map vs foreach
/*const playlistHtml1=playlistArr.foreach(function(track){
    return `
            <section class="card"
                <div class="card-mid">
                    <h4 class="card-title">${track.title}</h4>
                    <p class="card-artist">${track.artist}</p>
                </div>
            </section>
        `
}).join('')
//we can add anywhere either above or below
document.getElementById('container').innerHTML=playlistHtml1.join('')*/
// so in the above foreach will not work because we cannot return new array in foreach
//now lets create an array and test

/*const playlistHtml2=[]

playlistArr.forEach(function(track){
    playlistHtml2.push( `
            <section class="card"
                <div class="card-mid">
                    <h4 class="card-title">${track.title}</h4>
                    <p class="card-artist">${track.artist}</p>
                </div>
            </section>
        `)
}) //if we keep join here it will not work
//we can add anywhere either above or below
document.getElementById('container').innerHTML=playlistHtml2.join('')

//filter() method
const ages=[1,5,9,23,56,10,47,70,10,19,23,18]
const adults=ages.filter(function(age){
    return age>=18
    //if(age>=18) return true
    //else return false
    //either if there is else or not it will work in the same way
})
console.log(adults)
console.log(adults.length)

//now add it to the new array
const children=ages.filter(function(age)
{
    return age<18
})
console.log(children)

//filter method with objects
const series=[
    {
        name:'The wire',
        location:'Baltimore',
        lengthInHours:60,
        genres:['action','thriller','detective','suspense']
    },
    {
        name:'game of thrones',
        location:'westeros and essos',
        lengthInHours:70.25,
        genres:['fanatsy','action','tragedy']
    }
]
const newYorkSeries=series.filter(function(show)
{
    return show.location === 'Baltimore'
})
console.log(newYorkSeries) // return name location genres lengthInHours for this location

const thrillers=series.filter(function(show)
{
    return show.genres.includes('thriller')
})
//console.log(thrillers)

//.reduce() method -> sums the total number in an array
const rainJanuaryByWeek=[10,20,0,122]
const totalRainfallJanuary=rainJanuaryByWeek.reduce(function(total, currentElement){
    console.log('total: '+total,'currentElement: '+currentElement)
    return total+ currentElement
})
console.log(totalRainfallJanuary) //152
//below is what happens in the function
//total: 10 currentElement: 20
//script.js:207 total: 30 currentElement: 0
//script.js:207 total: 30 currentElement: 122

const grades=[75,83,66,43,55,99,87,16,89,64,70,80,94,77,66,73]
const values=grades.reduce(function(total, currentElement)
{
    return total + currentElement
})
console.log(`the class average is ${values/grades.length}`)

//.reduce() method with objects
import { studentArr } from "./studentArr.js"
function calculateClassAverage(studentArr)
{
    const average1=studentArr.reduce(function(total, currentStudents)
    {
        return total+currentStudents.grade
    }, 0) // reduce has two parameters here we gave starting value of total is 0 
    return average1/studentArr.length
}
console.log(calculateClassAverage(studentArr))

//for loop with break and continue
const expensesAndRefunds=[
    {description:'Groceries',amount:50,year:2023},
    {description:'electronics',amount:-30,year:2023},
    {description:'dinner',amount:40,year:2023},
    {description:'clothing',amount:60,year:2023},
    {description:'entertainment',amount:25,year:2023},
    {description:'rent',amount:-500,year:2024},
    {description:'utilities',amount:100,year:2024},
    {description:'books',amount:20,year:2024},
    {description:'fitness',amount:30,year:2024},
    {description:'Gifts',amount:15,year:2024}
]

let totalSpent=0
const cutoffDate=2024

for(let i=0;i<expensesAndRefunds.length;i++)
{
    const currentExpensesOrRefund=expensesAndRefunds[i]
    if(currentExpensesOrRefund.year>=cutoffDate){
        console.log('reached')
        break
    }
    if(currentExpensesOrRefund.amount<0)
    {
        console.log("skipping")
        continue
    }
    totalSpent+=currentExpensesOrRefund.amount
}
console.log(`total amount spent on items in 2023:${totalSpent}`)

//various array methods -> .every(), .some(), .find(), .findIndex(), .indexOf(), .at()
//every
const dailyStepsArr=[10000,12000,18000,15000,11000,19000,13000]
const areAllOver10k=dailyStepsArr.every(function(stepCount)
{
    return stepCount>=10000
})
console.log(areAllOver10k) //return true only if every item is >=10000

//some
const areAllOver10k1=dailyStepsArr.some(function(stepCount)
{
    return stepCount>=10000
})
console.log(areAllOver10k1) //return true if one or more than one item is >=10000

//find
const invoicesUSDArr=[201,354,26,1299,1400,60,76]
const invoiceOver1k=invoicesUSDArr.find(function(invoice){
    return invoice>1000
})
console.log(invoiceOver1k) // return the first greater element, if not found anything returns undefined

//findIndex
const invoiceIndexOver1k1=invoicesUSDArr.findIndex(function(invoice)
{
    return invoice>1000
})
console.log(invoiceIndexOver1k1) //return index of first item that is greater than 1000 if not found returns -1

//indexOf
console.log(invoicesUSDArr.indexOf(26)) //return the index of 26

//at
console.log(invoicesUSDArr.at(3)) //returns item at 3rd index
console.log(invoicesUSDArr[-1]) // this gives us undefined so we use at
console.log(invoicesUSDArr.at(-1)) //counts from the end

//string.replace(), string.replaceAll() function

const paragraph="js is the backbone of the internet. It was created in 1995. Before js, websites were so boring"
//paragraph.replace(pattern,replacement)
console.log(paragraph.replace('js','JS')) //replaces the first instance only
console.log(paragraph.replaceAll('js','JS')) //replaces all instances

//regex
const sentence="i went to australia and i saw a shark"
//here we can use replaceAll to replace all the i's but in australia i shouldn't be replaced that is not meaningfull
//for these cases we use regex
console.log(sentence.replaceAll(/\b(i)\b/g,'I')) // this replaces only single i's but not the i in australia

const sentence1='I love you with all my heart!'
console.log(sentence1.replaceAll(/\b(love|heart)\b/g,function(){
    return '-'
}))

//first character of each sentence is uppercase 
const para="javascript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"
console.log(para.replaceAll(/(?:^|\.\s)([A-Za-z])/g,function(match)
{
    return match.toUpperCase()
}))

//regex flags and constructors
// /(regex)/g => g=global refered to flag

const text="please switch off the Wifi before you leave."
//const regex=/wifi/gi //gi is the flag where g for global and i for case insensitive
//const doesMatch=regex.test(text) 
//console.log(doesMatch) //return false only if we have /wifi/ and returns true if we have /wifi/i

//regexp constructor
const userInput="wifi"
const regex=new RegExp(userInput,'gi')
const doesMatch=regex.test(text) //boolean
console.log(doesMatch)*/

//challenge
import { playlistArr } from "./playlist.js"

const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const container = document.getElementById('container')

searchBtn.addEventListener('click', function() {

    const regex = new RegExp(searchInput.value, 'i')

    const matchedSongs = playlistArr.filter(function(track) {
        return regex.test(track.title)
    })

    let html = ''

    matchedSongs.forEach(function(track) {
        html += `
            <section class="card">
                <h3>${track.title}</h3>
                <p>${track.artist}</p>
            </section>
        `
    })

    container.innerHTML = html
})