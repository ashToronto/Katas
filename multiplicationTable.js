
function multiplicationTable (maxValue)
{
// *********************************MULTI-D-ARRAY DIGITS**************************

  var array = []

  var top = maxValue * maxValue

  var barspace = maxValue + 1

  if (maxValue === 1)
  {
    var up = "+---+\n"
    var mid = "| 1 |\n"
    var bottom = "+---+"

    array.push(up + mid + bottom)
    return array.join()
  }

  for (var i = 1; i <= maxValue; i++)
  {
    var sqr = []
    var tmp = []

     for (var j = 1; j < top; j++)
    {
      if (j < barspace && i < barspace)
      {
        if (j === 1)
          {
            tmp.push("| ")
          }
        tmp.push(j*i)

        if ((i*j) >= 100)
          {
            tmp.push(" | ")
            sqr.push("+-----")
          }
        else if ((j*i) > 9)
          {
            tmp.push("  | ")
            sqr.push("+-----")
          }
        else if ((j*i) < 100)
          {
            tmp.push("   | ")
            sqr.push("+-----")
          }
      }

      else if (j === barspace)
        {
          tmp.push("\n")
          sqr.push("+")
          sqr.push("\n")
        }
    }

    var c = tmp.join("")
    var d = array.push(c) // PUSH ARRAY INTO ARRAY
    var e = sqr.join("")
    var f = array.push(e)
  }

    var combi = array.splice(0,0, e).join("")
    var result = array.join("")


// ********************************* MATCH  **************************

    return result;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));



