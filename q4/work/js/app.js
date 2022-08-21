$(function(){
  // タブがクリックされた際にイベント発生
  $(".nav li").on('click', function(){
    // クリックされたタブのインデックス番号を変数に格納
    let a = $(".nav li").index(this);
    // 一度「description li」要素全てに「is-hidden」を追加
    $(".description li").addClass("is-hidden");
    // クリックされたタブのインデクス番号に対応した要素から「is-hidden」削除
    $(".description li").eq(a).removeClass("is-hidden");
  });
});