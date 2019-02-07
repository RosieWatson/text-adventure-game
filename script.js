let name = undefined
let health = 100
let inQuestion = false
let round = 0
let qustionNumber = 0
let roundDescriptions = [
  {
    description: ''
  }
]
let questions = [
    {
        question: "What is the capital of England?",
        answer: "london"
    }
]

window.onload = function() {
  generateWelcomeMessage()
}

function generateWelcomeMessage() {
  let output = document.getElementById("output")
  output.innerHTML = "Hello player! Please enter your character name:"
}

function yourAnswer() {
    let answer = document.getElementById("answer").value
    let output = document.getElementById("output")
    if (name === undefined) {
        name = answer
        output.innerHTML =  output.innerHTML + "</br></br>" + "Welcome " + name + "! You have " + health + " health."
        output.innerHTML =  output.innerHTML + "</br></br>" + "You enter the courtyard and look around. You are surrounded by a high wall and there is a door at the end of the yard. A man gaurds the door. Do you want to fight the name or sneak round."
        setUpInfo()
      } else  if (inQuestion) {
      let correctAnswer = questions[qustionNumber].answer
      if (answer.toLowerCase() === correctAnswer) {
        output.innerHTML =  output.innerHTML + "</br></br>" + "You beat the man in a fight!"
        qustionNumber++
        inQuestion = false
      } else {
        output.innerHTML =  output.innerHTML + "</br></br>" + "You tried to fight the man but he is too strong..."
        health = health - 20
        setUpInfo()
        inQuestion = false
      }
    } else if (answer.toLowerCase() === 'fight') {
      inQuestion = true
      output.innerHTML =  output.innerHTML + "</br></br>" + "You have chosen to fight the man. You must answer a question correctly to beat him."
      output.innerHTML =  output.innerHTML + "</br></br>" + questions[qustionNumber].question
    } else if (answer.toLowerCase() === 'sneak') {
      output.innerHTML =  output.innerHTML + "</br></br>" + "You have snuck around the man."
    } else {
      alert('Sorry I do not understand your answer, please try again!')
    }
}

function setUpInfo() {
  document.getElementById("infoContainer").style.display = "block"
  document.getElementById("name").innerHTML = "Name: " + name
  document.getElementById("health").innerHTML = "Health: " + health
}


