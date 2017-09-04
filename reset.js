(function() {
	// <!--动态设置像素比-->
	var iScale = 1;
	iScale = iScale / window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">');
	// <!--动态设置文字大小-->
	function resize() {
		var iWidth = document.documentElement.clientWidth;
		var dpr = window.devicePixelRatio + '';
		//		 iWidth = iWidth > 1242 ? 1242 : iWidth;
		document.getElementsByTagName('html')[0].style.fontSize = iWidth / 64 + 'px';
		document.getElementsByTagName('html')[0].setAttribute('data-dpr', dpr);
	}
	resize();
	window.addEventListener("resize", function() {
		resize();
	});
	//	window.onresize = function() {
	//		resize();
	//	}
})();


