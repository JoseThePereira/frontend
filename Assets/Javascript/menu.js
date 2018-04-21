
$(document).ready(function() {
    $("#click").click(function() {
          $(".menu-content").toggleClass("none");
          $(".fa").toggleClass("fa-arrow-times");
          $(".fa").toggleClass("fa-arrow-right");
    });
});