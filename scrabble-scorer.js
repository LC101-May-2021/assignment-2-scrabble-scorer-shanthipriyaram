// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word="";
function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   word = input.question("Enter a word to score: ");
   let wordPoints = oldScrabbleScorer(word);
   console.log(wordPoints);
};

let simpleScore = function (word) {
  return word.length;
 };
//let simpleWord=simpleScore("mango");
//console.log(simpleWord);

let vowelBonusScore = function (word) {
  let points=0;
  let vowel= "aeiou";
  for (i = 0;i < word.length;i++){
    if(vowel.includes(word[i].toLowerCase())){
    points += 3;
    } else {
    points += 1}
    }
  return points;
};
//console.log(vowel("come"));
let scrabbleScore = function(word){
  // word=word.toLowerCase();
   let score = 0;
   for (let i = 0; i< word.length; i++){
     score += newPointStructure[word[i]]
   }
 	return score;
 };

const scoringAlgorithms = [
  {
    name : 'Simple Score',
    description : 'Each letter is 1 point',
    scoringFunction: simpleScore
  },
  {
    name : 'Bonus Vowels',
    description : 'Vowels are 3 pts, consonants are 1 pt',
    scoringFunction: vowelBonusScore
  },
  {
    name : 'Scrabble',
    description : 'The traditional scoring algorithm',
    scoringFunction: scrabbleScore
  }
];
//console.log("algorithm name: ", scoringAlgorithms[0].name);
//console.log("scorerFunction result: ", scoringAlgorithms[0].scoringFunction("JavaScript"));

function scorerPrompt() {
  userInput = input.question("Enter a word to score: ");
  userAlgorithm = input.question(`Which scoring algorithm would you like to use?
  
  0 - Simple: One point per character
  1 - Vowel Bonus: Vowels are worth 3 points
  2 - Scrabble: Uses scrabble point system
  Enter 0, 1, or 2: `);
  if (userAlgorithm == 0) {
    console.log(`Score for ${userInput} : ${simpleScore(userInput)}`) //scoringAlgorithms.scoringFunction(userInput)
  } else if (userAlgorithm == 1) {
    console.log(`Score for ${userInput} : ${vowelBonusScore(userInput)}`)
  } else if (userAlgorithm == 2) {
    console.log(`Score for ${userInput} : ${scrabbleScore(userInput)}`)
  }
}


function transform(oldStructure){
 const newPoint={};
  for(let score in oldStructure){
    let array = oldStructure[score];
    for(let i = 0;i<array.length;i++){
      val1=array[i].toLowerCase();
      //console.log(val1);
      newPoint[val1]= Number(score);
    }
    }
    return newPoint;
}


let newPointStructure = transform(oldPointStructure) ;
console.log(newPointStructure);
function runProgram() {
  //let word =initialPrompt();
  scorerPrompt();
  scrabbleScore();
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};