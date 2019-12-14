document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
        closer();
    }
});


function expand(){
	var sb = document.getElementById('sidebar');
	var c = document.getElementById('content');


	if (sb.style.width === "100%"){

	sb.style.width = "33%";
	c.style.width = "67%";
	sb.style.visibility = "visible";

    }
    else {
    	sb.style.width = "0%";
    	c.style.width = "100%";
    	sb.style.visibility = "hidden";
    }




}


function titles(){
	var m = document.getElementById("mit");
	var d = document.getElementById("des");

	m.style.color = "grey";
	d.style.color = "grey";

}

function titles2(){
	var m = document.getElementById("mit");
	var d = document.getElementById("des");

	m.style.color = "white";
	d.style.color = "white";

}



function stats(){
	var s = document.getElementById("featureStats");

	s.style.opacity = "1";


}

function stats2(){
	var s = document.getElementById("featureStats");

	s.style.opacity = "0";


}

function feature1(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe photoshop";


	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/nika1.png')";


}
function feature2(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/cb3.png')";
}
function feature3(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/p3.png')";
}
function feature4(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pa1.png')";
}
function feature5(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/cb2.png')";
}
function feature6(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/p2.png')";
}
function feature7(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "painting";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/album.jpg')";
}



function feature8(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "google sketchup + adobe photoshop";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pres3.jpg')";
}
function feature9(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "pen & paper";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/yes.jpg')";
}
function feature10(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "autodesk maya";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/still.jpg')";
}
function feature11(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "digital photograph edited w/ adobe photoshop";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/fiji.jpg')";
}
function feature12(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "pen & paper";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/comic.jpg')";
}
function feature13(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "adobe photoshop";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/journey.jpg')";
}
function feature14(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "digital photograph edited w/ adobe photoshop";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/3.jpg')";
}




function closer(){


	var f = document.getElementById("feature");
var fd = document.getElementById("feature_darken");

	

	f.style.display = "none";
	fd.style.display = "none";

}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}