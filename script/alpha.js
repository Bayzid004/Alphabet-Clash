// function play() {
//   const homeScreen = document.getElementById("home-Screen");
//   homeScreen.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
  element.classList.add("text-black");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
  // element.classList.add("text-black");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabets);

  // get a random index
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  //   console.log(index);

  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}

function handleKeyboardButtonPress(event) {
  const playPressed = event.key;
  // console.log(playPressed);

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playPressed, expectedAlphabet);

  if (playPressed === expectedAlphabet) {
    console.log("you got a point");

    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed and lose a life");
    const currentLifeElement = document.getElementById("current-life");
    currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getARandomAlphabet();
  // console.log("Your random alphabet is :", alphabet);

  // set rendomly generate alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  hideElement("home-Screen");
  showElement("play-ground");
  continueGame();
}
