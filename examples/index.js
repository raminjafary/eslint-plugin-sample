async function logAsync() {
  console.log("hello!");
}

// Custom include
const toSomeFunction = () => {
  console.log("Hello");
};
// Custom exclude
const excludeSomeFunction = () => {
  console.log("Hello");
};
toSomeFunction();
excludeSomeFunction();

// var _ = require('your favorite fp library');

import _ from "my favorite fp lib";
