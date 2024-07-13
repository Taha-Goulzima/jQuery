/*$("button").click(function () {
  $("h1").hide({ left: "250px" });
});
$("button").click(function () {
    $("h1").show({ left: "250px" });
  });
  $("button").click(function () {
    $("h1").animate({ opacity : 0.5 });
  });*/
  $("button").click(function () {
    $("h1").slideUp().slideDown().animate({ opacity :0.5});
  });