var caseMakerII = function(input, font)
{
var array = input.split(' ')

var newarray = []
var rez = []
var tier = []



// **************************************CALLBACK FUNCTIONS FONT ********************************

      var camel = function()
      {
        for(var x = 0; x < array.length; x++)
              {
                newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
              }

              var b = newarray.join('');

              var pieces = b.split("");

              var lower = pieces[0].toLowerCase()

              var result = pieces.splice(0,1,lower)

              rez.push(pieces.join(""))
      }


        var pascal = function()
        {
          for(var x = 0; x < array.length; x++)
              {
                newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
              }
              var b = newarray.join('');

              var pieces = b.split("");

              var upper = pieces[0].toUpperCase()

              var result = pieces.splice(0,1,upper)

              rez.push(pieces.join(""))
        }

        var snake = function()
        {
          var array = input.split("")
            for(var x = 0; x < array.length; x++)
                  {
                    newarray.push(array[x]);
                    if (array[x] === ' ')
                    {
                      newarray.push("_")
                    }
                  }
                    var pieces = newarray.join(" ").replace(/\s/g,'')
                    rez.push(pieces)
        }

        var kebab = function()
        {
          var array = input.split("")
            for(var x = 0; x < array.length; x++)
                  {
                    newarray.push(array[x]);
                    if (array[x] === ' ')
                    {
                      newarray.push("-")
                    }
                  }

                    var pieces = newarray.join(" ").replace(/\s/g,'')
                    rez.push(pieces);
        }

       var title = function()
       {
          for(var x = 0; x < array.length; x++)
              {
                newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
              }
              var b = newarray.join(' ');

              var pieces = b.split("");

              var upper = pieces[0].toUpperCase()

              var result = pieces.splice(0,1,upper).join("")

              rez.push(pieces.join(""))
       }

// **************************************TIER 1 PRIORITY ********************************

var ft = font.toString()

if (ft === 'camel')
{
  camel()
  tier.push(rez.join())
}
else if (ft === 'pascal')
{
  pascal()
  tier.push(rez.join())
}
else if (ft === 'snake')
{
  snake()
  tier.push(rez.join())
}
else if (ft === 'kebab')
{
  kebab()
  tier.push(rez.join())
}
else if (ft === 'title')
{
  title()
  tier.push(rez.join())
}
else if (ft === 'vowel')
  {
    var array = input.split("")
    for (var i = 0; i <= array.length; i++)
      {
        if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u')
        {
          newarray.push(array[i].toUpperCase(array[i]))
        }
        else
        {
          newarray.push(array[i])
        }
      }
      return newarray.join('')
  }

else if (ft === 'consonant')
{
  var array = input.split("")
   for (var i = 0; i <= array.length; i++)
    {
      if (array[i] === 'b' || array[i] === 'c' || array[i] === 'd' || array[i] === 'f' || array[i] === 'g' || array[i] === 'h' || array[i] === 'j'|| array[i] === 'k' || array[i] === 'l' || array[i] === 'm' || array[i] === 'n' || array[i] === 'p' || array[i] === 'q' || array[i] === 'r' || array[i] === 's' || array[i] === 't' || array[i] === 'v' || array[i] === 'w' || array[i] === 'x' || array[i] === 'y' || array[i] === 'z')
      {
        newarray.push(array[i].toUpperCase())
      }
      else
      {
        newarray.push(array[i])
      }
    }
    return newarray.join('')
}


// **************************************TIER 2 VOWELS CONSONANTS UPPER LOWER ********************************

var secondary = tier.join()
var style = []
var theme = []


var vowel = function(alpha)
 {
    x = tier.join('')
    var alpha = x.split("")
    var result = []

    for (var i = 0; i <= alpha.length; i++)
    {
      if (alpha[i] === 'a' || alpha[i] === 'e' || alpha[i] === 'i' || alpha[i] === 'o' || alpha[i] === 'u')
      {
        result.push(alpha[i].toUpperCase(alpha[i]))
      }
      else
      {
        result.push(alpha[i])
      }
    }
    return result.join('')
 }

var consonant = function (alpha)
{
  x = tier.join('')
    var alpha = x.split("")
    var result = []

    for (var i = 0; i <= alpha.length; i++)
    {
      if (alpha[i] === 'b' || alpha[i] === 'c' || alpha[i] === 'd' || alpha[i] === 'f' || alpha[i] === 'g' || alpha[i] === 'h' || alpha[i] === 'j'|| alpha[i] === 'k' || alpha[i] === 'l' || alpha[i] === 'm' || alpha[i] === 'n' || alpha[i] === 'p' || alpha[i] === 'q' || alpha[i] === 'r' || alpha[i] === 's' || alpha[i] === 't' || alpha[i] === 'v' || alpha[i] === 'w' || alpha[i] === 'x' || alpha[i] === 'y' || alpha[i] === 'z')
      {
        result.push(alpha[i].toUpperCase())
      }
      else
      {
        result.push(alpha[i])
      }
    }
    return result.join('')
}

if (Array.isArray(font) === true)
{
      var a = font.slice(0,1)
      var b = style.push(a)
      var firstCase = style.join('')

      var c = font.slice(1,2)
      var d = theme.push(c)
      var nextCase = theme.join('')

    // ****************************** SNAKE ********************************

      if (firstCase === 'upper' && nextCase === 'snake')
      {
        snake()
        tier.push(rez.join().toUpperCase())
        return tier.join()
      }
      else if (firstCase === 'lower' && nextCase === 'snake')
      {
        snake()
        tier.push(rez.join().toLowerCase())
        return tier.join()
      }
      else if (firstCase === 'vowel' && nextCase === 'snake')
      {
        snake()
        var x = tier.push(rez.join())
        return vowel()
      }
      else if (firstCase === 'consonant' && nextCase === 'snake')
      {
        snake()
        var x = tier.push(rez.join())
        return consonant()
      }

    // ****************************** KEBAB ********************************

    else if (firstCase === 'upper' && nextCase === 'kebab')
    {
      kebab()
      tier.push(rez.join().toUpperCase())
      return tier.join()
    }
    else if (firstCase === 'lower' && nextCase === 'kebab')
    {
      kebab()
      tier.push(rez.join().toLowerCase())
      return tier.join()
    }
    else if (firstCase === 'vowel' && nextCase === 'kebab')
    {
      kebab()
      tier.push(rez.join())
      return vowel()
    }
    else if (firstCase === 'consonant' && nextCase === 'kebab')
    {
      kebab()
      tier.push(rez.join())
      return consonant()
    }

    // ****************************** CAMEL ********************************
    else if (firstCase === 'upper' && nextCase === 'camel')
    {
      camel()
      tier.push(rez.join())
      return tier.join()
    }
    else if (firstCase === 'lower' && nextCase === 'camel')
    {
      camel()
      tier.push(rez.join())
      return tier.join()
    }
    else if (firstCase === 'vowel' && nextCase === 'camel')
    {
      camel()
      tier.push(rez.join())
      return vowel()
    }
    else if (firstCase === 'consonant' && nextCase === 'camel')
    {
      camel()
      tier.push(rez.join())
      return consonant()
    }
    // ****************************** TITLE ********************************
   else if (firstCase === 'upper' && nextCase === 'title')
    {
      title()
      tier.push(rez.join())
      return tier.join()
    }
    else if (firstCase === 'lower' && nextCase === 'title')
    {
      title()
      tier.push(rez.join())
      return tier.join()
    }
    else if (firstCase === 'vowel' && nextCase === 'title')
    {
      title()
      tier.push(rez.join())
      return vowel()
    }
    else if (firstCase === 'consonant' && nextCase === 'title')
    {
      title()
      tier.push(rez.join())
      return consonant()
    }
      // ****************************** PASCAL ********************************
  else if (firstCase === 'upper' && nextCase === 'pascal')
    {
      pascal()
      tier.push(rez.join())
      return tier.join()
    }
    else if (firstCase === 'lower' && nextCase === 'pascal')
    {
      pascal()
      tier.push(rez.join())
      return tier.join()
    }
    else if (firstCase === 'vowel' && nextCase === 'pascal')
    {
      pascal()
      tier.push(rez.join())
      return vowel()
    }
    else if (firstCase === 'consonant' && nextCase === 'pascal')
    {
      pascal()
      tier.push(rez.join())
      return consonant()
    }

}

else if (Array.isArray(font) === false)
  {
    return secondary;
  }


}

console.log(caseMakerII("this is a string", "camel"))
console.log(caseMakerII("this is a string", "pascal"))
console.log(caseMakerII("this is a string", "snake"))
console.log(caseMakerII("this is a string", "kebab"))
console.log(caseMakerII("this is a string", "title"))
console.log(caseMakerII("this is a string", "vowel"))
console.log(caseMakerII("this is a string", "consonant"))

console.log(caseMakerII("this is a string", ["upper", "snake"]))


