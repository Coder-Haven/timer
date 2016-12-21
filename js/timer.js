// Variable for setInterval
var int;
var min;
var sec;
var iSeconds = 0;
var iMinutes = 0;

// Seconds & Minutes in viewport
var seconds = document.getElementById("seconds")
var minutes = document.getElementById("min")

// Grab Buttons
var btnStart = document.getElementById('start');
var btnStop = document.getElementById('stop');
var btnDone = document.getElementById('btn-set');
var btnSet = document.getElementById('set');

// Grab user inputs
var inpS = document.getElementById('inp-sec');
var inpM = document.getElementById('inp-min');

// Grab time-up screens
var timeUp = document.getElementById('tu');
var timeUp2 = document.getElementById('tu-div');
var close = document.getElementById('x')

// Bring up set-time screen
btnSet.addEventListener('click', function(){
  var timeScreen = document.getElementById('set-time-screen');
  timeScreen.style.display = 'block';
})

// After user sets time plug values in viewport
btnDone.addEventListener('click', function(){
    if(!inpS.value){
      inpS.value = 0;
    }
    if(!inpM.value){
      inpM.value = 0;
    }
    seconds.innerHTML = inpS.value;
    minutes.innerHTML = inpM.value;
  // Parsed time to integers used to count down
   iSeconds = parseInt(document.getElementById("seconds").innerHTML);
   iMinutes = parseInt(document.getElementById("min").innerHTML);
  
   var timeScreen = document.getElementById('set-time-screen');
   timeScreen.style.display = 'none';
})


// Close time-up screen if user clicks 'x' in upper right corner
close.addEventListener('click', function(){
  timeUp.style.display = 'none';
  timeUp2.style.display = 'none';
})

const MAX_SECONDS = 59;



// Timer Function
function countDown(){

  if(!min && !sec){
    clearInterval(int); 
    timeUp.style.display = 'block';
    timeUp2.style.display = 'block';

  } 
  else if(min > 0 && !sec){    
     min--;
    // sec--;        
     sec = MAX_SECONDS;
   }

  else{
  sec--;
  if(sec < 0){sec = MAX_SECONDS}
  }
  

  seconds.innerHTML = sec;
  minutes.innerHTML = min;
}


function stop(){
  clearInterval(int);
}


btnStart.addEventListener('click', function(){

  min = iMinutes;
  sec = iSeconds;
  int = setInterval(countDown, 1000)
  timeUp.style.display = 'none';
  timeUp2.style.display = 'none';
});

btnStop.addEventListener('click', function(){
  stop();
});