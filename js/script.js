"use strict"

let count = 0;
$(document).ready(function() {
  
   $('#news_link').click(function(){
    if (count%2)  {
      $('#nav').css({
        display: 'none'
      });
      count++;
    }
     var scrollToNews = $('#news').offset().top - 110;
    $(document).scrollTop(scrollToNews);
  });
   $('#about_link').click(function(){
    if (count%2)  {
      $('#nav').css({
        display: 'none'
      });
      count++;
    }
     var scrollToAbout = $('#about').offset().top - 90;
    $(document).scrollTop(scrollToAbout);
  });
   $('#contacts_link').click(function(){
    if (count%2)  {
      $('#nav').css({
        display: 'none'
      });
      count++;
    }
     var scrollToAbout = $('#contacts').offset().top - 110;
    $(document).scrollTop(scrollToAbout);
  });
  $('#news_link_footer').click(function(){
    if (count%2)  {
      $('#nav').css({
        display: 'none'
      });
      count++;
    }
     var scrollToNews = $('#news').offset().top - 110;
    $(document).scrollTop(scrollToNews);
  });
   $('#about_link_footer').click(function(){
    if (count%2)  {
      $('#nav').css({
        display: 'none'
      });
      count++;
    }
     var scrollToAbout = $('#about').offset().top - 90;
    $(document).scrollTop(scrollToAbout);
  });
   $('#contacts_link_footer').click(function(){
     var scrollToAbout = $('#contacts').offset().top - 110;
    $(document).scrollTop(scrollToAbout);
  });
  $('#formCall_btn').click(function(){
    $('#modal').fadeIn(300);
    $('#modal').css({
    	display: 'flex'
    });
  });
  $('#modal').on('click', function(e){
    if (e.target.id == 'modal'){
      $(this).hide();
    }  
  });	
  $('#menu_click').click(function(){
    count++;
		if (count%2) $('#nav').css({
      display: 'grid'
    });
		else $('#nav').css({
      display: 'none'
    });
  });
  
  const offer_form = document.getElementById("offer_form");

  offer_form.addEventListener('submit', offer_formSend);

  async function offer_formSend(e){
    e.preventDefault();

    let offer_formData = new FormData(offer_form);

    let response = await fetch('sendmail.php',{
      method:'POST',
      body: offer_formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      offer_form.reset();
      $('#modal').hide();
    }
    else alert('Is ASS');
  }
});