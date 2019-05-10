function Carousel($node) {
  this.init($node)
  this.bind()
}

Carousel.prototype = {
  init: function($node) {
    this.$node = $node
    this.$imgCt = this.$node.find('.img-ct')
    this.$imgs = this.$node.find('.img-ct > li')
    this.$preBtn = this.$node.find('.pre')
    this.$nextBtn = this.$node.find('.next')
    this.$bullets = this.$node.find('.bullet li')

    this.imgWidth = this.$imgs.width()
    this.imgCount = this.$imgs.length
    this.index = 0
    this.isAnimated = false

    this.$imgCt.append(this.$imgs.first().clone())
    this.$imgCt.prepend(this.$imgs.last().clone())
    this.$imgCt.width((this.imgCount + 2)*this.imgWidth)
    this.$imgCt.css('left', -this.imgWidth)

  },
  bind: function() {
    var _this = this;
    this.$preBtn.on('click', function() {
      console.log('clicked preBtn...')
      _this.playPre(1)
    })
    this.$nextBtn.on('click', function() {
      _this.playNext(1)
    })
    this.$bullets.on('click', function() {
      var index = $(this).index()
      console.log('clicked bullets index: ',$(this).index())
      if(_this.index > index) {
        _this.playPre(_this.index - index)
      } else {
        _this.playNext(index - _this.index)
      }
    })
  },
  playNext: function(len) {
    console.log('playNext...')
    if(this.isAnimated) return
    this.isAnimated = true
    var _this = this
    this.$imgCt.animate({
      left: '-='+_this.imgWidth*len
    },function(){
      _this.index += len
      if(_this.index === _this.imgCount) {
        _this.$imgCt.css('left', -_this.imgWidth)
        _this.index = 0
      }
      _this.setBullet()
      _this.isAnimated = false
    })
  },
  playPre: function(len) {
    console.log('playPre...')
    if(this.isAnimated) return
    this.isAnimated = true
    var _this = this
    this.$imgCt.animate({
      left: '+='+_this.imgWidth*len
    },function() {
      _this.index -= len
      if(_this.index < 0) {
        _this.$imgCt.css('left', -_this.imgWidth * _this.imgCount)
        _this.index = _this.imgCount -1
      }
      _this.setBullet()
      _this.isAnimated = false
    })
  },
  setBullet: function(){
    this.$bullets.eq(this.index).addClass('active')
      .siblings().removeClass('active')
  },
  autoPlay: function() {
    var _this = this
    this.autoPlayId = setInterval(function(){
      _this.playNext(1)
    },3000)
  },
  stopAutoPlay: function() {
    clearInterval(this.autoPlayId)
  }
}

// 封装Carousel的jquery插件
$.fn.carousel = function(opts) {
  $.each(this, function(index, node) {
    var c = new Carousel($(node))
    if(!opts) return
    if(opts.autoPlay === true) {
      c.autoPlay()
    }
  })
}

$('.carousel').eq(0).carousel({
  autoPlay: true
})
$('.carousel').eq(1).carousel()
$('.carousel').eq(2).carousel()