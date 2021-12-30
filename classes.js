// List of pets and their properties

class Pet {
  constructor(name) {
    this.petType = "Pet";
    this.name = name;
    this.age = 0;
    this.health = 100;
    this.cleanliness = 100;
    this.thirst = 0;
  }

  wash() {
    this.cleanliness += 5;
    if (this.cleanliness > 100) {
      this.cleanliness = 100;
    }
  }

  talk() {
    // Talk doesn't change a value but returns a response based on the lowest level child type
    console.log(
      this.talkResponses[Math.floor(Math.random() * this.talkResponses.length)]
    );
  }

  // Animals and plants both need the thirstiness property and water method but minerals do not. How do I solve this? Do I make an alive class?

  water() {
    this.thirst -= 5;
    if (this.thirst < 0) {
      this.thirst = 0;
    }
  }

  time() {
    this.age += 1;
    this.health += 1;
    this.cleanliness -= 1;
    this.thirst += 1;

    if (this.cleanliness < 0) {
      this.cleanliness = 0;
      this.health -= 5;
    }

    if (this.thirst > 100) {
      this.thirst = 100;
      this.health -= 5;
    }

    if (this.health > 100) {
      this.health = 100;
    }
  }
}

// Animal pet types

class Animal extends Pet {
  constructor(name) {
    super(name);
    this.petType = "Animal";
    this.hunger = 0;
    this.tiredness = 0;
    this.fun = 100;
  }

  feed() {
    this.hunger -= 5;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }

  sleep() {
    this.tiredness -= 5;
    if (this.tiredness < 0) {
      this.tiredness = 0;
    }
  }

  play() {
    this.fun += 5;
    if (this.fun > 100) {
      this.fun = 100;
    }
  }

  time() {
    super.time();

    this.hunger += 1;
    this.tiredness += 1;
    this.fun -= 1;

    if (this.hunger > 100) {
      this.hunger = 100;
      this.health -= 5;
    } else if (this.tiredness > 100) {
      this.tiredness = 100;
      this.health -= 5;
    } else if (this.fun < 0) {
      this.fun = 0;
      this.health -= 5;
    }
  }
}

export class Cat extends Animal {
  constructor(name) {
    super(name);
    this.petType = "Cat";
    this.talkResponses = ["...", "Meow"];
  }
}

export class Dog extends Animal {
  constructor(name) {
    super(name);
    this.petType = "Dog";
    this.talkResponses = ["Woof!", "Bork!"];
  }
}

// Vegetable pet types

class Vegetable extends Pet {
  constructor(name) {
    super(name);
    this.petType = "Vegetable";
  }
}

export class HousePlant extends Vegetable {
  constructor(name) {
    super(name);
    this.petType = "HousePlant";
    this.talkResponses = ["..."];
  }
}

// Mineral pet types

class Mineral extends Pet {
  constructor(name) {
    super(name);
    this.petType = "Mineral";
    this.shininess = 100;
  }

  polish() {
    this.shininess += 5;
    if (this.shininess > 100) {
      this.shininess = 100;
    }
  }
}

export class Pebble extends Mineral {
  constructor(name) {
    super(name);
    this.petType = "Pebble";
    this.talkResponses = ["..."];
  }

  time() {
    super.time();

    this.shininess -= 1;

    if (this.thirst > 0) {
      this.thirst = 0;
    } else if (this.shininess < 0) {
      this.shininess = 0;
      this.health -= 5;
    }
  }
}
