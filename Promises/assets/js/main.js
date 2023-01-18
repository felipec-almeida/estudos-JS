function randomTime(minNumber, maxNumber) {
  const random = Math.floor(
    Math.random() * (maxNumber - minNumber) + minNumber
  );
  return random;
}

function waitHere(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

const time = randomTime(1, 5);
console.log(time);
const functions = waitHere("Frase 1", time * 1000);
