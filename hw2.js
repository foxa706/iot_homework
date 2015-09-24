////second attempt hw w/o the potentiometer////

//to track time for the alarm
var Time = require('simple-time');

//for song to play on alarm end
var Sound = require('node-aplay');
var music = new Sound('/music.mp3');

//for switch and led
var GPIO = require('onoff').Gpio,
    
    onButton = new GPIO(4, 'in', 'both');//pin 7
	offSwitch = new GPIO(17, 'in', 'both');//pin 11
    led = new GPIO(22, 'out'),//pin 15



///////////make functions!//////////////

function buttonRead(err, state) {

   if(state == 1) {
    console.log("Alarm is set");
    //8 * Time.HOUR;
    //test for one minute
    1 * Time.MINUTE;
    alarm();
  }
   if(state == 0) {
    console.log("button reading off");
  }
}


function switchRead(err, state) {
   if(state == 0) {
    console.log("Alarm set to off");
    alarmOff();
  }

   if(state == 1) {
    console.log("switch reading normal");
  }

}

////alarm function to play song + turn on LED
function alarm() {
  console.log("Wakey Wakey");
  led.writeSync(1);//turn on led
  music.play();

});

////turn the alarm functions off////
function alarmOff(){	
  led.writeSync(0);//turn on led
  music.pause();

}

///////run this biz///////////////

onButton.watch(buttonRead);
offSwitch.watch(switchRead);
