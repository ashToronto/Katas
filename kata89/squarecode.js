var prompt = require("prompt-sync")();

var input = prompt("Enter a message with a max 81 characters and minimum of 6: ");

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
      // expect.push("\n") // FOR DISPLAYING TH RECTANLGE
      expect.push(message[i])
    }
    else
    {
      expect.push(message[i])
    }
  }
var rez = expect
//******************************** MAKING SUB ARRAYS ****************************************

  var cubes = []
  var size = 5

  while (rez.length > 0)
  {
    cubes.push(rez.splice(0, size)) // THIS WILL MAKE SUB-ARRAYS
  }

var rectangle = cubes
console.log("The rectangular display is as follows: \n")
  for (var i = 0; i < rectangle.length; i ++)
  {
    console.log(rectangle[i])
  }

//******************************** ENCRYPTING THE MESSAGE ****************************************

   var rectangle = cubes[0].reduce((a, c, i1) => a.concat(cubes.map((s, i2) => s[i1])), []).join("");


    var encryption = rectangle.match(/.{1,5}/g);

    console.log("Your encryption is as follows: \n" + encryption.join(' '));

}
//******************************** PRINT RESULT AND THROW OUT GARBAGE ****************************************

if (message.length <= 81)
{
   organize(message)
}
else
{
  console.log("Message is too long!")
}
