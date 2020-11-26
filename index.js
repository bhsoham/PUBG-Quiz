var readlineSync = require("readline-sync");
const chalk = require('chalk');

const title=chalk.redBright.bold;
const subTitle=chalk.yellow;
const questionColor=chalk.cyanBright;
const optionColor=chalk.yellowBright;

var score = 0;

var userName=readlineSync.question(title("What is your name?\n"));

console.log(subTitle.bgBlack.bold("\n\nWELCOME",userName.toUpperCase(), "to the",questionColor.bold.underline("PUBG MOBILE"),"TRIVIA QUIZ\n"));
console.log(title.underline.bold("\nINSTRUCTIONS:") ,optionColor("\n\n1. This quiz contains 10 questions\n2. +1 for correct answer, +0 for incorrect answer\n3. Enter the option alphabet only\n4. Press ENTER to proceed"));
console.log("\n----------------------------------\n")

function play(question, answer) {
  var userAnswer = readlineSync.question(questionColor(question));
  if (userAnswer.toUpperCase() === answer) {
    console.log(subTitle("\nRIGHT!"));
    score++;

  } else {
    console.log(title("\nWRONG!"),subTitle("The correct answer is",answer));
  }
  console.log(optionColor("Your current score is: ", score,"\n"));
  console.log("\n---------------------------\n");
}


  var questions = [{
    question: "1. What is the full form of PUBG?\n\nA) PlayersUnited Battlegrounds\nB) PlayersUnited Battle Game\nC) PlayerUnknown's Battlegrounds\nD) PlayerUnknown's Battle Game\n\nAnswer: ",
    answer: "C",
  }, {
    question: "2. Which is the strongest melee item in PUBG?\n\nA) Crowbar\nB) Pan\nC) Sickle\nD) Machete\n\nAnswer: ",
    answer: "B",
  }, {
    question: "3. Which of the following is NOT a map in PUBG?\n\nA) Haven\nB) Vikendi\nC) Miramar\nD) Livik\n\nAnswer: ",
    answer: "A",
  }, {
    question: "4. Which of the following countries has banned PUBG?\n   *developer cries in a corner*\n\nA) USA\nB) South Korea\nC) India\nD) Thailand\n\nAnswer: ",
    answer: "C",
  }, {
    question: "5. Which PUBG Mobile Org was NOT one of the first teams to represent India at a global stage?\n\nA) Team IND\nB) Fnatic\nC) 8BIT\nD) All of the above\n\nAnswer: ",
    answer: "B",
  }, {
    question: "6. What's the top speed you can achieve while diving from the aircraft?\n\nA) 100 km/hr\nB) 123 km/hr\nC) 200 km/hr\nD) 234 km/hr\n\nAnswer: ",
    answer: "D",
  }, {
    question: "7. Which of the following is an Automatic Rifle (AR)?\n\nA) Uzi\nB) P18C\nC) M416\nD) DP28\n\nAnswer: ",
    answer: "C",
  }, {
    question: "8. What is the largest time period for which PUBG can ban a player?\n\nA) 2 years\nB) 10 years\nC) 50 years\nD) 100 years\n\nAnswer: ",
    answer: "D",
  }, {
    question: "9. Which of the following best describes PUBG as a game?\n\nA) Simulation\nB) Battle Royale\nC) Adventure\nD) Puzzle\n\nAnswer: ",
    answer: "B",
  }, {
    question: "10.What is the highest tier/rank achievable in PUBG?\n\nA) Conqueror\nB) Professional\nC) Platinum\nD) Superhero\n\nAnswer: ",
    answer: "A",
  }]

  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }

  console.log(subTitle("YAY! Your final score is: ", score,"/ 10"))
  console.log("\n--------------------------------")

  var highScores = [{
    name: "Khushi (beta-tester)",
    highScore: 10,
  },{
    name: "Soubhagya",
    highScore: 9,
  },{
    name: "Proma (beta-tester)",
    highScore: 9,
  },{
    name: "Saurav",
    highScore: 8,
  },{
    name: "Jagari",
    highScore: 7,
  },{
    name: "Shivansh",
    highScore: 7,
  },{
    name: "Arthita",
    highScore: 4,
  }]

  console.log(title.underline("\nHighscores:"));

  for (var j = 0; j < highScores.length; j++) {
    var currentHighScorer = highScores[j];
    var min=highScores[0].highScore;
    if(currentHighScorer.highScore<=min){
      min=currentHighScorer.highScore;
    }
    console.log(questionColor("\nName:"), currentHighScorer.name, questionColor(" \nScore:"), currentHighScorer.highScore);
  }
  
  if (score >= min) {
    console.log(optionColor("\nCONGRATULATIONS! You are a new high scorer!"));
    console.log(subTitle("Send this screenshot to  be added to the list."));
  }
  else{
    console.log(optionColor("\nTry again to beat the highscorers!"))
  }

