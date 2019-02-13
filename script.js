// Player information variables
let name = undefined
let health = 100

// Question variables
let inQuestion = false
let qustionNumber = 0
let roundNumber = 0
let descriptions = [
  "You enter the courtyard and look around. You are surrounded by a high wall and there is a door at the end of the yard. A man guards the door. Do you want to fight the man or sneak round?",
  "There is a snake in your path, do you want to befriend or ignore him?",
  "The castle is surrounded by a moat. Do you jump the moat or turn around?"
]
let actions = [
  "You have chosen to fight the man. You must answer a question correctly to beat him.",
  "You have chosen to befriend the snake. To be his friend you have to answer this question.",
  "You have chosen to jump the moat, to make it across you must answer this question."
]
let failMessages = [
  "You tried to fight the man but he is too strong...",
  "You were wrong, the snake bites your foot!",
  "You fell in the water! Get out and try again."
]
let winMessage = [
  "You beat the man in a fight!",
  "The snake is joining you for this quest!",
  "You made it across!"
]
let questions = [
  "What is the capital of England?",
  "What colour is an apple?",
  "How many wives did Henry VIII have?"
]
let answers = [
  "london",
  "red",
  "6"
]

// When the browser widow loads it will call the generateWelcomeMessage() function
window.onload = function() {
  generateWelcomeMessage()
}

// Shows a welcome message to the user
function generateWelcomeMessage() {
  let output = document.getElementById("output")
  output.innerHTML = "Hello player! Please enter your character name:"
}

function inputText() {
    let answer = document.getElementById("answer").value
    let output = document.getElementById("output")

    if(name === undefined) {
        name = answer
        output.innerHTML =  output.innerHTML + "</br></br>" + "Welcome " + name + "! You have " + health + " health."
        output.innerHTML =  output.innerHTML + "</br></br>" + descriptions[roundNumber]
        setUpInfo()
    } else if(inQuestion) {
      questionAnswered(answer)
    } else if (answer.toLowerCase() === 'fight' || answer.toLowerCase() === 'befriend' || answer.toLowerCase() === 'jump') {
      askQuestion()
    } else if (answer.toLowerCase() === 'sneak' || answer.toLowerCase() === 'ignore' || answer.toLowerCase() === 'turn around') {
      output.innerHTML =  output.innerHTML + "</br></br>" + "Thanks for playing! Goodbye."
    } else {
      alert('Sorry I did not understand your answer, please try again!')
    }

    if (health <= 0) losingSequence()
}

// Assigns values to the player variables and shows them to the user
function setUpInfo() {
  document.getElementById("infoContainer").style.display = "block"
  document.getElementById("name").innerHTML = "Name: " + name
  document.getElementById("health").innerHTML = "Health: " + health + "</br>"

  for (i=health; i > 0; i=i-20) {
    document.getElementById("health").innerHTML = document.getElementById("health").innerHTML + '<img src="https://img.icons8.com/material/24/000000/like.png">'
  }
}

// Checks the answer the user gave to see if it is correct or not
function questionAnswered(answer) {
  let correctAnswer = answers[qustionNumber]

  if (answer.toLowerCase() === correctAnswer) {
    output.innerHTML =  output.innerHTML + "</br></br>" + winMessage[roundNumber]

    inQuestion = false
    nextRound()
  } else {
    output.innerHTML =  output.innerHTML + "</br></br>" + failMessages[roundNumber]
    output.innerHTML =  output.innerHTML + "</br></br>" + "Please try again!"

    health = health - 20
    setUpInfo()
  }

  qustionNumber++
}

// Prints out the next question for the user
function askQuestion() {
  inQuestion = true
  output.innerHTML =  output.innerHTML + "</br></br>" + actions[roundNumber]
  output.innerHTML =  output.innerHTML + "</br></br>" + questions[qustionNumber]
}

// Checks if the user has won or if it needs to load the next round
function nextRound() {
  roundNumber = roundNumber + 1

  if (roundNumber > 2 && health > 0) {
    winningSequence()
  } else {
    output.innerHTML =  output.innerHTML + "</br></br>" + descriptions[roundNumber]
  }
}

// Prints the winning message for the user
function winningSequence() {
  output.innerHTML =  output.innerHTML + "</br></br>" + "Congratulations you have beat the quest and made it into the castle!"
}

// Prints the losing message for the user
function losingSequence() {
  output.innerHTML =  output.innerHTML + "</br></br>" + "You have not manage to complete the quest... Try again later"
}
