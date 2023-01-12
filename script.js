// First task

const team = {
  name: "Manchester United",
  trophies: 20,
  hasRonaldo: true,
  hasLegendMaguire: true,
  presentTrophy: null,
  nextChampionship: undefined,
};

team.presentTrophy = "League of Europe";
team.nextChampionship = "Hoping for best";

team["hasRonaldo"] = false;

delete team.hasLegendMaguire;

console.log(team);

// Second Task

const vehicle = {};

vehicle.brandName = "BMW";

vehicle.model = "X5";

vehicle.model = "M1";

delete vehicle.model;

console.log(vehicle);

// Third Task

let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

let sum = 0;

for (let salary in salaries) {
  sum += salaries[salary];
}

console.log(sum);
