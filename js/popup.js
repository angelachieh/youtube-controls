function action(type, param) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {"type": type, "param": param}, function(response) {
	    console.log(response);
	  });
	});
}

document.addEventListener("DOMContentLoaded", function() {
	var actionTypes = ["rewind", "forward", "go", "setrate"];
	for (var i=0; i<actionTypes.length; i++) {
		document.getElementById(actionTypes[i]).addEventListener("click", function() {
			var param = parseInt(document.getElementById('param_' + this.id).value);
			action(this.id, param);
		});
	}
});


