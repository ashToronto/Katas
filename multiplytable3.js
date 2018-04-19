function multiplicationTable(maxValue) {
  var array = []
  for (var i = 1; i <= maxValue; i++) {
    var t = []
    for (var j = 1; j <= maxValue; j++) {
      t.push(j * i)
    }
    array.push(t)
  }
  return array
}

multiplicationTable(3).forEach(x => console.log(x.join(" ")));