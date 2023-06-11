console.clear();

$(".pop_close").click(function () {
  $(".top-popup").addClass("nope");
  $("header").css("top", "0");
  $(".top-bar-invisible").css("top", "0");
  $(".bg-img").append("<style>.bg-img::before { display: none; }</style>");
});

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;

  if (scrollValue > 0) {
    $("header").css(
      "background",
      "linear-gradient(0deg,rgba(255,255,255,0) ,rgba(255,255,255,1))"
    );
    $(".top-bar-invisible").css(
      "background",
      "linear-gradient(0deg,rgba(255,255,255,0) ,rgba(255,255,255,1))"
    );
  } else {
    $("header").css("background", "none");
    $(".top-bar-invisible").css("background", "none");
  }
});
