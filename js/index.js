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
            $imgList.animate({
                'top': -(hovernum * imgHeignt)
            }, 300);
        })
    }
    //lips content fin

    function about() {
        var $about = $(".about"),
            $txt = $about.find(".txt")
        $img = $about.find(".img")


        $txt.find("span").mouseenter(
            function () {
                $txt.children("li").removeClass("on");
                $(this).parent().addClass("on"); //해당 텍스트에 컬러 번경 fin
                $thisNum = $(this).parent().index();
                $img.css({
                    "background-image": "url(../images/about_" + ($thisNum + 1) + ".jpeg)"
                }, 300)
            }
        )



    }
    //about content fin
    function mainSlide() {
        var $main = $(".main"),
            $slider = $main.find(".slider");
        $slider.slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true
        });
    }

    function bsetSlide() {

        var $products = $(".products"),
            $section = $products.find("section")

        $section.slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }


    function reviewSlide() {
        var $bestReview = $(".bestReview"),
            $section = $bestReview.find("section")
        $section.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });

    }
    listHover();
    about();
    mainSlide();
    bsetSlide();
    reviewSlide();
})