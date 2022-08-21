// ハンバーガーメニュー
$(function(){
  // ボタン操作
  $(".drawer_button").on('click', function(){
    // toggleClass：指定したcssクラスが要素になければ追加、あれば削除。
    $(this).toggleClass("active");
    // fadeToggle：フェードインとフェードアウトを交互に行う。
    $(".drawer_bg").fadeToggle();
    $(".drawer_nav_wrapper").toggleClass("open");
  });

  // bgクリックでクローズ
  $(".drawer_bg").on('click', function(){
    $(".drawer_button").removeClass("active");
    $(this).fadeOut();
    $(".drawer_nav_wrapper").removeClass("open");
  });
});