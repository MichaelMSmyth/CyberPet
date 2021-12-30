export let initQuestions = [
    {
      type: "list",
      name: "type",
      message: "What type of pet do you want?",
      choices: ["Cat", "Dog", "House Plant", "Pebble"],
    },
    {
      type: "input",
      name: "name",
      message: "Whats your pets name?",
    },
  ]
  
  export let gameQuestion = [
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: ["wash", "talk", "water", "feed", "sleep", "play", "polish"],
    }
  ]