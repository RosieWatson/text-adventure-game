// Player information variables
let name = undefined
let health = 100

// Question variables
let inQuestion = false
let qustionNumber = 0
let questions = ["What is the capital of England?", "What colour is an apple?", "How many wives did Henry VIII have?"]
let answers = ["london", "red", "6"]

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
        output.innerHTML =  output.innerHTML + "</br></br>" + "You enter the courtyard and look around. You are surrounded by a high wall and there is a door at the end of the yard. A man guards the door. Do you want to fight the man or sneak round."
        setUpInfo()
    } else if(inQuestion) {
      questionAnswered(answer)
    } else if (answer.toLowerCase() === 'fight') {
      askQuestion()
    } else if (answer.toLowerCase() === 'sneak' || answer.toLowerCase() === 'exit') {
      output.innerHTML =  output.innerHTML + "</br></br>" + "Thank you for playing."
    } else {
      alert('Sorry I did not understand your answer, please try again!')
    }
}

// Assigns values to the player variables and shows them to the user
function setUpInfo() {
  document.getElementById("infoContainer").style.display = "block"
  document.getElementById("name").innerHTML = "Name: " + name
  document.getElementById("health").innerHTML = "Health: " + health
}

// Checks the answer the user gave to see if it is correct or not
function questionAnswered(answer) {
  let correctAnswer = answers[qustionNumber]

  if (answer.toLowerCase() === correctAnswer) {
    output.innerHTML =  output.innerHTML + "</br></br>" + "You beat the man in a fight!"
    qustionNumber++
    inQuestion = false
  } else if(answer.toLowerCase() !== correctAnswer && health > 0) {
    output.innerHTML =  output.innerHTML + "</br></br>" + "You tried to fight the man but he is too strong..."
    health = health - 20
    setUpInfo()
  } else {
    // maybe out of question and show end screen?
  }
}

// Prints out the next question for the user
function askQuestion() {
  inQuestion = true
  output.innerHTML =  output.innerHTML + "</br></br>" + "You have chosen to fight the man. You must answer a question correctly to beat him."
  output.innerHTML =  output.innerHTML + "</br></br>" + questions[qustionNumber]
}