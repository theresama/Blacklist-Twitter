var blacklist = new Array();

function addBlacklist(item){
	blacklist.push(item);
	console.log(item);
}

var xhr = new XMLHttpRequest();
xhr.open('GET', chrome.extension.getURL('blacklist.txt'), true);

xhr.onreadystatechange = function()
{
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
    	var lines = xhr.responseText.split('\n');
        for(var line = 0; line < lines.length; line++){
          console.log(lines[line]);
          blacklist.push(lines[line]);
        }
    }
};
xhr.send();


function blockItems(){
	setInterval(
		function(){
			for (var i = 0; i < blacklist.length; i++) {
			    $('*:contains(' +  blacklist[i]  + ')').parent('.stream-item').remove();
			    $('*:contains(' +  blacklist[i]  + ')').parent('.js-stream-item').remove();
			}
		}
		, 1000);
}

blockItems();


