document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
        closer();
    }
});


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





function feature1(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/alien.jpg')";

}
function feature2(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/concept.png')";
}
function feature3(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/magicmorning.jpg')";
}
function feature4(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pres2.png')";
}
function feature5(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/richpic.png')";
}
function feature6(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/sink.jpg')";
}
function feature7(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/album.jpg')";
}



function feature8(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pres3.jpg')";
}
function feature9(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/yes.jpg')";
}
function feature10(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/still.jpg')";
}
function feature11(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/fiji.jpg')";
}
function feature12(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/comic.jpg')";
}
function feature13(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/journey.jpg')";
}
function feature14(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");

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