//This concept is good to encapulate some information
//from the global scope for example
// we know inside a function, it's created a new scope
// and the variables canont be access by the global scope

(function () {
  console.log('This function will just run once');
})();

(() => console.log('This also will run just once'))();

//We could use just a new block like this too

{
  //can be used just in this block
  const myVariable = 'Elder';

  //Do not use the 'var' keyword to create new variables
  //because they can be seeing by the global scope even inside
  //another scope
  var myVariable2 = 'Elder';
}

console.log(myVariable2);
