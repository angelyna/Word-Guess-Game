rAttempts = Array ("Remaining Attempts: 10", "Remaining Attempts: 9", 
"Remaining Attempts: 8", "Remaining Attempts: 7", "Remaining Attempts: 6",
"Remaining Attempts: 5", "Remaining Attempts: 4", "Remaining Attempts: 3", 
"Remaining Attempts: 2", "Remaining Attempts: 1", 
'Attempts Exhausted! Touch any Key to Reveal the Famous Singer OR Press ReStart')

Singers = [
    {name:"Adele",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/128px-Adele_2016.jpg"
    },
    
    {name:"Rhianna",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rihanna_concert_in_Washington_DC_%282%29.jpg/128px-Rihanna_concert_in_Washington_DC_%282%29.jpg"
    },

    {name:"Celine",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Celine_Dion_Concert_-_Singing_I%27m_Alive.jpg/128px-Celine_Dion_Concert_-_Singing_I%27m_Alive.jpg"
    },

    {name:"Sarah",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Osaka07_Opening_Sarah_Brightman.jpg/128px-Osaka07_Opening_Sarah_Brightman.jpg"
    },

    {
    name:"Whitney",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flickr_Whitney_Houston_performing_on_GMA_2009_4.jpg/128px-Flickr_Whitney_Houston_performing_on_GMA_2009_4.jpg"
    },

    {name:"Elton",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Elton_John_2011_Shankbone_2.JPG/128px-Elton_John_2011_Shankbone_2.JPG"
    },

    {name:"Justin",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/128px-Justin_Bieber_in_2015.jpg"
    },

    {
    name: "Elvis",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Elvis_Presley_Jailhouse_Rock.jpg/128px-Elvis_Presley_Jailhouse_Rock.jpg"    
    },

    {name: "Mariah",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/MariahGMA.jpg/128px-MariahGMA.jpg"
    },

    {
    name: "Shakira",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Shakira_at_Obama_Inaugural_%28cropped%29.jpg/128px-Shakira_at_Obama_Inaugural_%28cropped%29.jpg"    
    }
]

function resetGame() {
 attempts = 0
 max = rAttempts.length
 letter = " "
 randomno = Singers[Math.round((Singers.length - 1)*Math.random())]
 theSinger = randomno.name.toUpperCase()
 thePic = randomno.src
 displayAttempts()
 displaySinger()
 displayLetters()
 var remove = document.getElementById('img')
 remove.removeChild(remove.childNodes[0])
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

function displayPicture() {
    var x = document.createElement("img")
    x.src = thePic
    var src = document.getElementById("img")
    src.appendChild(x)
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
displayPicture()
 }
}
