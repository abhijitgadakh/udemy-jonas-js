const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgScoreTeam1, avgScoreTeam2) {
  console.log(avgScoreTeam1, avgScoreTeam2);
  if (avgScoreTeam1 >= avgScoreTeam2 * 2) {
    console.log(`"Dolphins win (${avgScoreTeam1} vs. ${avgScoreTeam2})"
    `);
  } else if (avgScoreTeam2 >= avgScoreTeam1 * 2) {
    console.log(`"Koalas win (${avgScoreTeam2} vs. ${avgScoreTeam1})"
    `);
  } else {
    console.log("No team wins!");
  }
};

// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

console.log("For DATA 1");

let scoreDolphins1 = 44;
let scoreDolphins2 = 23;
let scoreDolphins3 = 71;

let scoreKoalas1 = 65;
let scoreKoalas2 = 54;
let scoreKoalas3 = 49;

const avgScoreDolphins = calcAverage(
  scoreDolphins1,
  scoreDolphins2,
  scoreDolphins3
);

const avgScoreKoalas = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

checkWinner(avgScoreDolphins, avgScoreKoalas);

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
console.log("For DATA 2");

scoreDolphins1 = 85;
scoreDolphins2 = 54;
scoreDolphins3 = 41;

scoreKoalas1 = 23;
scoreKoalas2 = 34;
scoreKoalas3 = 27;

const avgScoreDolphins2 = calcAverage(
  scoreDolphins1,
  scoreDolphins2,
  scoreDolphins3
);

const avgScoreKoalas2 = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

checkWinner(avgScoreDolphins2, avgScoreKoalas2);
