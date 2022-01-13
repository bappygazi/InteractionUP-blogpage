$(function () {
  //    sticky navbar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".sticky-top");
    if (scrolling >= 110) {
      sticky.addClass("navbg");
    } else {
      sticky.removeClass("navbg");
    }
  });

  $(".tabs-nav a").click(function () {
    // Check for active
    $(".tabs-nav li").removeClass("active");
    $(this).parent().addClass("active");

    // Display active tab
    let currentTab = $(this).attr("href");
    $(".tabs-content div").hide();
    $(currentTab).show();

    return false;
  });

  // toggle navbar button //
  $(".toggle-navbar").on("click", function () {
    $(".responsive-menu").toggleClass("showing");
  });

  /*** Vid musklick på länk e mneyn så plockas classen showing bort***/
  $(".responsive-menu li").on("click", function () {
    $(".responsive-menu").removeClass("showing");
  });
  if ($(this).scrollbottom() > 10) {
    $(".responsive-menu").removeClass("showing");
  }
});
