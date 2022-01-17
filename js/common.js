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
})
