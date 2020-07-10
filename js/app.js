$(document).ready(function () {
    $(function () {
      $(".hamburger-menu").click(function () {
        $(this).toggleClass("active");
        $('.menu').toggleClass("active");
        $('body').toggleClass("active");
      });
    });
  });