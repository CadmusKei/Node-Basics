function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function divideFn(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide from 0");
    } else {
      resolve(a / b);
    }
  });
}

console.log("Promise Lectures Starts");
delayFn(2000).then(() => {
  console.log("Promise Lecture Ends");
});

// deivideFn(20, 2)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

async function displayMath(a, b) {
  try {
    console.log("Dividing...");
    if (b === 0) throw new Error("Cannot divide by 0");
    return ("The answer is: ", a / b);
  } catch (error) {
    console.log("Could not divide! Error: ", error);
  }
}

console.log(await displayMath(20, 4));
