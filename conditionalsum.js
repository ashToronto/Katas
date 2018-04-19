function conditionalSum (values, condition)
{
  array = [];

  if (values.length <= 0)
  {
    return 0;
  }

  switch (condition)
  {

//*********************** SEGREGATING EVEN NUMBERS *********************
  case 'even':

    for (var i = 0; i <= values.length; i++)
    {
      var a = values[i]%2
      if (a === 0)
      {
        array.push(values[i])
      }
    }
    var sum = array.reduce((left, right) => left + right);
    return sum
    break;

//*********************** SEGREGATING ODD NUMBERS *********************

   case 'odd':
    for (var j = 0; j <= values.length; j++)
    {
      var b = values[j]%2
      if (b > 0)
      {
        array.push(values[j])
      }
    }
    var sum = array.reduce((left, right) => left + right);
    return sum
    break;
   }

}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));