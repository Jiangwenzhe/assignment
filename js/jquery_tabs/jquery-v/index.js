$('.mod-tab .tab').on('click', function(){
  $(this).addClass('active')
  .siblings().removeClass('active');
  $('.panel').eq($(this).index())
  .addClass('active')
  .siblings().removeClass('active');
});
