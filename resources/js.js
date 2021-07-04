function scrollSet() {
    if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("bg-dark");
    } else {
        $(".navbar").removeClass("bg-dark");
    }
}


$(function() {
    $(window).scroll(scrollSet);
    scrollSet();


    $("#product-list a").click(function() {
        var ind = $(this).index();
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".product-description > .row").addClass('hidden').eq(ind).removeClass('hidden');
    });

});