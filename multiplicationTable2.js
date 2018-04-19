function multiplicationTable (maxValue)

{
var result = ' '
var skip = "\n"

//*************************** NUMBERS - CORRECT DIGITS ATM ***************************
for (var i = 0; i <= maxValue; i++)
  {
    var array = []

    for (var j = 0; j <= maxValue; j++)
    {
      if (i > 0 && j > 0)
      {
        result = result + (i*j) + ' ';
        array.push(result)
      }
    }
    result += skip;
  }
return array;

}
console.log(multiplicationTable(3));