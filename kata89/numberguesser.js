var prompt = require("prompt-sync")();

  var history = []
  var answer = prompt("Guess a number: ");

  var randomNumber = Math.random()*100
  var random = Math.round(randomNumber)
  console.log("For testing purposes, the random number generated is: " + random)

  var count = 0;

  while (answer !== random)
  {
       if (answer > random && Number.isInteger(random))
      {
        console.log("number too high")
        answer = prompt("Guess again: ")
        count ++
        history.push(answer)
      }
      else if (answer < random && Number.isInteger(random))
      {
        console.log("number too low")
        answer = prompt("Guess again: ")
        count ++
        history.push(answer)
      }
      else if (isNaN(answer))
      {
        console.log("not a number")
        answer = prompt("Guess again: ")
      }
      else
      {
        count ++
        return console.log(answer + " is the correct answer! It took you: " + count + " tries")
      }
  }