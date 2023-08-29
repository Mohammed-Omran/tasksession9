// Convert data from String to numder

var text = "10";
var number = +"10";

console.log(number);

// candies Task

var candies = {
  chocolate: 10,
  lollipops: null,
  sourStrips: undefined,
  jellyBeans: 8,
  licorice: null,
};

var gummyBears = 1;

var displayCandies = {
  chocolate: candies.chocolate ?? gummyBears,
  lollipops: candies.lollipops ?? gummyBears,
  sourStrips: candies.sourStrips ?? gummyBears,
  jellyBeans: candies.jellyBeans ?? gummyBears,
  licorice: candies.licorice ?? gummyBears,
};

console.log(displayCandies);

// shawarma Task

var shawarma = {
  meat: 2,
  chick: 3,
};

function getShawarma(name, age) {
  if (age >= 20) {
    console.log(name + ", You 'll get Meet Shawarma Sandwitch");
  } else {
    console.log(name + ",  You 'll get Chicken Shawarma Sandwitch");
  }
}

getShawarma("Mohamed", 21);
getShawarma("Ahmed", 19);

// Task calculate

function calculate(num1, num2, method) {
  if (method === "sum") {
    var result = num1 + num2;
    console.log(result);
  } else if (method === "sub") {
    var result = num1 - num2;
    console.log(result);
  } else if (method === "multi") {
    var result = num1 * num2;
    console.log(result);
  } else if (method === "divide") {
    var result = num1 / num2;
    console.log(result);
  } else {
    console.log("Unknown Method, Try Again");
  }
}

calculate(8, 2, "sum");
calculate(8, 2, "sub");
calculate(8, 2, "multi");
calculate(8, 2, "divide");
calculate(8, 2, "unknown");

//  Exambles switch case

// First Examble

var percentage = 80;
var grade;

switch (true) {
  case percentage >= 85 && percentage <= 100:
    grade = "A";
    break;
  case percentage >= 75 && percentage < 85:
    grade = "B";
    break;
  case percentage >= 65 && percentage < 75:
    grade = "C";
    break;
  case percentage >= 50 && percentage < 65:
    grade = "D";
    break;
  case percentage >= 0 && percentage < 50:
    grade = "F";
    break;
  default:
    grade = "Invalid Value";
}

console.log("The student's grade is:", grade);

// Second Examble

var dayNumber = 3;
var dayName;

switch (dayNumber) {
  case 1:
    dayName = "Saturday";
  case 2:
    dayName = "Sunday";
    break;
  case 3:
    dayName = "Monday";
    break;
  case 4:
    dayName = "Tuesday";
  case 5:
    dayName = "Wednesday";
  case 6:
    dayName = "Thursday";
  case 7:
    dayName = "Friday";

    break;
  default:
    dayName = "Invalid Day";
}

console.log("Today is:", dayName);

// Third examble

var day = "Wednesday";
var activity;

switch (day) {
  case "Friday":
  case "Saturday":
    activity = "weekend";
    break;
  case "Sunday":
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    activity = "A workday";
    break;
  default:
    activity = "Unknown Day";
}

console.log("Today is", activity);

// ternary operator is an abbreviation for if condition

// Exambles ternary operator

// First Examble

let theGender = "Male";

theGender === "Male"
  ? console.log("Mr")
  : theGender === "Female"
  ? console.log("Mrs")
  : console.log("Unknown");

// Second Examble

let theGrade = 90;

theGrade <= 100 && theGrade >= 85
  ? console.log("Your Grade is A")
  : theGrade < 85 && theGrade >= 75
  ? console.log("Your Grade is B")
  : theGrade < 75 && theGrade >= 65
  ? console.log("Your Grade is C")
  : theGrade < 65 && theGrade >= 50
  ? console.log("Your Grade is D")
  : theGrade < 50 && theGrade >= 0
  ? console.log("You Fail")
  : console.log("Unknown");
