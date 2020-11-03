$(function () {
  $('.btn-gnavi').on('click', function () {
    $(this).toggleClass('active');

    if ($("#nav").hasClass('open')) {
      $("#nav").removeClass('open');
      $("#nav").css('top', '-440px');

    } else {
      $("#nav").addClass('open');
      $("#nav").css('top', '40px');
    }
  });
});

$(function () {
  $('#nav-wrapper').on('click', function () {
    $(".btn-gnavi").toggleClass('active');

    if ($("#nav").hasClass('open')) {
      $("#nav").removeClass('open');
      $("#nav").css('top', '-440px');

    } else {
      $("#nav").addClass('open');
      $("#nav").css('top', '40px');
    }
  });
});

