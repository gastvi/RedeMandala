<<<<<<< HEAD
=======

>>>>>>> devMandala
 /* ---------- FUNCAO DO BOTAO TOP----------- */
$(function(){
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 100) {
            $('.smoothscroll-top').addClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
        }
    });
    $('.smoothscroll-top').on('click', scrollToTop);
});



function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 20)));
        scrollAnimation = setTimeout("scrollToTop()", 15);
    } else clearTimeout(scrollAnimation);
}

<<<<<<< HEAD
 /* ---------- FUNCAO DO BOTAO TOP----------- */
=======
>>>>>>> devMandala
