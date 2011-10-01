function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
	this.rev = false;
	this.revy = false;
}

Circulo.prototype.actualizar = function() { 
    if (this.x < this.juego.ctx.canvas.width-50 && this.rev == false) {
        this.x += 10;
    }
	else if (this.x == this.juego.ctx.canvas.width-50 && this.rev == false) {
		this.rev = true;
		this.x -= 10;
	}
	else if (this.x > 50 && this.rev == true) {
		this.x -= 10;
	}
	else if (this.x == 50 && this.rev == true) {
		this.rev = false;
		this.x += 10;
	}
	
	/*if (this.y > this.juego.ctx.canvas.height+50 && this.revy == false) {
        this.y -= 10;
    }
	else if (this.y == this.juego.ctx.canvas.height+50 && this.revy == false) {
		this.revy = true;
		this.y += 10;
	}
	else if (this.y > 50 && this.revy == true) {
		this.y += 10;
	}
	else if (this.y == 50 && this.revy == true) {
		this.revy = false;
		this.y -= 10;
	}*/
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};