//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager( managerName, managerAge, currentTeam, trophiesWon )
 {
  var created = [
    managerName, 
    managerAge, 
    currentTeam, 
    trophiesWon]
  return created;

}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [
  4, 
  4, 
  3
];

//write your function here
function createFormation(formation){

  if(formation.length==0) {
  return null; }
  var Play = {
    defender :formation[0],
    midfield : formation[1],
    forward : formation[2] }
    return Play;

}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(y) 
{
  var info = players.filter(player => player.debut == y);
  return info;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos) 
{
  var data = players.filter(player => player.position == pos);
  return data;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  return players.filter(player =>
    player.awards.some(award => award.name === awardName)
  );
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => {
    const awardCount = player.awards.reduce((count, award) => {
      if (award.name === awardName) {
        count++;
      }
      return count;
    }, 0);

    return awardCount === noOfTimes;
  });
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
}

//Progression 9 - Sort players in descending order of their age

function sortByAge() {
  players.sort((a, b) => b.age - a.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function filterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(player => player.team === team);

  filteredPlayers.sort((a, b) => b.awards.length - a.awards.length);

  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter(player => player.country == country);
  return dataTwo.sort(compare);
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var data = players.filter(player => player.age > age);
  return data;
}