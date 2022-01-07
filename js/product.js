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
});
