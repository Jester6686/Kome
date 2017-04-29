$(function(){
 
	$('.arrow_down_lang').click(function(){
		 if($('.arrow_up_lang').length){
              $('.arrow_up_lang').removeClass('arrow_up_lang');
              $(".lang_selector").removeClass('show_lang_selector');
              
         }else{
             $(".lang_selector").addClass('show_lang_selector');
             $('.arrow_down_lang').addClass('arrow_up_lang');
             
         }
         
	});
     $('.right_menu_wrapper  .lang_selector  ul li').click(function(){
         $('.lang_selector > span:first-child').html($(this).find('a').html());
         $('.arrow_up_lang').removeClass('arrow_up_lang');
         $(".lang_selector").removeClass('show_lang_selector');
    });
    
   
});