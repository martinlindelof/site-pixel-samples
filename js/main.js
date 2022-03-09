(function(){
	// encapsulated

	// abort and watch loading screen
	/*$("#reel").css("display", "none");
	return;*/

	$(document).ready(function (e) {
		
		// Get instance of the plugin
		var instance = $("#reel").data("vide");

		// Get video element of the background. Do what you want.
		instance.getVideoObject();

		// Resize video background.
		// It calls automatically, if window resize (or element, if you will use something like https://github.com/cowboy/jquery-resize).
		instance.resize();

		// Destroy plugin instance
		// instance.destroy();
		

		// listen to video play event.
		instance.$video[0].onplay = startUp;

		// 10s backup for mobiles
		var mobile_force_init = setTimeout(startUp, 5000);

		function startUp(e) {
			// site done loading, startup

			$(document.body).css("cursor", "auto");

			clearTimeout(mobile_force_init);

			$("#loading-text").text("complete");
			$("#loading-text").css("animation-name", "none");
			$("#loading").addClass("loading-done");


			$(instance.$video).css("display", "block");
			instance.resize();


			$("#screen-led").addClass("screen-led-ready");
			$("#reel").addClass("jumbotron-ready");
			$("#logo-reel").addClass("logo-ready");
			$("#container").addClass("container-ready");
			
			$(".vide-player").addClass("vide-player-ready");
			
		
			// intro animation clean up
			setTimeout(function (e) {
				// position content under video reel
				$("#reel").css("position", "relative");
				
				// resize video element once again just to be sure
				instance.resize();

				// hide the loading
				$("#loading").css("display", "none");

				// hide the screen led effect
				$("#screen-led").css("display", "none");
			}, 2000);
		};



		// format all dates on page with class date
		var dates = document.getElementsByClassName("date");
		for (var i = 0; i < dates.length; i++) {
			dates[i].innerHTML = moment(dates[i].innerHTML, "YYYY-MM-DD HH:mm").fromNow();
		}


	// end of document ready		
	})

	

	// end encapsulation
})();