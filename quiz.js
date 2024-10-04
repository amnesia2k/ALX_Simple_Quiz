"use strict";

/*
let name = "Olatilewa";
let age = 25;
let isStudent = true;
let address = {
  street: "9, Gafaru banire street",
  city: "Egbeda",
  state: "Lagos",
  country: "Nigeria",
};
let hobbies = ["Playing games", "Cooking", "Learining new tech stacks"];
let undefinedVariable;
let nullVariable = null;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(address, typeof address);
console.log(hobbies, typeof hobbies);
console.log(undefinedVariable, typeof undefinedVariable);
console.log(nullVariable, typeof nullVariable);


const userName = window.prompt(`What is your name?`);
const userAge = window.prompt(`What is your age?`);

console.log(userName);
console.log(userAge);

const currentYear = new Date().getFullYear();
const yearOfBirth = currentYear - userAge;

console.log(yearOfBirth);

// alert
window.alert(`Hello ${userName}, your year of birth is ${yearOfBirth}`);
*/

document.addEventListener("DOMContentLoaded", () => {
  function checkAnswer() {
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;

      if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
      }
    }
  }

  document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
});
// checkAnswer();
