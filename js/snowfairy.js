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

});