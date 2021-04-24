var x = 0;
var y = 0;

var laby = [["","","","x","é"],["","x","é","t","é"],["","t","c","",""],["","","x","é",""],["","","c","c",""]]

function custominit(){
  y = 1;
	x = 0;
}

function showdebug(){
	console.log("x="+x);
	console.log("y="+y);
}

function up(){
	y-=1;
	if(y<0){console.log("y error :");showdebug();}
}

function down(){
	y+=1;
	if(y<0){console.log("y error :");showdebug();}
}

function left(){
	x-=1;
	if(x<0){console.log("x error :");showdebug();}
}

function right(){
	x+=1;
	if(x<0){console.log("x error :");showdebug();}
}

function dothis(){
	for(var x = 0;x<247;x++){
		if(laby[y][x]=="t"){up()}
		if(laby[y][x]=="x"){right()}
		if(laby[y][x]=="é"){down()}
		if(laby[y][x]=="c"){left()}
	}
}

custominit();
right();
dothis();
up();
right();
up();
showdebug();
console.log(laby[y][x]);