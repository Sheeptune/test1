// Notifications management
// Activate Bootstrap's popovers
$(function () {
    $('[data-toggle="popover"]').popover()
  })

  // Progress bar management
  // Activite auto-width

    $(".progress-bar").each(function(){
      each_bar_width = $(this).attr('aria-valuenow');
      $(this).width(each_bar_width + '%');
    });

    $(".indicator").each(function(){
      console.log($(this))
      indicator_left = $(this).attr('aria-valuenow');
      $(this).css('left', 'calc(' + indicator_left + '% - 0.5em)');
    });