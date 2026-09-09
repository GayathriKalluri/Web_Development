/*let player="per" //const
let opponent="Nick" //const
let game="AmazingFighter" //const
const points=0 //let
const hasWon=false //let


points+=100
hasWon=true

if(hasWon)
{
    console.log(player+"got"+points+" points and won the "+game+" game!")
}
else{
    console.log("the Winner is "+opponent+"! "+player+" lost the game")
}
//solve the challenge reassign which should be let and which should be const
const player1="gayathri" //const
const opponent1="Nick" //const
const game1="AmazingFighter" //const
let points1=0 //let
let hasWon1=false //let


points+=100
hasWon=true

//turn this into a template string
if(hasWon)
{
    console.log(`${player} got ${points} points and won the ${game} game!`)
}
else{
    console.log(`the Winner is ${opponent}!, ${player} lost the game`)
}*/

//array as parameter
/*let myCourses=["Learn CSS Animations","UI Design Fundamentals","Intro to clean code"]

function array(course){
    for(let i=0;i<course.length;i++)
    {
        console.log(course[i])
    }
}
array(myCourses)*/

//localstorage
//console.log(localStorage.getItem("myCredits"))

//addeventlistner and object in array
/*let data=[
    {
        player:"jane",
        score:52
    },
    {
        player:"Mark",
        score:41
    }
]
const janeBtn=document.getElementById("jane-btn")
janeBtn.addEventListener("click",function(){
    console.log(data[0].score)
})*/

/*function generateSentences(desc,arr){
    let baseString=`The ${arr.length} ${desc} are `
    for(let i=0;i<arr.length;i++)
    {
        if(i === arr.length-1)
            baseString+=arr[i]
        else
            baseString+=arr[i]+","
    }
    return baseString
}
let sentences=generateSentences("largest countries",["china","india","usa"])
console.log(sentences)
let sentences1=generateSentences("best fruits",["apples","bananas"])
console.log(sentences1)*/

//render images using javascript
/*const imgs=[
    "pic1.webp",
    "pic2.webp",
    "pic3.webp"
]
const con=document.getElementById("container")
console.log(con)
function renderImages(img)
{
    let imgsDOM=""
    for(let i=0;i<img.length;i++)
    {
        imgsDOM+=`<img alt="Employee in the company" class="team-img" src="${img[i]}">`
    }
    con.innerHTML=imgsDOM
}
renderImages(imgs)*/

//rounding numbers
/*const totalPrice=420.69235632455
const btn=document.getElementById("purchase-btn")
btn.textContent=`Buy ${totalPrice}`
btn.addEventListener("click",function()
{
    let value=Number(totalPrice.toFixed(2))
    btn.innerHTML=`Buy ${value}`
})*/

//convert string to numbe
/*const totalPrice1="420.69235632455"
const btn1=document.getElementById("purchase-btn")
btn1.textContent=`Buy ${totalPrice1}`
btn1.addEventListener("click",function()
{
    let value1=Number(totalPrice1).toFixed(2)
    btn1.innerHTML=`Buy ${value1}`
})*/
const inputEl=document.getElementById("input-el")
const convertBtn=document.getElementById("convert-btn")
const outputEl=document.getElementById("output-el")

const ele=[
    "Length(Meter/Feet)",
    "Volume(liters/Gallons",
    "mass(Kilograms/pounds)"
]

convertBtn.addEventListener("click",function(){
    let items=""
    for(let i=0;i<ele.length;i++)
    {
        if(i==0)
        {
            items+=`
                <div class="conversion-box">
                    <h1>${ele[i]}</h1>
                    <p>${inputEl.value} meters = ${inputEl.value * 3.28084} feet</p>
                </div>
            `
        }
        if(i==1)
        {
            items+=`
                <div class="conversion-box">
                    <h1>${ele[i]}</h1>
                    <p>${inputEl.value} liters = ${(inputEl.value * 0.264172).toFixed(2)} gallons</p>
                </div>
            `
        }
        if(i==2)
        {
            items+=`
                <div class="conversion-box">
                    <h1>${ele[i]}</h1>
                    <p>${inputEl.value} kilograms = ${inputEl.value * 2.20462} pounds</p>
                </div>
            `
        }
        
    }
    outputEl.innerHTML=items
})