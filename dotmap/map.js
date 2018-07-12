//make a new array to store specific values from our array of objects.

const instrux = [
  {
    name: "Jisie",
    cohort: 26,
    position: "lead instructor"
  },
  {
    name: "Emily",
    cohort: 26,
    position: "junior instructor"
  },
  {
    name: "Arwa",
    cohort: 25,
    position: "TA"
  },
  {
    name: "Steve",
    cohort: 25,
    position: "lead instructor"
  },
  {
    name: "Kimmy",
    cohort: 25,
    position: "junior instructor"
  },
  {
    name: "Jordan",
    cohort: 26,
    position: "junior instructor"
  },
  {
    name: "Susan",
    cohort: 24,
    position: "design instructor"
  },
  {
    name: "Brenda",
    cohort: 24,
    position: "lead instructor"
  },
  {
    name: "Joe",
    cohort: null,
    position: "lead instructor"
  },
  {
    name: "Dr. T",
    cohort: 24,
    position: "TA"
  },
  {
    name: "Greg",
    cohort: 24,
    position: "junior instructor"
  }
]


//make an array of instructor names
let namesArray = [];

for (let i = 0; i < instrux.length; i++) {
  namesArray.push(instrux[i].name);
}

console.log("names array:", namesArray);


//make an array of instructor positions

let positionsArr = instrux.map((onePersonAtATime) => {
  return onePersonAtATime.position;
})

// let positionsArr = instrux.map(onePersonAtATime => onePersonAtATime.position);

console.log("positions array", positionsArr);

let updatedArr = instrux.map((teacher) => {
  teacher.rating = 4;
  return teacher;
})

console.log('updated!', updatedArr);
console.log('old!', instrux);