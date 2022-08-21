$(function(){
  $(".dropdwn li").on({
    // マウスカーソルが重なった際の処理
    mouseenter: function(){
      // children：要素内の全ての子要素を取得
      // stop：現在動作中のアニメーション処理を全て中止
      $(this).children("ul").stop().slideDown();
    },
    // マウスカーソルが離れた際の処理
    mouseleave: function(){
      $(this).children("ul").stop().slideUp();
    }
  });
});