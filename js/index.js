// on page load, show first 50 monsters

//each monster's name, age, and description should be shown.

//agove your list of monsters, have a form to create a new monster, save to API

//at end of monsters, show a button, when clicked, it should load the next 50 monsters. 

const monsterAPI = 'http://localhost:3000/monsters'
const monsterContainer = document.getElementById("monster-container")




function createMonsterForm() {
    const createMonsterForm = document.createElement("form")
    createMonsterForm.id = "monster-form"

    const monsterInput = dcoument.createElement("input")
    monsterInput.placeholder = "Monster name"


}

fetch(monsterAPI+"?_limit=50")
    .then(res => res.json())
    .then(function(monsterArr){
        monsterArr.forEach(function(monsterObj){
            turnMonsterToCard(monsterObj)
        })
    })

function turnMonsterToCard(monster) {
    let monsterCardDiv = document.createElement('div')
    monsterCardDiv.className = "card"

    let monsterNameH2 = document.createElement('h2')
    monsterNameH2.innerText = monster.name

    let monsterAgeH4 = document.createElement('h4')
    monsterAgeH4.innerText = monster.age

    let monsterDescP = document.createElement('p')
    monsterDescP = monster.description

    monsterCardDiv.append(monsterNameH2,monsterAgeH4,monsterDescP)
    monsterContainer.append(monsterCardDiv)

}