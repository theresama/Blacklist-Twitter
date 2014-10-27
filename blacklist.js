var blacklist = new Array();

setInterval(
	function(){
		$('*:contains("Taylor Swift")').parent('.stream-item').remove();
		$('*:contains("1989")').parent('.stream-item').remove();
		$('*:contains("@taylorswift13")').parent('.stream-item').remove();
		$('*:contains("taylor swift")').parent('.stream-item').remove();
	}
	, 1000);



