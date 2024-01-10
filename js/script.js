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
