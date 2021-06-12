class paper{
	constructor(x,y,r) {

	var options = {
			
		'restitution':0.3,
	    'friction':5,
		'density':1.2
		  
		};	
	// assign options to the rubber ball
	
		this.x=x;
		this.y=y;
		this.r=r;
		this.paper=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.paper);
		this.image=loadImage("paper.png")
	};
	display() {
			var paperpos=this.paper.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			//fill("darkblue");
			//draw the ellipse here to display the rubber ball
			image(this.image,0,0,this.r,this.r);

			pop()
	}

}