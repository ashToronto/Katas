var calculateChange = function(total, cash)
{

  //********************************** CALCULATING CHANGE ***********************************

  var array = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var currency = ['Twenty Dollars:', 'Ten Dollars:', ' Five Dollars:', 'Two Dollars:', 'One Dollar:', 'Quarters:', 'Dimes:', 'Nickels:', ' Pennies:']


  var nArray = [];
  var cryo = []

  var tot = cash - total;

  for (var i = 0; i < array.length; i++)
  {
    var N = Math.floor(tot/array[i]);
    tot = tot - (N*array[i])

    nArray.push(N)

    if (N != 0)
    {
      cryo.push(currency[i] +  N + " ")
    }

    if (tot < 0)
    {
      break;
    }
  }

  //********************************** RESULT FORMATING ***********************************

var s = cryo.join() // String format
var result = []
result.push(s) // Array list format

return result.join();

}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


