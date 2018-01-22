
var lawsOfTheLand =[]
var boxStorage = []

		
function sayThisPlease(sayString) {
	console.log(sayString);
}

function squish(s1, s2) {
	var sAdder = s1+s2;
	return sAdder;
}

function mitosis(m1, m2){
	var Mmer = m1*m2;
	return Mmer;
}

function minceFinely(minced, mincer){
	var sMincer = minced/mincer;
	return sMincer;
}

function realNumbersYouGoof(g1){
	var gRealer = g1;
	gRealer = g1 - Math.floor(g1);
	if (gRealer >= 0.5) {
		gRealer = Math.ceil(gRealer);
	} else {
		gRealer = Math.floor(gRealer);
	}
	gRealer += Math.floor(g1);
	return gRealer;
	
}

function makeMeAVariable(vName, vVal) {
	boxStorage[vName] = vVal;
}


function iDeclare(fName, instructions) {
	lawsOfTheLand[fName] = new Function(
		"inputs",
		'' + instructions
		);

}

//function screenusPreenus(tallness, wideness, backColor, ){
	
	
//}