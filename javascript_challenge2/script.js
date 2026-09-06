/*let person={
    name:"Gayathri",
    age:22,
    country:"India",
}

function logData()
{
    console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
}
logData()

let age=75
function discountCriteria()
{
    if(age<6) return "free"
    else if(age>=6 && age<=17) return "child discount"
    else if(age>=18 && age<=26) return "student discount"
    else if(age>=27 && age<=66) return "full price"
    else return "senior citizen discount"
}
console.log(discountCriteria())

let largeCountries=["china","india","usa","indonesia","pakistan"]

for(let i=0;i<largeCountries.length;i++)
{
    console.log("-"+largeCountries[i])
}

largeCountries.pop()
largeCountries.push("Monaco")
largeCountries.shift()
largeCountries.unshift("Tuvalu")
console.log(largeCountries)

let hands=["rock","paper","scissor"]

function rps(){
    let randomIndex=Math.floor(Math.random()*3)
    console.log(hands[randomIndex])
}
rps()

let fighters=["1","2","3","4","5","6","7","8","9","10"]

let stageEl=document.getElementById("stage")
let fightButton=document.getElementById("fightButton")

fightButton.addEventListener("click",function(){
   let first= Math.floor(Math.random()*11)
   let second= Math.floor(Math.random()*11)
   stageEl.textContent=fighters[first] + " vs " + fighters[second]
})*/

let fruit=["a","o","a","a","o"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")
for(let i=0;i<fruit.length;i++)
{
    if(fruit[i] === "a")
    {
        appleShelf.textContent+="a "
    }
    else
    {
        orangeShelf.textContent+="o "
    }
}