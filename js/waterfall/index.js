var box = document.querySelector('.waterfall');
var items = box.children

var gap = 10

window.onload = function(){
  waterfall()
}

window.onresize = function() {
  waterfall()
}

function waterfall() {
  var pageWidth = document.body.clientWidth;
  var itemWidth = items[0].offsetWidth;
  var columns = parseInt(pageWidth / (itemWidth + gap))
  var colHeightArr = []
  for(var i = 0; i<items.length; i++) {
    if(i < columns) {
      //第一行的图片载入
      items[i].style.top = 0
      items[i].style.left = ((itemWidth + gap) * i + 'px')
      colHeightArr.push(items[i].offsetHeight)
    } else {
      var minHeight = colHeightArr[0];
      var index = 0;
      for (var j = 0; j < colHeightArr.length; j++) {
          if (minHeight > colHeightArr[j]) {
              minHeight = colHeightArr[j];
              index = j;
      }
    }
    items[i].style.top = colHeightArr[index] + gap + 'px';
    items[i].style.left = items[index].offsetLeft + 'px';
    colHeightArr[index] = colHeightArr[index] + items[i].offsetHeight + gap;
}
}
}