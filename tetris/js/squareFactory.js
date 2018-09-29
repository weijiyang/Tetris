var Square1 = function(){
	Square.call(this);
	this.rotates = [
		[
			[0, 2, 0],
			[2, 2, 2],
			[0, , 0]
		],
		[
			[0, 2, 0],
			[0, 2, 2],
			[0, 2, 0]
		],
		[
			[0, 0, 0],
			[2, 2, 2],
			[0, 2, 0]
		],
		[
			[0, 2, 0],
			[2, 2, 0],
			[0, 2, 0]
		]
	];


}
Square1.prototype = Square.prototype;
var Square2 = function(){
	Square.call(this);
	this.rotates = [
		[
			[2, 0, 0],
			[2, 0, 0],
			[2, 2, 2]
		],
		[
			[2, 2, 2,],
			[2, 0, 0,],
			[2, 0, 0,]
		],
		[
			[2, 2, 2],
			[0, 0, 2],
			[0, 0, 2]
		],
		[
			[0, 0, 2],
			[0, 0, 2],
			[2, 2, 2]
		]
	];


}
Square2.prototype = Square.prototype;
var Square3 = function(){
	Square.call(this);
	this.rotates = [
		[
			[0, 2, 0],
			[0, 2, 2],
			[0, 2, 0]
		],
		[
			[0, 0, 0,],
			[2, 2, 2,],
			[0, 2, 0,]
		],
		[
			[0, 2, 0],
			[2, 2, 0],
			[0, 2, 0]
		],
		[
			[0, 2, 0],
			[2, 2, 2],
			[0, 0, 0]
		]
	];


}
Square3.prototype = Square.prototype;
var SquareFactory = function(){}
SquareFactory.prototype.make = function(index , dir){
	console.log(index,dir)
	var s;
	switch(index){
		case 1:
			s = new Square1();
			break;
		case 2:
			s=new Square2();
			break;
		default:
			s=new Square3();
			break;
	}
	s.origin.x = 0;
	s.origin.y = 3;
	s.rotate(dir);
	return s;
}
