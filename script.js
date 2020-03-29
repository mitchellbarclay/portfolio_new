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
    document.getElementById("app").innerHTML = "Mock lingual translation app logo. Adobe Illustrator.";


	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/nika1.png')";


}
function feature2(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock bar logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/cb3.png')";
}
function feature3(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock restaraunt logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/p3.png')";
}
function feature4(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Adobe Illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pa1.png')";
}
function feature5(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Adobe Illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/cb2.png')";
}
function feature6(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Adobe Illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/p2.png')";
}
function feature7(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "A rich picture analyses of my dual disciplines.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/richpic.png')";
}



function feature8(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Alien boy.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/alien.jpg')";
}
function feature9(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Album cover - Mudbb Borcle.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/album.jpg')";
}
function feature10(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "This one is what it is.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/magicmorning.jpg')";
}
function feature11(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "There's a new sheriff in town.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/yes.jpg')";
}
function feature22(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Study notes.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/sktch.jpg')";
}
function feature12(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "An unexpected house guest. Karori, Wellington.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/birb.jpg')";
}
function feature13(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Kyoto, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp1.jpg')";
}
function feature14(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Kyoto, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp7.jpg')";
}
function feature15(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Bush dwelling. Wilton, Wellington.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/rain.jpg')";
}
function feature16(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mobile photography exercise. Taken with my iPhone 8. Karori, Wellington.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/power.jpg')";
}
function feature17(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Tokyo, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp5.jpg')";
}
function feature18(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Kyoto, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp2.jpg')";
}
function feature19(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Kyoto, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp3.jpg')";
}
function feature20(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Tokyo, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp6.jpg')";
}
function feature21(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Tokyo, Japan.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/jp8.jpg')";
}
function feature23(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock interior design company logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/star.png')";
}
function feature24(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock staionery company logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/gala.png')";
}
function feature25(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock stationery company logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/gala2.png')";
}
function feature26(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock wildlife non-profit logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/fortune.png')";
}
function feature27(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock board-game company logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/cc.png')";
}
function feature28(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock Magazine logo. Adobe Illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/vicious.png')";
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
    document.getElementById("menu").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}