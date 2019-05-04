lazyLoad();

$(window).on('scroll', function(){
  lazyLoad();
})

function lazyLoad() {
  $('.container img').each(function(){
    var $_this = $(this);
    if( isShow($_this) ){
      setTimeout(function(){
        showImg($_this);
      },300)
    }
  })
}

function isShow($node) {
  return $node.offset().top <= $(window).height() + $(window).scrollTop()
}

function showImg($img) {
  $img.attr('src', $img.attr('data-src'));
  $img.attr('data-isloaded', 1);
}