var prompt = require("prompt-sync")();

var input = prompt("Enter a message with a max of 81 characters : ");

var array = []

var type = array.push(input)

var d = array.join()
var e = d.split(' ')
var f = e.join('')

var message = f.split('')

//******************************** CREATING THE RECTANGLE ****************************************

var organize = function(message)
{
  var expect = []
  for (var i = 0; i < message.length; i ++)
  {
    if (i % 5 === 0 && i > 0)
    {
      expect.push("\n")
      expect.push(message[i])
    }
    else
    {
      expect.push(message[i])
    }
  }
  console.log(expect.join(''))

//******************************** ENCRYPTING THE MESSAGE ****************************************

}

//******************************** PRINT RESULT AND THROW OUT GARBAGE ****************************************

if (message.length <= 81)
{
   organize(message)
   console.log(message.length)
}
else
{
  console.log("Message is too long!")
}
