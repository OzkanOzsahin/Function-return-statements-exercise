
// write a function that checks if a number is bigger than 100

function myFunction(numbers) {
   let n = numbers;



   if (n > 100) {
      console.log("False");
   } else { }
   console.log("True");

}

myFunction(100);

// Brenda the Bouncer Bot; return sentences 
// "come in"
//"it's too busy now, come back later 
// "this is a club for adults"

// Arguments: the maximum number of people in the club
// the current number of people in the club
// the age of the person wanting to enter the club

const getBouncerReaction = function(
   maxVisitors,
   currentVisitors,
   ageOfPotentialVisitor

){
   if (ageOfPotentialVisitor <18){
      return "this is a club for adults";
   } 
   if (currentVisitors >= maxVisitors){
      return "it's too busy now, come back later"; 

} else {
   return "come in";

}
};

console.log(getBouncerReaction(22, 21, 22));
console.log(getBouncerReaction(30,2000, 20));
console.log(getBouncerReaction(100,33,50));
console.log(getBouncerReaction(1000,20,22));

// Calculating the average

const calculateAverage = function(
   number1,
   number2,
   number3,
   number4,
   number5
){
   const total = number1 = number2 + number3 + number4 + number5
   const average = total / 5;
   const averageRounded = Math.round(average);
   return averageRounded;
}

console.log(calculateAverage(2, 4, 4444, 555, 2))
console.log(calculateAverage(2, 2, 33, 2, 500))


