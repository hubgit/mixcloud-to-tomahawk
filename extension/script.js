// wishlist: hAudio or RDFa markup

var nodes = document.querySelectorAll(".tracklistcell");

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var artist = node.querySelectorAll(".tracklistartistname").item(0).textContent.trim();
	var title = node.querySelectorAll(".tracklisttrackname").item(0).textContent.trim();

	var link = document.createElement("a");
	link.href = "tomahawk://open/track?artist=" + encodeURIComponent(artist) + "&title=" + encodeURIComponent(title);
	link.className = "mx-link";
	link.innerHTML = "▶ Tomahawk";

	var container = document.createElement("div");
	container.appendChild(link);

	node.appendChild(container);
}