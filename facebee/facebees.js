

// Modify the content somehow...
var doFilter = function(textNode) {
    //document.querySelector(".userContent").innerHTML = "<p>The Bee Movie</p>";
	var videoCode = '<iframe width="476" height="269" src="https://www.youtube.com/embed/VONRQMx78YI" frameborder="0" allowfullscreen></iframe>';
	var textCode = 'When the bee Barry B. Benson graduates from college, he finds that he will have only one job for his entire life, and absolutely disappointed, he joins the team responsible for bringing the honey and pollination of the flowers to visit the world outside the hive.';
	
	var items = document.getElementsByClassName("userContent");
	var size = items.length;
	for(var i = 0; i < size; i++) {
		if (items[i].done == 1) continue;
		items[i].innerHTML = "<p style='font-size: 14px;margin-bottom: 5px;'>"+textCode+"</p>";
		items[i].nextSibling.innerHTML = videoCode;
		items[i].done = 1;
	}
	
	var friendNames = document.getElementsByClassName("_55lr");
	var friendsize = friendNames.length;
	for(var i = 0; i < friendsize; i++) {
		friendNames[i].innerHTML = "Barry B. Benson";
	}
	//
}

// Create a MutationObserver to handle events
// (e.g. filtering TextNode elements)
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes) {
            [].slice.call(mutation.addedNodes).forEach(function(node) {
                if (node.nodeName.toLowerCase() == "#text") {
                    doFilter(node);
                }
            });
        }
    });
});

// Start observing "childList" events in document and its descendants
observer.observe(document, {
    childList: true,
    subtree:   true
});

window.addEventListener("DOMContentLoaded", function() {
    doFilter(document.body);
});

setInterval(function () {doFilter(null);},1000);