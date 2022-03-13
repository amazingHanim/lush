$(function () {
    //heart 아이콘 클릭 이벤트


    var $product = $(".products");


    var $emptyHeart = $product.find('.emptyHeart'),
        $fullHeart = $product.find('.fullHeart');

    $fullHeart.hide();
    $emptyHeart.click(function () {
        $(this).toggle();
        $(this).next().toggle();
    })
    $fullHeart.click(function () {
        $(this).toggle();
        $(this).prev().toggle();
    })
});
$(function(){
    var $header_2 = $(".header_2"),
        $hamBtn = $header_2.find(".hamburger");
        $header_1 = $(".header_1");

        $hamBtn.click("click",function(){
            $header_1.toggleClass("on");
            $hamBtn.toggleClass("on");
        })
})
