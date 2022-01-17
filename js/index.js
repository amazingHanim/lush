$(function () {
    var $lips = $('.lips'),
        $txtList = $lips.find('.lip_tabMenu'),
        $imgList = $lips.find('.lip_tabContent')


    function listHover() {
        $txtList.children().mouseenter(function () {
            //txt에 클래스 추가
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
            //이미지 포지션값 이동
            hovernum = $(this).index();
            imgHeignt = $imgList.innerHeight();
            $imgList.stop();
            $imgList.animate({'top':-(hovernum * imgHeignt)},300);
        })
    }
    listHover();
})