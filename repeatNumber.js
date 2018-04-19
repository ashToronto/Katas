function repeatnumber(data) {
    var result = [];
    for (var i = 0; i < data.length; i++)
    {
        if (Array.isArray(data[i]))
        {
            var x = data[i][0]
            var y = data[i][1]

            var tempResult = " "
            for(var j = 1; j <= y; j++)
            {
                tempResult = tempResult + "" + x;
            }
            result.push(tempResult)
        }

    }
    return result.toString();
}

console.log(repeatnumber([[10, 2], [25,3]]))
console.log(repeatnumber([[1, 2], [2, 3]]))
console.log(repeatnumber([[10, 4], [34, 6], [92, 2]]))







