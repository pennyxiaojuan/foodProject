define(['$','rejs!../../template/header','rejs!../../template/footer','bootstrap'],function ($,header,footer) {

  var index = {
    // 初始化
    init:function () {
      this.renderFun();
    },
    // 模板渲染
    renderFun:function () {
      // 头部模板
      var _hHtml = header();
      // 底部模板
      var _fHhtml = footer();
      $('#header').html(_hHtml);
      $('#footer').html(_fHhtml);
    }
  }
  index.init();
})