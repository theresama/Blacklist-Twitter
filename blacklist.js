
var blacklist = new Array();
blacklist[0] = "Taylor Swift";
blacklist[1] = "1989";
blacklist[2] = "@taylorswift13";
blacklist[3] = "taylor swift";

function addBlacklist(item){
	blacklist.push(item);
	console.log(item);
}



function blockItems(){
	setInterval(
		function(){
			for (var i = 0; i < blacklist.length; i++) {
			    $('*:contains(' +  blacklist[i]  + ')').parent('.stream-item').remove();
			}
		}
		, 1000);
}

blockItems();

