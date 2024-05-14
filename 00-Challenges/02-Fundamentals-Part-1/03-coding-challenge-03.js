let scoreDolphins1 = 96;
let scoreDolphins2 = 108;
let scoreDolphins3 = 89;
let scoreKoalas1 = 88;
let scoreKoalas2 = 91;
let scoreKoalas3 = 110;

let avgScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
let avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

console.log("avgScoreDolphins: " + avgScoreDolphins);
console.log("avgScoreKoalas: " + avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas) {
  console.log("Winner: Team Dolphins");
} else if (avgScoreDolphins === avgScoreKoalas) {
  console.log("It's a draw");
} else {
  console.log("Winner: Team Dolphins");
}

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Winner: Team Dolphins");
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
  console.log("Winner: Team Dolphins");
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreKoalas >= 100 &&
  avgScoreDolphins >= 100
) {
  console.log("It's a draw");
} else {
  console.log("Winner: None");
}
