//Alien Variables//
var aliens = 10000;//a
var b = 1245;//x
var g = 3255;//y
var r = 5500;//z

function checklist(x, y, z){
	if (a == 10000){ //Alien total check
		output = x + y + z; 
	}
	
	if (y >= 5000){ //Green Alien #
		console.log("MOTHER OF GOD, not the green ones");
	}
	
	if (y + z >= 8000){ //Green and Red Alien #
		console.log("DOOOOOM");
	}
	
	if (x + z <= 3000){ //Red and Blue Alien #
		console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
	}
}

checklist(b,g,r);