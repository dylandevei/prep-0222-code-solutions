function addTwoNumbers(x, y) {
  return x + y;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Excercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Excercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var getGreetingResult = getGreeting('World');
console.log('getGreetingResult Excercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Excercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Excercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Excercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return (radius + radius) * Math.PI;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Excercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName Excercise:', getFullNameResult);

function cube(number) {
  return (number * number * number);
}

var cubeResult = cube(5);
console.log('cube Excercise:', cubeResult);
