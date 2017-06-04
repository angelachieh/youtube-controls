var videos = document.getElementsByTagName("video");
var n = videos.length;

function action(type, p) {
	switch (type) {

		case "rewind":
			if (!p) p = 10;	
			for (var i = 0; i < n; i++) {
				videos[i].currentTime -= p;
			}
			break;

		case "forward":
			if (!p) p = 10;	
			for (var i = 0; i < n; i++) {
				videos[i].currentTime += p;
			}
			break;

		case "go":
			if (!p) p = 50;	
			for (var i = 0; i < n; i++) {
				videos[i].currentTime = p;
			}
			break;

		case "setrate":
			if (!p) p = 1;	
			for (var i = 0; i < n; i++) {
				videos[i].playbackRate = p;
			}
			break;

		default:
			break;
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	action(request.type, request.param);
});