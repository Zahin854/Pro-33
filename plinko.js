class Plinko{
	constructor(x,y,r)
	{

		var options={
			isStatic:true,
			restitution:1,
			friction:0

			
			}
		this.r=10
        this.body=Bodies.circle(x,y,this.r, options)
        this.color=color(255,0,0)
		World.add(world, this.body);
		
	}
	display()
	{
			
			var pos=this.body.position;	
			var angle = this.body.angle;	

			push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			rotate(angle)
			fill("white");
            noStroke();
			ellipse(this.ellipse,0,0,this.r, this.r);
			pop()
			
	}

}