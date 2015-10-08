///////////////////// Import the needed nmp libraries/////////////
//to track time for the alarm
var Time = require('simple-time');

//for song to play on alarm end
var PotionAudio = require('potion-audio');
var manager = new PotionAudio();

//set volume super low for fade in 
manager.setVolume(0.1);

//for switch and led
var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out'),//pin 11
    mySwitch = new GPIO(14, 'in', 'both');


///////////////////now for the main readings and code///////////////


///////////////read the potentiometer
function potRead(err, state){


}


///////////read switch to activate alarm
function switchRead(err, state) {
  
  //////////define set time by the age -set with potentiometer-
  if(state == 1) {
    console.log("Alarm is set");

    //child 3-5 
    if (potRead<x) {
      //set a Timeout for 12 hours
      console.log(" for 12 hours");
      setTimeout(function() {, 8 * Time.HOUR);}
      alarm();
    };

    //child 6-13
    if (potRead<x) {
      //set a Timeout for 11 hours
      console.log(" for 11 hours");
      setTimeout(function() {, 8 * Time.HOUR);}
      alarm();
    };

    //teen
    else if (potRead<x) {
      //set a Timeout for 10 hours
      console.log(" for 10 hours");
      setTimeout(function() {, 8 * Time.HOUR);}
      alarm();
    };

    //adult
    else{
      //set a Timeout for 8 hours
      console.log(" for 8 hours");
      setTimeout(function() {, 8 * Time.HOUR);}
      alarm();
    }; 
  } 


   if(state == 0) {
    console.log("");
  }
  
}

mySwitch.watch(switchRead);




///////////alarm function to play song + turn on LED
alarm('http://picosong.com/S3da', function(audio) {
  led.writeSync(1);//turn on led

  audio.fadeIn(1, 10);//bring to level 1 volume over 10 seconds
  audio.loop();


});


