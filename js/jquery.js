   $(document).ready(function() {

        $('.ajax-popup-link').magnificPopup({
          type: 'ajax',
          alignTop: true,
          overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
		  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade'
        });

       
        
      });

$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
    $(this).parents('.navbar-collapse').collapse('hide');
});
	
	 

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });
  
  
  $(document).keyup(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 40) {
            console.log("down pressed");
			$( "section" ).each(function( index ) {
				var scrollTop = $(window).scrollTop();
				//console.log("scrollTop: " + scrollTop);
				var offset =  $(this).offset();
				//console.log("offset.top = "+offset.top);
			  	//console.log( index + ": " + this.id +": "+ offset.top);
				if(scrollTop < offset.top-50){
					console.log("scroll to: "+this.id);
					keyScroll(offset.top-50);
						return false;
				}
			});
			
        } else if (code == 38) {
            console.log("up pressed");
			$('html,body').stop();
			$($("section").get().reverse()).each(function( index ) {
				var scrollTop = $(window).scrollTop();
				//console.log("scrollTop: " + scrollTop);
				var offset =  $(this).offset();
				//console.log("offset.top = "+offset.top);
			  	//console.log( index + ": " + this.id +": "+ offset.top);
				if(scrollTop > offset.top-50){
					console.log("scroll to: "+this.id);
					
					keyScroll(offset.top-50);
					 return false;	
				}
			});
        }
    });
	
	function keyScroll(posY){
		console.log(posY);
		$('html,body').animate({
		  scrollTop: posY
		}, 1000);
		// return false;
	}

 $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
});

$(function() {
    $('#nav-wrapper').height($("#nav").height());
    
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});

$('body').scrollspy({ target: '#top' })

$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});

