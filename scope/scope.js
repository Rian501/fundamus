// Mod Squad
let HTMLRepresentation = `<h1>The Mod Squad</h1>`
{
  const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
      "start": "1968",
      "end": "1973"
    }
  }
  

  ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
  })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation



// Simon Says
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]
let k;
for (k = 0; k < locations.length; k++) {
  const currentLocation = locations[k]
  const invalidLocation = false

  if (currentLocation[0] > 2) {
    invalidLocation= true;
  }

  if (invalidLocation) {
    console.log("This location is invalid")
  }
}

console.log(`There were ${k} locations displayed`)





// Lambda Llama
const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)

  const namer = function () {
    const suffix = " the Llama"
    const name = possibleNames[randomizer]
    return name + suffix;
  }
  let newName = namer();
  return newName;
}

nameMaker = llamaNamer();
console.log(nameMaker)