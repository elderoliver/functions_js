//This is a example of one function returning another function

console.log("functions returning functions");

const great = (greatingValue) => {
  return (name) => {
    console.log(`${greatingValue}  -
    ${name}`);
  };
};

//We can call the function this way...
great("hello")("elder");
