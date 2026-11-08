function first() {
  console.log("1 - First started");

  second();

  console.log("4 - First finished");
}

function second() {
  console.log("2 - Second started");

  third();

  console.log("5 - Second finished");
}

function third() {
  console.log("3 - Third started");
}

first();