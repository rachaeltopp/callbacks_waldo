function findWaldo(arr, found) {
  arr.forEach( function(currentValue, index, array) {
    if (currentValue === "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

