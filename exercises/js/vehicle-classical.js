// TODO implement vehicle with classical inheritance


function Vehicle(){

	this.engines = function(){

		return 1;

	};

	this.ignition = function(){

		var val = "Turning on my engine.";
		console.log(val);

	};

	this.drive = function () {

		var val = "Steering and moving forward!";
		this.ignition();
		console.log(val);

	};

	return this;

};

var car = new Vehicle();

car.wheels = function(){

	return 4;

}

car.run = function () {

	var val = "Rolling on all " + this.wheels() + " wheels!";
	this.drive();
	console.log(val);

}

var speedBoat = new Vehicle();

speedBoat.engines = function(){

	return 2;

}

speedBoat.ignition = function(){

	var val = "Turning on my " + this.engines() + " engines."
	console.log(val);

}

speedBoat.pilot = function () {

	var val = "Speeding through the water with ease!";
	this.drive();
	console.log(val);

}
