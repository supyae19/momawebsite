function isTouch(e) {
	return e.type.substring(0,5) == "touch";
}

function ev(e){
	if(isTouch(e)){
		if(!e.originalEvent.touches.length) return e.originalEvent.changedTouches;
		else return e.originalEvent.touches;
	} else {
		return [e];
	}
}

function getEXY(e,o){
	let offs = $(o||e.target).offset();
	x = e.pageX - offs.left;
	y = e.pageY - offs.top;
	return {x,y};
}

function getEventXY(e,o){
	return getEXY(ev(e)[0],o);
}

let clamp = (a,min,max) => a>max?max:a<min?min:a;

$(".original-image").on("mousemove touchmove",function(e){
	let pos = getEventXY(e,this);

	let zoompos = {
		x:clamp(pos.x-(125*0.5),0,375),
		y:clamp(pos.y-(125*0.5),0,375)
	}

	$(".zoomer").css({
		transform:`translate(${zoompos.x}px,${zoompos.y}px)`
	})
	$(".zoomed-image").css({
		"background-position":`${-zoompos.x*4}px ${-zoompos.y*4}px`
	})
})