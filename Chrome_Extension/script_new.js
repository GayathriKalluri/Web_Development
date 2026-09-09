//when we refresh the page the content will still be there on page
/*let myLeads = [] // []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick",function(){ // when we click twice we have to use dblclick
    console.log("double clicked")
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)

    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}*/

//function parameters for better readabilty
let myLeads = [] // []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")


if(leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

/*const tabs=[
    {url:"https://www.linkedin.com/in/gayathrikalluri/"}
]*/

//moto is to save the linkedin tab
tabBtn.addEventListener("click",function(){
    //grab the url of current tab
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    //console.log(tabs[0].url) //loging the value
    //save the url in local storage
    
})

deleteBtn.addEventListener("dblclick",function(){ // when we click twice we have to use dblclick
    console.log("double clicked")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)

    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads) //function arguments
})

function render(leads) { //function parameters
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

//write first function parameter
/*const welcomeEl=document.getElementById("welcome-el")
function getUser()
{
    console.log("user")
    welcomeEl.textContent="welcome back, Gayathri"
}
getUser()

function getUser1(name)
{
    console.log("user")
    welcomeEl.textContent="welcome back, " + name
}
getUser1("gayathri")

//functions with multiple parameters
function getUser2(name,greeting)
{
    console.log("user")
    welcomeEl.textContent=greeting +" "+ name
}
getUser2("gayathri","welcome")

//using template literals
function getUser3(name,greeting)
{
    console.log("user")
    welcomeEl.textContent=`${greeting} ${name}`
}
getUser3("gayathri","welcome")

//numbers as function parameters
function add(num1,num2) //parameters
{
    return num1+num2
}
console.log(add(3,4)) //7 //arguments
console.log(add(9,102)) //111

//arguments vs parameters

//arrays as parameters
function getFirst(arr)
{
    return arr[0]
}
//let nums=[1,2,3,4,5]
//console.log(getFirst(nums))
console.log(getFirst([6,2,3,4,5]))*/