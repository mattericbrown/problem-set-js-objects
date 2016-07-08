/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/
//148

// YOUR CODE HERE
function daysUntilDate(date){
  var milisecondsBetween = new Date(date) - Date.now();
  var difBetweenDate = Math.round(milisecondsBetween / 86400000);
  return difBetweenDate;
}

function birthdayReminder(birth){
  var result = [];
  for (var i = 0; i < birth.length; i++){
   var doB = birth[i].dob.split("/");
   doB[2] = "2016";
   dobNow ="'" + doB[0] + "/" + doB[1] + "/" + doB[2] + "'";
   console.log(doB);
   console.log(dobNow);
   var numOfDays = daysUntilDate(dobNow);
   if (numOfDays < 0) {
     numOfDays += 365;
   }
   var reminder = birth[i].name + "'s birthday is in " + numOfDays + " days";
   result.push(reminder);
   console.log(numOfDays);
  }
  return result;
}
birthdayReminder([
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
]);
