

const person = {
  name: "Elder Oliveira Castro",
  age: 34,
  jobTitle: "Software Developer",
};

const printPersonDescription = function (birthCountry) {
  console.log(
    `Name: ${this.name} Age: ${this.age} Job Title: ${this.jobTitle} Birth Country: ${birthCountry}`
  );
};

// the call method give the context of the object person
// So this way we could use the this keywork here.
printPersonDescription.call(person, "Brazil");

// Apply method
// the same of the call method but we need to pass a arry with the arguments we need
const parameters = ["Canada"];
printPersonDescription.apply(person, parameters);

//Bind method
//Here we can get a new function and keep this function to use after.

const functionWithThisContext = printPersonDescription.bind(person);
functionWithThisContext("Peru");

const functionWithTheBirthCountry = printPersonDescription.bind(person, "US");
functionWithTheBirthCountry();

//With Event Listers

//Partial Application