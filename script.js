//Beta-Key Generator

var generateBetaCode = function(){

var characterCodes = ['A','B','C','D','E','F','G','H','0','1','2','3','4','5','6','7']
var segmentOne=''
var segmentTwo=''
var segmentThree=''

for(var i=0;i<4;i++){
		//need to recreate rand variable each time to be random
		var rand = characterCodes[Math.floor(Math.random() * characterCodes.length)];
		segmentOne+=rand;
	}
for(var i=0;i<4;i++){
		var rand = characterCodes[Math.floor(Math.random() * characterCodes.length)];
		segmentTwo+=rand;
	}
for(var i=0;i<4;i++){
		var rand = characterCodes[Math.floor(Math.random() * characterCodes.length)];
		segmentThree+=rand;
	}
var divide = '-'

var betaCode = segmentOne + divide + segmentTwo + divide + segmentThree

console.log(betaCode)
}

//Run below function in dev console to get keys. Replace 100 with how many you need.
//100 beta-key example.
// for(var x=0;x<100;x++){
// 	generateBetaCode();
// }


//Beta-Key Checker
//Paste Beta Codes in here. Make sure they have '' around each one]
//ex.
// var betaCodes = ['5555-5555-5555',
// '5555-5555-5555',
// '5555-5555-5555',
// '5555-5555-5555']
var betaCodes = []



var showAlert;
var tval = '';
$('#beta-code').on('keyup', function () {
  $('.invalid').css('display','none');
 tval = $('#beta-code').val();
				 if(tval.length===14){
					for(var i=0;i<betaCodes.length;i++){
						if(tval===betaCodes[i]){
							$('.register').css('display','block');
							$('.invalid').css('display','none');
							break;
						}
						else{
							$('.invalid').css('display','block');
						}
					}
				}
				else{
					$('.register').css('display','none');
				}
});
console.log('linked');
console.log(tval);


