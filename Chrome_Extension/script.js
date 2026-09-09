
/*function click(){
    console.log("Button clicked")
}
click()*/

//so instead of writing onclick in html we can use something different here in js
let myLeads=[]
//let myLeads=`["www.awesomelead.com"]` //this is now a string
//turn the myleads string into an array
//myLeads=JSON.parse(myLeads) //parse converts strings to arrays and we can push into array
//push a new value to the array
//myLeads.push("www.lead2.com")
//turn the array into a string again
//myLeads=JSON.stringify(myLeads)
//log the string using typeof to verity whether it is string or not
//console.log(typeof myLeads)
//let myLeads=["www.awsomelead.com","www.epiclead.com","www.greatlead.com"]
//let inputEl=document.getElementById("input-el")
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
//push the value "www.awesomelead.com" to myArray when the input button is clicked
//myLeads.push("www.awesomelead.com")

const ulEl=document.getElementById("ul-el")
//console.log(ulEl)

//localstorage setup
/*localStorage.setItem("myLeads","www.examplelead.com")
console.log(localStorage.getItem("myLeads"))
localStorage.setItem("myLeads1","www.examplelead1.com")
console.log(localStorage.getItem("myLeads1"))*/
//localStorage.clear()

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage
    renderLeads()
}
//console.log(leadsFromLocalStorage)
inputBtn.addEventListener("click", function(){
    //console.log("Button Clicked")
    //let value=inputEl.textContent
    myLeads.push(inputEl.value)
    //clear out the input field
    inputEl.value=""
    //save the myLeads array to localstorage
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    //console.log(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})

/*let boxBtn=document.getElementById("box-btn")
boxBtn.addEventListener("click",function(){
    console.log("Box clicked")
})

const playerName="Gayathri"
let credits=45

credits=credits-10

//if possible use const, if not use let*/

//let listItems=""
function renderLeads()
{
    let listItems=""
    for(let i=0;i<myLeads.length;i++)
    {
        //console.log(myLeads[i])
        //ulEl.textContent+=myLeads[i] + " "
        //ulEl.textContent+="<li>" + myLeads[i] + "</li>" //here we will render the <li> and 
        //its closing tag also into the page 
        //ulEl.innerHTML+="<li>" + myLeads[i] + "</li>" //manipulating the dom
        //alternative way that doesn't use innerHTML
        //create element
        //set text content
        //append to ul
        /*const li=document.createElement("li")
        li.textContent=myLeads[i]
        ulEl.append(li)*/
        //listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+ myLeads[i] + "</a></li>"
        //template string
        listItems+=`
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        console.log(listItems)
    }
    ulEl.innerHTML=listItems
}

 //dom manipulation has a cost
//create the unordered list and rendering list items
//use .innerHtml to render a Buy! button inside the dv container
/*const Btn=document.getElementById("btn")
Btn.innerHTML="Buy!"*/
//other way to do it
/*const containerEl=document.getElementById("container")
//container.innerHTML="<button>Buy!</button>"

//when clicked render a paragraph under the button (in the container)
//that says "Thank you for buying"
containerEl.innerHTML="<button onclick='buy()'>Buy!</button>"
function buy(){
    containerEl.innerHTML+="<p>Thank you for buying</p>"
}*/

//first template strings / template literals
/*const recipient="jeans"
const sender="Gayathri kalluri"
//const email="Hey " + recipient + "! How is it going? cheers per"
//using templates string
//template string on multiple lines
const email=`
    Hey ${recipient}! 
    How is it going? 
    cheers 
    ${sender}
`
console.log(email)

//converting string to numbers with Number()*/

//use local storage

//truthy and false values
/*const credits=0
//if(credits>0)
//if(credits)
//if("yolo") //truthy value
//if("") //false value
//if(["ex","yx"]) //truthy value
if(true) //truthy value
{
    console.log("Let's play")
}
else{
    console.log("sorry")
}
//truthy
//falsy value -> false, 0, "", null, undefined, Nan
let currentViewers=null
currentViewers=["jane","nick"]
if(currentViewers) console.log("we have viewers1")
currentViewers=null
if(currentViewers) console.log("we have viewers2")

let currentViewersUn
console.log(currentViewersUn) //here we get undefined as output

let currentViewersUn1={}
console.log(currentViewersUn1.randomKey) //undefined

let currentViewersUn2=["jane"]
console.log(currentViewersUn2[5]) //undefined

//checking truthy or falsy
let trueOrFalse =Boolean("Hello")
console.log(trueOrFalse) //true

let trueOrFalse1 =Boolean("")
console.log(trueOrFalse1) //false

console.log(Boolean("")) //false
console.log(Boolean("0")) //true
console.log(Boolean(100)) //true
console.log(Boolean(null)) //false
console.log(Boolean([0])) //true
console.log(Boolean(-0)) //false*/