// Player information variables
let name = undefined
let health = 100

// Question variables
let inQuestion = false
let qustionNumber = 0
let questions = ["What is the capital of England?"]
let answers = ["london"]

// When the browser widow loads it will call the generateWelcomeMessage() function
window.onload = function() {
  generateWelcomeMessage()
}

// Shows a welcome message to the user
function generateWelcomeMessage() {
  let output = document.getElementById("output").innerHTML
  output = "Hello player! Please enter your character name:"
}

function yourAnswer() {
    let answer = document.getElementById("answer").value
    let output = document.getElementById("output").innerHTML
    let correctAnswer = answers[qustionNumber]

    if(name === undefined) {
        name = answer
        output =  output + "</br></br>" + "Welcome " + name + "! You have " + health + " health."
        output =  output + "</br></br>" + "You enter the courtyard and look around. You are surrounded by a high wall and there is a door at the end of the yard. A man gaurds the door. Do you want to fight the name or sneak round."
        setUpInfo(name)
    } else if(inQuestion && answer.toLowerCase() === correctAnswer) {
        output =  output + "</br></br>" + "You beat the man in a fight!"
        qustionNumber++
        inQuestion = false
    } else if(inQuestion && answer.toLowerCase() !== correctAnswer) {
        output =  output + "</br></br>" + "You tried to fight the man but he is too strong..."
        health = health - 20
        inQuestion = false
        setUpInfo()
    } else if (answer.toLowerCase() === 'fight') {
      inQuestion = true
      output =  output + "</br></br>" + "You have chosen to fight the man. You must answer a question correctly to beat him."
      output =  output + "</br></br>" + questions[qustionNumber]
    } else if (answer.toLowerCase() === 'sneak') {
      output =  output + "</br></br>" + "You have snuck around the man."
    } else {
      alert('Sorry I do not understand your answer, please try again!')
    }
}

// Assigns values to the player variables and shows them to the user
function setUpInfo() {
  document.getElementById("infoContainer").style.display = "block"
  document.getElementById("name").innerHTML = "Name: " + name
  document.getElementById("health").innerHTML = "Health: " + health
}


