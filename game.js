rAttempts = Array ("Remaining Attempts: 10", "Remaining Attempts: 9", 
"Remaining Attempts: 8", "Remaining Attempts: 7", "Remaining Attempts: 6",
"Remaining Attempts: 5", "Remaining Attempts: 4", "Remaining Attempts: 3", 
"Remaining Attempts: 2", "Remaining Attempts: 1", 
'Attempts Exhausted! Touch any Key to Reveal the Famous Singer OR Press ReStart')

Singers = Array("Adele", "Tina", "Celina", "Rhianna", "Elvis", "whitney", "Mariah")

function resetGame() {
 attempts = 0
 max = rAttempts.length
 letter = " "
 theSinger = Singers[Math.round((Singers.length - 1)*Math.random())].toUpperCase()
 displayAttempts()
 displaySinger()
 displayLetters()
}

function displayAttempts() {
 document.SingersGame.status.value=rAttempts[attempts]
}

function displaySinger() {
 hide=""
 for(i=0;i<theSinger.length;i++) {
  if(letter.indexOf(theSinger.charAt(i)) != -1)
  hide += (" " +theSinger.charAt(i)+ " ")
  else hide += "_ "
}
document.SingersGame.theSinger.value=hide
}
function displayLetters() {
 document.SingersGame.letter.value=letter 
}
function wrongLetter(s) {
 if(theSinger.indexOf(s) == -1) return true
 else
 return false
}

function winner() {
 for(i=0;i<theSinger.length;i++) {
  if(letter.indexOf(theSinger.charAt(i)) == -1) return false
 }
 return true
}

function guess(k){
 if(letter.indexOf(k) == -1) letter = k + letter
 if(wrongLetter(k)) ++attempts
 displayAttempts()
 displaySinger()
 displayLetters()
 if(attempts == max){
  resetGame()
  alert("The Famous Singer was "+theSinger+". Play again?")
 }
 if(winner()) {
displaySinger()
document.SingersGame.theSinger.value=theSinger
alert("Congratulations!!! "+theSinger+" was the Famous Singer!")
 }
}

resetGame()
