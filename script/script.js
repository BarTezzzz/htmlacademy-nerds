/*global $, jQuery*/
$(document).ready(function () {
  'use strict';

  /*Slider*/
  $.fn.sliderSwitcher = function () {
    var
      $curInputChecked = $('.header-slider__input:checked'),
      $nextInputChecked = $curInputChecked.next();
          
    $curInputChecked.removeAttr('checked');
    if ($nextInputChecked.prop('type') === 'radio') {
      $nextInputChecked.prop('checked', 'checked');
    } else {
      $nextInputChecked = $('.header-slider__input').first().prop('checked', 'checked');
    }
  };
  
  setInterval($.fn.sliderSwitcher, 4000);
  
/*Modal windows*/
  $('.js-form').click(function (event) {
    event.preventDefault(event);
    
    $('.overlay').show();
    $('.modal-content_form').addClass('modal-content_show');
  });
  
  $('.modal-content_close').click(function (event) {
    event.preventDefault(event);
    
    $('.overlay').hide();
    $('.modal-content_form').removeClass('modal-content_show');
  });
  
});