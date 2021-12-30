import inquirer from "inquirer"
import { initQuestions, gameQuestion } from "./questions.js"
import { Cat, Dog, HousePlant, Pebble } from "./classes.js"

let myPet
let ui = new inquirer.ui.BottomBar()

function concatStats () {

  let stats = Object.entries(myPet)   
  let statsString = ''

  stats.forEach( (element) => {
  if (element[0] !== 'petType' && element[0] !== 'talkResponses') {
    statsString += `${element[0]}: ${element[1]} | `
  }
})

ui.log.write(
  `${statsString}`      
)
}

const init = async () => {

  let response = await inquirer.prompt(initQuestions)

  if (response.type === "Cat") {
    myPet = new Cat(response.name)
  } else if (response.type === "Dog") {
    myPet = new Dog(response.name)
  } else if (response.type === "House Plant") {
    myPet = new HousePlant(response.name)
  } else if (response.type === "Pebble") {
    myPet = new Pebble(response.name)
  }

  concatStats()

  gameLoop()
}

const gameLoop = async () => {
  try {

    myPet.time()

    if (myPet.health < 1) {
      console.log(`Your pet died. It lived to ${myPet.age}`)
      return
    }
  
    let response = await inquirer.prompt(gameQuestion)

    if (response.action === "wash") {
      myPet.wash()
    } else if (response.action === "talk") {
      myPet.talk()
    } else if (response.action === "water") {
      myPet.water()
      // This is a bit annoying to have to specify a pet type property but instanceof returns an error as it's undefined rather than false.
    } else if (response.action === "feed" && myPet.petType === 'Cat' || myPet.petType === 'Dog') {
      myPet.feed()
    } else if (response.action === "sleep" && myPet.petType === 'Cat' || myPet.petType === 'Dog') {
      myPet.sleep()
    } else if (response.action === "play" && myPet.petType === 'Cat' || myPet.petType === 'Dog') {
      myPet.play()
    } else if (response.action === "polish" && myPet.petType === 'Pebble') {
      myPet.polish()
    } else {
      ui.log.write(`Your pet doesn't seem interested in that.`)
    }

    concatStats()

    gameLoop()
  } catch (error) {
    console.log(error)
  }
}

init()