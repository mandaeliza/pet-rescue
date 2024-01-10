const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory function and properties
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
//Method for sleep
    sleep: function () {
        console.log(`${name} needs a nap. Zzz...`);
        this.isTired = 1;
    },
//Property (method) for Playtime
    play: function () {
        if  (this.isTired  === 10) {
            console.log("Too tired to play.");
            this.sleep();
        } else {
            console.log(`Yay! ${this.name} loves to play!`);
            this.isTired += 1;
        }
    }
}
    return pet;
};

//Create new objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hampster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//Verify objects and methods
// console.log(sora, clover, baxter, cleo, francine);
// clover.sleep();
// baxter.play();

// console.log(clover, baxter);

//Update properties
clover.isTired = 8;
francine.isTired = 9;

//create array that includes all pets
const allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

const showPets = function () {
  pets.innerText = "";
  for (let status of petArray) {
    let status = "ready to play"
    if (this.isTired >= 7) {
        this.status = "sleeping"
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${this.name}</span> the ${this.species} is ${this.status}!`;
    pets.append(li);
  }
}