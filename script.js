const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
//players.push("Dhoni");
let team = players;
team[3] = "Dhoni";
let team1 = [];
players.forEach((elem) =>{
	team1.push(elem);
});
//team1 = ["Riz"];
let cap1 = [];
cap1={
	name:person.name,
	age:person.age
}

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
window.person.name = "Accio Job"; 
window.cap1.age = 25; 

