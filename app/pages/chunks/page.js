var app = require("../../app");


module.exports = function() {
	document.title = "chunks";
	$(".page").html(require("./chunks.jade")({
		stats: app.stats
	}));
	return function() {
	}
};
