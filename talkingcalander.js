var talkingCalendar = function(date)
{
  //********************* GETTING YEAR **************************

  var cal = date.split("")
  var array = []

  array.push(cal[0],cal[1], cal[2], cal[3])
  var year = array.join('')

    //********************* GETTING AND SETTING MONTH **************************

    var temp = [];
    temp.push(cal[5], cal[6])
    var month = temp.join('')

    switch (month)
    {
      case '01':
      month = 'January';
      break;

      case '02':
      month = 'Febuary';
      break;

      case '03':
      month = 'March';
      break;

      case '04':
      month = 'April';
      break;

      case '05':
      month = 'May';
      break;

      case '06':
      month = 'June';
      break;

      case '07':
      month = 'July';
      break;

      case '08':
      month = 'August';
      break;

      case '09':
      month = 'September';
      break;

      case '10':
      month = 'October';
      break;

      case '11':
      month = 'November';
      break;

      case '12':
      month = 'December';
      break;
    }

    //********************* GETTING AND SETTING DATE **************************

    var ex = [];
      day = ex.push(cal[8], cal[9])
      day = ex.join('')

    //********************* REMOVING 0 FROM DATE **************************

      if (day.charAt(0) === '0')
      {
       day = day.substr(1);
      }


      switch (day)
      {

    //********************* ADDING SUFFIX 'ST' **************************

        case '1':
        day = day + 'st'
        break;

        case '21':
        day = day + 'st'
        break;

        case '31':
        day = day + 'st'
        break;

    //********************* ADDING SUFFIX 'ND' **************************

        case '2':
        day = day + 'nd'
        break;

        case '22':
        day = day + 'nd'
        break;

    //********************* ADDING SUFFIX 'RD' **************************

        case '3':
        day = day + 'rd'
        break;

        case '23':
        day = day + 'rd'
        break

    //********************* ADDING SUFFIX 'TH' **************************

        default:
        day = day + 'th'
        break;
      }

    //********************* LOG RESULT **************************

    console.log(month + ' ' + day + ' ' + year)

}

talkingCalendar("2017/12/02");
talkingCalendar("2007/11/11");
talkingCalendar("1987/08/24");