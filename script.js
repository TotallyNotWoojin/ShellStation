var timerOn = true;
window.onload = function() {
  //if (localStorage.save2 && localStorage.save2 != null) {
  if (document.getElementById("goalstatement")) {
    document.getElementById("goalstatement").value = localStorage.save2;
  }

  //if (localStorage.save3 && localStorage.save3 != null) {
  if (document.getElementById("goalstatement1")) {
    document.getElementById("goalstatement1").value = localStorage.save3;
  }

  // if(document.getElementById("subs1")) {
  //   document.getElementById("goalstatement1").onClick = submitIt1();
  // }
  //}

}
var mySeconds;
var intervalHandle;
var scoore = document.getElementById("totalScore");
if (scoore && localStorage.clickcount != null) {
  scoore.textContent = localStorage.clickcount;
}
else if (scoore) {
  scoore.textContent = 0;
}
function saveIt() {
  var xt = document.getElementById("myTextArea").value;
  localStorage.save1 = xt;
}
function loadIt() {
  document.getElementById("myTextArea").value = localStorage.save1;
}
function submitIt() {
  var x = document.getElementById("goalstatement").value;
  localStorage.save2 = x;
}
function submitIt1() {
  var xosdsd = document.getElementById("goalstatement1").value;
  localStorage.save3 = xosdsd;    
}


var pointsAdded = 1;
var easyButton = document.getElementById("easy");

if (easyButton) {
  easyButton.onclick = function() {
    pointsAdded = 1;
  }
}
var medButton = document.getElementById("medium");
if (medButton) {
  medButton.onclick = function() {
    pointsAdded = 2;
  }
}
var hardButton = document.getElementById("hard");
if (hardButton) {
  hardButton.onclick = function() {
    pointsAdded = 3;
  }
}


function tick() {
  var timeDisplay = document.getElementById("time");

  var min = Math.floor(mySeconds / 60);
  var sec = mySeconds - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;

  timeDisplay.innerHTML = message;

  if (mySeconds === 0) {
    alert("Done");
    clearInterval(intervalHandle);
    timerOn = true;
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + pointsAdded;
    } else {
      localStorage.clickcount = 1;
    }
    scoore.textContent = localStorage.clickcount;

  }
  mySeconds--;


}
function startCounter() {
  if (timerOn === true) {
    var myInput = document.getElementById("minutes").value;
    if (isNaN(myInput)) {
      alert("Type a valid number please");
      return;
    }
    mySeconds = myInput * 60;
    intervalHandle = setInterval(tick, 1000);
  }

}
function startCounter1() {
  var what = document.getElementById("pointsUsed");
  if (timerOn === true && what) {
    var myInput = parseInt(document.getElementById("pointsUsed").value) * 30;
    if (isNaN(myInput)) {
      alert("Type a valid number please");
      return;
    }
    mySeconds = myInput * 60;
    intervalHandle = setInterval(tick, 1000);
  }

}
function resetTimer() {
  clearInterval(intervalHandle);
  mySeconds = 0;
  var timeDisplay = document.getElementById("time");

  var min = Math.floor(mySeconds / 60);
  var sec = mySeconds - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  }

  var message = min.toString() + ":" + sec;

  timeDisplay.innerHTML = message;
  timerOn = true;
}
var stopped = false;
function startTimer() {
  startCounter();
  timerOn = false;
}
function startTimer1() {
  startCounter1();
  timerOn = false;
}
function stopTimer() {
  if (stopped === false) {
    clearInterval(intervalHandle);
    stopped = true;
  }
}
function resumeTimer() {
  if (stopped === true) {
    intervalHandle = setInterval(tick, 1000);
    stopped = false;
  }
}

var stayPlaceholder = document.getElementById("message");
var showStayFact = document.getElementById("buttonss");

var stayRecommendations = ["Eat your favorite comfort food.",
  "Play a board game.",
  "Build a puzzle.",
  "Bake cookies.",
  "Go on a run."]

var stayFactNumber;

function randomStayFact() {
  return stayRecommendations[stayFactNumber];
}

if (showStayFact) {
  showStayFact.addEventListener('click', function() {
    stayFactNumber = Math.floor(Math.random() * 5);
    stayPlaceholder.textContent = randomStayFact();
  });
}

var outPlaceholder = document.getElementById("messages");
var showOutFact = document.getElementById("buttonsss");

var outRecommendations = ["Talk to someone new",
  "Try a new hobby",
  "Go somewhere new",
  "Try different cuisines",
  "Research new topics"]

var outFactNumber;

function randomOutFact() {
  return outRecommendations[outFactNumber];
}

if (showOutFact) {
  showOutFact.addEventListener('click', function() {
    outFactNumber = Math.floor(Math.random() * 5);
    outPlaceholder.textContent = randomOutFact();
  });
}

function subtractPoints() {
  var amount = parseInt(document.getElementById("pointsUsed").value);
  if (amount >= 0 && amount <= Number(localStorage.clickcount)) {
    localStorage.clickcount = Number(localStorage.clickcount) - amount;
    clearInterval(intervalHandle);
    mySeconds = amount * 1800;
    var timeDisplay = document.getElementById("time");

    var min = Math.floor(mySeconds / 60);
    var sec = mySeconds - (min * 60);

    if (sec < 10) {
      sec = "0" + sec;
    }

    var message = min.toString() + ":" + sec;

    timeDisplay.innerHTML = message;
    scoore.textContent = localStorage.clickcount;
    timerOn = true;
  }
}