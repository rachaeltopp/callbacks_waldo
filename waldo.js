function findWaldo(arr, found) {
  if (arr[i] === "Waldo") {
      found(i);   // execute callback
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

arr.forEach(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

