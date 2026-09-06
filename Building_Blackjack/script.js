//set their values to a random number between 2-11
//let firstCard=getRandomCard()
//let secondCard=getRandomCard()
//creation of array
/*let cards=[]
//let cards=[firstCard, secondCard] //array- ordered list of item
let sum=0
//let sum=firstCard+secondCard
let hasBlackjack=false
//let isAlive=true
let isAlive=false
let message=""
//console.log(sum)
//if else condition
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
//another way of document.getElementById is
//same as document.getElementById
//let sumEl=document.querySelector("#sum-el")

//bucket cretaion key and value pairs
let player={
    name:"Gayathri",
    chips:150
}

let playerNamer="Gayathri"
let playerChips=145
let playerEl=document.getElementById("player-el")
//playerEl.textContent=playerNamer+ ": $" +playerChips
playerEl.textContent=player.name+ ": $" +player.chips

console.log(cards)

//create a function getRandomCard() that always returns some random value
//math.round() we can use to generate the random card
function getRandomCard()
{
    //return 5
    //if 1 -> return 11
    //if 11-13 -> return 10
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber === 1) return 11
    else if(randomNumber>10) return 10
    else return randomNumber
}
function startGame()
{
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum=firstCard+secondCard
    renderGame()
}
let cardEl=document.getElementById("card-el")
function renderGame()
{
    
    if(sum<21){
        console.log("Do you want to draw a new card?")
        message="Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        console.log("Wohoo! you've got blackjack")
        message="Wohoo! you've got blackjack"
        hasBlackjack=true
    }
    else{
        console.log("You're out of the game")
        message="You're out of the game"
        isAlive=false
    }
    messageEl.textContent=message
    //render out firstCard and secondCard
    //loops
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=cards[i]+" "
    }
    //cardEl.textContent="Cards: " + cards[0] + " " + cards[1]
    //render out ALL the cards we have so here we use array here
    sumEl.textContent="Sum: "+sum
}

function newCard()
{
    //console.log("Drawing a new card from the deck")
    if(isAlive && !hasBlackjack)
    {
        let card=getRandomCard()
        sum+=card
        cards.push(card)
    }
    
    renderGame()
}*/
//newCard()
//here one important thing is sum=="21" means this works that means here if we use
//== this then 21=="21" this true so 
//we have to be mindful that to use === triple equal
//  to compare the numbers age===100

//booleans true or false
/*let isVegan=true
console.log(isVegan)

let hasDiscountCode=true
function processOrder(){
    if(hasDiscountCode)
    {
        console.log("Discount applied")
        hasDiscountCode=false
    }
    else
    {
        console.log("no discount applied")
    }
}
processOrder()
processOrder()*/

/*//Arrays - ordered lists of items
let featurePosts = [
    "check out my Netflix clone", //0 index
    "Here's the code for my project", // 1st index
    "I've just relaunched my portfolio" //2nd index
]*/
/*let experience=[
    "Cognizant",
    "Btech",
    "Javascript",
]
//array indexes 
//0 indexed
/*console.log(featurePosts[0])
console.log(featurePosts.length)

//arrays - ordered list of items - composite / complex data types
//create an array that describes yourself. use the three primitive data types
//it should contain your name(String), your age(number) , and whether you like pizza (boolean)
let sample=[
    "Gayathri",
    22,
    true
]
console.log(sample[1])
//pushing and poping from arrays
let cards=[7,4]
cards.push(5)
console.log(cards)
let a=3
cards.push(a)
console.log(cards)
//how can you remove the last item, in an array
cards.pop()
console.log(cards) */

//loops
//       start   finish    step size
/*for(let count=1; count<11; count+=1)
{
    console.log(count)
}
//combine for loops with arrays
for(let i=0;i<experience.length;i++)
{*/
/*let player1Time=102
let player2time=107

//create a function that returns fastest tace time
function getFastestRaceTime(){
    if(player1Time<player2time)
        return player1Time
    else if(player1Time>player2time)
        return player2time
    else
        return player1Time
}
//ctrl + d to delete all the selected things
getFastestRaceTime()
let fastestRace=getFastestRaceTime()
console.log(fastestRace)*/

/*let randomNumber=Math.random() //it generate a random number between 0 and 1
// 0.0000000 -> 0.999999999
console.log(randomNumber)
let random1=Math.random()*6
// 0.00000000 -> 5.999999999

let flooredNumber=Math.floor(3.45632)
console.log(flooredNumber) //it removes the decimals
let flooredNumber1=Math.floor(-3.45632)
console.log(flooredNumber1)*/

/*let randomNumberDice=Math.floor(Math.random()*6) //-> 0,1,2,3,4,5
console.log(randomNumberDice)

//let randomNumberDice1=Math.floor(Math.random()*6) + 1 //-> 1,2,3,4,5,6
//console.log(randomNumberDice1)

function rollDice(){
    let randomNumberDice1=Math.floor(Math.random()*6) + 1 //-> 1,2,3,4,5,6
    return randomNumberDice1
}
console.log(rollDice())*/

//logical operators
/*let hasCompletedCourse=true
let givesCertificate=true

//if(hasCompletedCourse === true && givesCertificate === true)
if(hasCompletedCourse && givesCertificate)
{
    //if(givesCertificate === true)
    //{
        generateCertificate()
    //}
}

function generateCertificate()
{
    console.log("Generation certificate...")
}*/

//objects - store data in-depth - composite / complex data types
//key-value pairs
/*let course={
    title: "Learn CSS Grid for free",
    lesson: 16,
    creator: "Gayathri",
    length:63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
}
console.log(course.length)
console.log(course.tags)
console.log(course["tags"]) //another notation using brackets

let airbnb={
    isEmpty: true,
    owner: "Gayathri",
    rooms: 4,
    images: ["table.jpeg"]
}
console.log(airbnb.images)*/

//methods inside the object
let player={
    name:"Gayathri",
    chips:150,
    sayHello: function(){
        console.log("Gayathri")
    }
}
player.sayHello()

//so here player is an object and sayHello is the function on that object
//similarly in document.getElementById document is an object and after dot it is function
//similarly in Math.random() also