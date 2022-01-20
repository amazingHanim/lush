$(function(){
    // 메인 이미지 슬라이드
    
    var $wrapper = $(this),
        $imgBtn = $wrapper.find('.imgBtns li'),
        $imgBox = $wrapper.find('.images'),
        i = 0;

    $imgBtn.on({
        mouseenter : function(){
            i = $(this).attr('data-num');
            i = $(this).index();
            console.log(i)

            $imgBox.stop().animate({top: -88 * i + 'vh'},800)
        },
        mouseout : function(){
            $imgBox.stop().animate({top: -88 * 5 + 'vh'},800)
        }
        
        })

    // recommends 슬라이더
    $(".recommends").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    //용량 선택
    var $amounts = $('.amounts'),
        $amount = $amounts.find('ul li');

    $amount.click(function(){
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
    });

});