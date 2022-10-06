// declare global variables up here
var marker0 = getMarker(0);
var marker3 = getMarker(3);
var marker15 = getMarker(15);
value1 = 0;
var marker15NotCounted = true

function setup() {
  // code written in here will be executed once when the page loads
  setupAppCanvas();


  
}

var timestamp = 0;
var timeInterval = 1000; // in milliseconds


function update() {
  // code written in here will be executed every frame
  var button = document.getElementById("count1")
  

  if(marker15.present && marker15NotCounted) {

    value1 += 1;
    marker15NotCounted = false;
    button.innerHTML = value1
 
  }
  if(!marker15.present){
    marker15NotCounted = true;
  }
  
  console.log(marker15NotCounted)
  //else {
  //  value1 -= 1
  //  button.innerHTML = value1
  //}

  var demoMarkerPair = getMarkerPair(0, 3);
  var realWorldPosition = demoMarkerPair.getRelativePosition(50);



  console.log(realWorldPosition.distance, realWorldPosition.heading, realWorldPosition.rotation);
  
  var timeNow = Date.now();
  if (timeNow - timestamp > timeInterval) {
    // Do something here
    
    timestamp = timeNow; //end with setting the timestamp to the current time
  }
  
}

// setupAppCanvas() function will initialize #app-canvas.
// if you intend to use #app-canvas, call this function in setup()
var canvas;
var ctx;
var dpr;
var appWidth;
var appHeight;

function setupAppCanvas() {
  canvas = document.querySelector("#app-canvas");
  dpr = window.devicePixelRatio || 1;

  appWidth = window.innerWidth * dpr;
  appHeight = window.innerHeight * dpr;
  console.log("appWidth =", appWidth, " appHeight =", appHeight);

  canvas.width = appWidth;
  canvas.height = appHeight;
  
  ctx = canvas.getContext("2d");
}

