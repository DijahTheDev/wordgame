var strangerThings = [
  "eleven",
  "demogorgon",
  "mouthbreather",
  "upsidedown",
  "eggos",
  "barb",
  "madmax",
  "pollywog",
  "digdug",
  "hawkins",
  "demodogs"
]

var currentWord = ""

var currWrdLtrs = []

var numBlanks = 0

var answerDisplay = []

var wrongLtrs = []

var wins = 0
var losses = 0
var guessesLeft = 9

function newGame() {
  currentWord =
    strangerThings[Math.floor(Math.random() * strangerThings.length)]
  console.log("The current word chosen is: " + currentWord)

  currWrdLtrs = currentWord.split("")
  console.log("The current word's letters are: " + currWrdLtrs)

  numBlanks = currWrdLtrs.length
  console.log("The number of letters in the current word is: " + numBlanks)

  guessesLeft = 9
  wrongLtrs = []
  answerDisplay = []

  if ((guessesLeft = 9)) {
    document.getElementById("elevenImg").removeAttribute("style")
    document.getElementById("mikeImg").removeAttribute("style")
    document.getElementById("willImg").removeAttribute("style")
    document.getElementById("dustinImg").removeAttribute("style")
    document.getElementById("lucasImg").removeAttribute("style")
    document.getElementById("madMaxImg").removeAttribute("style")
    document.getElementById("steveImg").removeAttribute("style")
    document.getElementById("chiefHopperImg").removeAttribute("style")
  }

  for (i = 0; i < numBlanks; i++) {
    answerDisplay.push("_")
    console.log(answerDisplay)
  }

  document.getElementById("theWord").innerHTML = answerDisplay.join(" ")
  document.getElementById("remGuesses").innerHTML =
    "Number of Guesses Remaining: " + " " + guessesLeft
  document.getElementById("wins").innerHTML = "Wins: " + " " + wins
  document.getElementById("losses").innerHTML = "Losses: " + " " + losses
}

function checkLtrs(letter) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var correctLetter = false

    for (var i = 0; i < numBlanks; i++) {
      if (currentWord[i] == letter) {
        correctLetter = true
      }
    }

    if (correctLetter) {
      for (var i = 0; i < numBlanks; i++) {
        if (currentWord[i] == letter) {
          answerDisplay[i] = letter
        }
      }
    } else {
      wrongLtrs.push(letter)
      guessesLeft--
    }

    console.log(answerDisplay)
  } else {
    alert("Please be sure to select a letter from the Alphabet (from a to z)")
  }
}

function roundComplete() {
  console.log(
    "Win count: " +
      wins +
      " | Loss Count: " +
      losses +
      " | Guesses Left: " +
      guessesLeft
  )

  document.getElementById("remGuesses").innerHTML =
    "Number of Guesses Remaining: " + " " + guessesLeft
  document.getElementById("theWord").innerHTML = answerDisplay.join(" ")
  document.getElementById("guessedLetters").innerHTML =
    "Letters Already Guessed:" + " " + wrongLtrs.join(" ")

  if (currWrdLtrs.toString() == answerDisplay.toString()) {
    wins++
    alert(
      "CONTRATULATIONS! You guessed '" +
        currentWord +
        "' correctly. Try another round?"
    )
    console.log("YOU WIN!")

    document.getElementById("wins").innerHTML = "Wins: " + " " + wins

    newGame()
    document.getElementById("guessedLetters").innerHTML =
      "Letters Already Guessed:" + " " + " "
  } else if (guessesLeft == 0) {
    losses++
    alert(
      "OH NO! You have 0 guesses left, and all your friends are now in the upsidedown. The correct word was '" +
        currentWord +
        "'. Do you want to try again?"
    )
    console.log("You Lost!")

    document.getElementById("losses").innerHTML = "Losses: " + " " + losses

    newGame()
    document.getElementById("guessedLetters").innerHTML =
      "Letters Already Guessed:" + " " + " "
  }
}

newGame()

document.onkeyup = function(event) {
  var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase()
  console.log("You Guessed the letter: " + ltrsGuessed) // Testing via Console.Log

  checkLtrs(ltrsGuessed)
  roundComplete()

  if (guessesLeft <= 8) {
    document.getElementById("elevenImg").style.transform = "rotate(180deg)"
    document.getElementById("elevenImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 7) {
    document.getElementById("mikeImg").style.transform = "rotate(180deg)"
    document.getElementById("mikeImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 6) {
    document.getElementById("willImg").style.transform = "rotate(180deg)"
    document.getElementById("willImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 5) {
    document.getElementById("dustinImg").style.transform = "rotate(180deg)"
    document.getElementById("dustinImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 4) {
    document.getElementById("lucasImg").style.transform = "rotate(180deg)"
    document.getElementById("lucasImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 3) {
    document.getElementById("madMaxImg").style.transform = "rotate(180deg)"
    document.getElementById("madMaxImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 2) {
    document.getElementById("steveImg").style.transform = "rotate(180deg)"
    document.getElementById("steveImg").style.opacity = "0.25"
  }

  if (guessesLeft <= 1) {
    document.getElementById("chiefHopperImg").style.transform = "rotate(180deg)"
    document.getElementById("chiefHopperImg").style.opacity = "0.25"
  }
}
