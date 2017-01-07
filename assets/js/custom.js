jQuery(function($) {
    /*=============================================================
        Authour URI: www.binarytheme.com
        License: Commons Attribution 3.0
    
        http://creativecommons.org/licenses/by/3.0/
    
        100% To use For Personal And Commercial Use.
        IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
       
        ========================================================  */
    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 

    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });

    /*==========================================
   SCROLL REVEL SCRIPTS
   =====================================================*/

    
       window.scrollReveal = new scrollReveal(); 
    

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/
	var headerName = document.getElementById("header-name");
	var headerNameClicked = 0;
	headerName.onclick = function () {
		headerNameClicked++;
		if (headerNameClicked > 4) {
			headerName.className += " hinge";
			headerNameClicked = 0;
			setTimeout(function () {
			headerName.className = "animated bounceInDown";
			}, 2600);
		}
	};
	var wechatHover = document.getElementById("wechat-icon");
	var wechatAccount = document.getElementById("wechat-account");
	var socialIcons = document.getElementById("wechatCode");
	var wechatCode = document.createElement("img");
	wechatCode.src = "assets/img/wechatCode.png";
	wechatHover.onmouseover = function () {
		wechatAccount.innerHTML = "Ma--Martin";
		socialIcons.appendChild(wechatCode);
		wechatHover.style.cursor = "pointer";
	};
	wechatHover.onmouseout = function () {
		wechatAccount.innerHTML = "";
		socialIcons.removeChild(socialIcons.lastChild);
	};
		
		
		
});