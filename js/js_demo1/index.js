function makeData(){
  var data = [];
  for(var i=0 ; i<3; i++){
    var rand = Math.floor(Math.random()*100);
    var item = {
      img : '//picsum.photos/200/200/?image='+rand,
      name : 'jxias',
      price : '¥' + rand
    }
    data.push(item);
  }
  return data
}

function addCard(item) {
  var html = '';
  html += '<div class="card"><div class="cover"><a href="#" class="cover-btn delete">删除</a></div>'
  html += '<img src="'+item.img+'" alt="">';
  html += '<div class="card-title">'+item.name+'</div>';
  html += '<div class="card-price">'+item.price+'</div>'
  html += '</div>'
  return html
}

$('#add').on('click', function(e){
  e.preventDefault();
  $('.cover').removeClass('active');
  var items = makeData();
  console.log(items);
  $.each(items, function(){
    var cardhtml = addCard(arguments[1]);
    console.log(cardhtml);
    $('.card-group').append(cardhtml);
  });
});

$('#edit').on('click', function(e){
  e.preventDefault();
  $('.cover').toggleClass('active');
})

$('.card-group').on('click','.delete' ,function(e){
  e.preventDefault();
  $(this).parents('.card').remove();
});

