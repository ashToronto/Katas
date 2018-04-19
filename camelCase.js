var camelCase = function(input)
{
  var array = input.split(' ');
var newarray = [];

for(var x = 0; x < array.length; x++)
{
  newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
}

var b = newarray.join('');

var pieces = b.split("");

var lower = pieces[0].toLowerCase()

var result = pieces.splice(0,1,lower)

return pieces.join("");
}

console.log(camelCase("this is a string"))
console.log(camelCase("loopy lighthouse"))




