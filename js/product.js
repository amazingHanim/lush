$(function(){
    var $filter = $('.filterTitle').find('li').first(),
        $order = $('.filterTitle').find('li').last(),
        $filterSlider = $('.filterSlider'),
        $orderSlider = $('.order'),
        $filterIcon = $filter.children('span'),
        $orderIcon = $order.children('span');

        $filterSlider.hide();
        $orderSlider.hide();
        $filter.click(function(){
            $orderSlider.hide();
            $orderIcon.first().show();
            $orderIcon.last().hide();
            $filterSlider.slideToggle();
            $(this).children('span').toggle();
        });
        $order.click(function(){
            $filterSlider.hide();
            $filterIcon.first().show();
            $filterIcon.last().hide();
            $orderSlider.slideToggle();
            $(this).children('span').toggle();
        });
        // filter slide 기능

    var $filterDetails = $('.filterDetails').children('ul'),
        $filterItem = $filterDetails.find('li');
    
        $filterItem.click(function(){
            $(this).toggleClass("on");
        });
        // filter 항목 선택 기능

    var $product = $('.products section article'),
        $productImg = $product.find('.img');

    $productImg.mouseenter(
        function(){
            $(this).children('img').toggle();
        });
    $productImg.mouseleave(
        function(){
            $(this).children('img').toggle();
        });
        // product image 마우스 오버 이벤트

    var $emptyHeart = $product.find('.emptyHeart'),
        $fullHeart = $product.find('.fullHeart');

        $fullHeart.hide();
        $emptyHeart.click(function(){
            $(this).toggle();
            $(this).next().toggle();
        })
        $fullHeart.click(function(){
            $(this).toggle();
            $(this).prev().toggle();
        })
        
        
});
