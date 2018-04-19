$(".features .feature-circle").hover(function(){
    var tabId = $(this).data("tab");
    $(this).siblings(".feature-selected").removeClass("feature-selected");
    $(this).addClass("feature-selected");
    $(tabId).siblings(".tab-opened").removeClass("tab-opened");
    $(tabId).addClass("tab-opened");
});