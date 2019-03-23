var btn = document.querySelector('#getMockData');
var showdata = document.querySelector('.data');

btn.addEventListener('click', function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://rap2api.taobao.org/app/mock/163095/mockPractice', true);
  xhr.send();
  xhr.addEventListener('load', function(){
    if((xhr.status >=200 && xhr.status < 300) | xhr.status === 304){
      var data = xhr.responseText;
      data = JSON.parse(data);
      for(var i in data) {
        var p = document.createElement('p');
        p.innerText = i + ' : ' + data[i];
        showdata.appendChild(p);
      }
    } else {
      console.log('error');
    }
  });
  xhr.onerror = function(){
    console.log('error');
  }

});