sqObj = {
  "square": [
    {
      "saying": "I'll have to get back to you"
    },
    {
      "saying": "Can everyone see my screen?"
    },
    {
      "saying": "Sorry, I was on mute"
    },
    {
      "saying": "(Over Talker)Sorry, Go Ahead, No Really"
    },
    {
      "saying": "Sorry, I didn't catch that, can you repeat it again?"
    },
    {
      "saying": "So(fae out) I can (unintelligible) by (fade out), is that ok?"
    },
    {
      "saying": "Hey, it's me, sorry I am late I (insert lame excuse)"
    },
    {
      "saying": "I have a hard stop at"
    },
    {
      "saying": "Can you repeat that, you cut out"
    },
    {
      "saying": "Can someone add me to the meeting?"
    },
    {
      "saying": "Next slide please"
    },
    {
      "saying": "If you are not talking please go on mute"
    },
    {
      "saying": "Sorry, I am having connection issues"
    },
    {
      "saying": "I think there is a lag"
    },
    {
      "saying": "Child or Animal in background"
    },
    {
      "saying": "Can you email that to everyone?"
    },
    {
      "saying": "Loud, painful, echo"
    },
    {
      "saying": "(Sound of someone typing...possilby with a hammer)"
    },
    {
      "saying": "I heard another beep, did someone join?"
    },
    {
      "saying": "_____, are you there?"
    },
    {
      "saying": "Hi, can you hear me?"
    },
    {
      "saying": "Can we take this one offline?"
    },
    {
      "saying": "Hi, who just joined?"
    },
    {
      "saying": "Just going to give it a few more minutes to let everyone join"
    },
    {
      "saying": "Uh, you're still not sharing"
    },
    {
      "saying": "No, it is still loading"
    },
    {
      "saying": "Hey guys, I need to join another call"
    },
    {
      "saying": "Hello, Hello am I on mute?"
    },
    {
      "saying": "Let's review the last meeting"
    }
  ]
};



const freeSq = 12;  //This is the number where the free square will land up. 

window.onload = initBingo;

function initBingo() {
  shuffle();
  newCard();
}
function newCard() {
  var z = 0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      setSquare(i, j, z);
      z++;
    }
  }
}
function setSquare(x, y, z) {
  if (z != 12) {
    var currSquare = "square" + x + y;
    document.getElementById(currSquare).innerHTML = sqObj.square[z].saying;
  }
}

function shuffle() {
  var currentIndex = sqObj.square.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = sqObj.square[currentIndex].saying;
    sqObj.square[currentIndex].saying = sqObj.square[randomIndex].saying;
    sqObj.square[randomIndex].saying = temporaryValue;
  }
}

function resetCard() {
  var z = 0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (z != 12) {
        var currSquare = "square" + i + j;
        document.getElementById(currSquare).innerHTML = "";
      }
      z++;
    }
  }
  initBingo();
}

var gridItem = document.getElementsByClassName("grid-item");
console.log("classname list:");
console.log(gridItem);
console.log("Class Length:" + gridItem.length);
var myFunction = function () {
  console.log("inside class")
};


for (var i = 0; i < gridItem.length; i++) {
  console.log("Inside Loop:" + i);
  gridItem[i].addEventListener('click', myFunction);
}

