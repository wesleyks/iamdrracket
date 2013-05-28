function toggleImage() {
	var image = $("#dr-racket-img");
	if (image.attr("src") == "/findler.jpg")
		image.attr("src","/findler-mask.png");
	else
		image.attr("src","/findler.jpg");
}
state = 1;
function flickerImage() {
	toggleImage();
	state++;
	if (state < 50) {
		setTimeout(flickerImage, 1500*Math.pow(0.8, state));
		console.log(state);
	}
}
$().ready(function(){
	$("#audio").get(0).play();
	setTimeout(flickerImage, 1500);
});