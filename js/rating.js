$(".rating-star").hover(function() {
    $(this).nextAll(".fa-star").attr("class","fa fa-star-o rating-star selected");
    $(this).prevAll(".fa-star-o").attr("class","fa fa-star rating-star");
    if(!$(this).hasClass("selected")){
        $(this).attr("class","fa fa-star rating-star");
    }
    else{
        $(this).attr("class","fa fa-star rating-star selected");
    }
}, function() {
    $(this).nextAll(".selected").attr("class","fa fa-star rating-star selected");
    $(this).prevAll(".selected").attr("class","fa fa-star rating-star selected");
    $(this).prevAll(".fa-star").not(".selected").attr("class","fa fa-star-o rating-star");
    if(!$(this).hasClass("selected")){
        $(this).attr("class","fa fa-star-o rating-star");
    }
});

$(".rating-star").on("click",function(){
    $(this).prevAll(".rating-star").attr("class","fa fa-star rating-star selected");
    $(this).attr("class","fa fa-star rating-star selected");
    $(this).nextAll(".rating-star").attr("class","fa fa-star-o rating-star");
});