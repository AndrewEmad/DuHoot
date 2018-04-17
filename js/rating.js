$(".fa-star").hover(function() {
    $(this).nextAll("i").addClass("fa-star-o");
    $(this).nextAll("i").removeClass("fa-star");
}, function() {
    $(this).nextAll(".selected").addClass("fa-star");
    $(this).nextAll(".selected").removeClass("fa-star-o");
});


$(".fa-star-o").hover(function() {
    $(this).prevAll(".fa-star-o").addClass("fa-star");
    $(this).prevAll(".fa-star-o").removeClass("fa-star-o");
    $(this).addClass("fa-star");
    $(this).removeClass("fa-star-o");
    alert(1);
}, function() {
    $(this).prevAll(".selected").addClass("fa-star");
    $(this).prevAll(".selected").removeClass("fa-star-o");
    $(this).addClass("fa-star-o");
    $(this).removeClass("fa-star");
});

$(".fa-star, .fa-star-o").on("click", function() {
    $(this).nextAll("i").addClass("fa-star-o");
    $(this).addClass("selected");
    $(this).nextAll("i").removeClass("fa-star selected");
});