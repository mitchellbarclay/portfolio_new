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

function feature5(){
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
    document.getElementById("app").innerHTML = "Mock sushi restaraunt logo. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/haiku.png')";
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
function feature1(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Freelance job - logo for online tutoring service. Adobe Illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/skt.png')";
}
function feature6(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Adobe Illustrator";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/p2.png')";
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
function feature29(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock soda brand packaging. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pink1.png')";
}
function feature30(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock soda brand packaging. Adobe Illustrator, Autodesk Maya.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pink2.png')";
}
function feature31(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Mock soda brand packaging. Adobe Illustrator, Autodesk Maya.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/pink3.png')";
}
function feature32(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Custom macOS icon set. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/icons.png')";
}
function feature33(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Freelance job - Information sheet for online tutoring service. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/isheet.png')";
}
function feature34(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Freelance job - Information sheet for online tutoring service. Adobe Illustrator.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/asheet.jpg')";
}
function feature35(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Wellington Waterfront at night.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/night1.jpg')";
}
function feature36(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Night views from Evans Bay, Wellington.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/night2.jpg')";
}
function feature37(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Self portrait.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/self1.jpg')";
}
function feature38(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Portrait - Lucy Barclay.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/portraits1.jpg')";
}
function feature39(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Suburban lights. Karori, Wellington.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/night3.jpg')";
}
function feature40(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Ominous staircase(?). Karori, Wellington.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/night4.jpg')";
}
function feature41(){
	var f = document.getElementById("feature");
    var fd = document.getElementById("feature_darken");
    document.getElementById("app").innerHTML = "Portrait - Nancy Barclay.";

	f.style.display = "block";
	fd.style.display = "block";
	f.style.backgroundImage = "url('img/static/ph/portraits4.jpg')";
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