
console.log("youtube controls ftw!");

var videos = document.getElementsByTagName("video");
var n = videos.length;

function action(type, p) {
	switch (type) {

		case "rewind":
			if (!p) p = 10;	
			console.log("rewinding by " + p + " seconds, baby!");
			for (var i = 0; i < n; i++) {
				console.log("current time: " + videos[i].currentTime);
				videos[i].currentTime -= p;
				console.log("current time: " + videos[i].currentTime);
			}
			break;

		case "forward":
			if (!p) p = 10;	
			console.log("fast forwarding by " + p + " seconds, baby!");
			for (var i = 0; i < n; i++) {
				console.log("current time: " + videos[i].currentTime);
				videos[i].currentTime += p;
				console.log("current time: " + videos[i].currentTime);
			}
			break;

		case "go":
			if (!p) p = 50;	
			console.log("going to " + p + " seconds, baby!");
			for (var i = 0; i < n; i++) {
				console.log("current time: " + videos[i].currentTime);
				videos[i].currentTime = p;
				console.log("current time: " + videos[i].currentTime);
			}
			break;

		case "setrate":
			if (!p) p = 1;	
			console.log("setting rate to " + p + ", baby!");
			for (var i = 0; i < n; i++) {
				console.log("playback rate: " + videos[i].playbackRate);
				videos[i].playbackRate = p;
				console.log("playback rate: " + videos[i].playbackRate);
			}
			break;

		default:
			break;
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	action(request.type, request.param);
});