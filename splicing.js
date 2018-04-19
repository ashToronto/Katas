function multiplicationTable (maxValue)

{
var result = ' '
var skip = "\n"
var bar = '+ -- +'

  var array = []

  for (var i = 1; i <= maxValue; i++)
  {
    var n = []

    for (var j = 1; j <= maxValue; j++)
    {
      if (j >= 1 && i >= 1)
      {
        array.push('| ' + j*i + ' | ')
      }
    }

    for (var a = 0; a < maxValue; a ++)
    {
      n = bar + result
      array.push(n)
    }
  }

var combi = array

//********************************** BARS AND SQURES **************************

var pie = []
var arr = "\n"
var count = maxValue;

for (var a = 0; a <= combi.length; a++)
{
    pie.push(combi[a])

  if (a === count - 1)
  {
    pie.push(arr)
    count += maxValue
  }
}

var click = pie.join('')

//********************************** SPACING SPLITTING SPLICING **************************


return click;

}
console.log(multiplicationTable(3));