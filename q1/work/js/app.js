$(function (){
  // 読み込み時文字の色変化
  $("#q1").css("color", "#008000");
  // クリックでボタンの色変更
  $("#q2").on('click', function(){
    // this：イベントが発生した要素を取得（q2）
    $(this).css("background-color", "#ffc0cb");
  });
  // クリックでフェードアウト（3秒）
  $("#q3").on('click', function(){
    $(this).fadeOut(3000);
  });
  // クリックでボタンサイズ変更
  $("#q4").on('click', function(){
    $(this).addClass("large");
  });
  // クリックでDOMの挿入
  $("#q5").on('click', function(){
    $(this).before("DOMの前")
    .prepend("DOMの中の前")
    .append("DOMの中の後")
    .after("DOMの後")
  });
  // クリックして移動
  $("#q6").on('click', function(){
    // animate：cssの値を指定してアニメーションを表現
    $(this).animate({"margin-top": 100, "margin-left": 100}, 2000);
  });
  // クリックでidのノードをコンソールに表示
  $("#q7").on('click', function(){
    console.log(this);
  });
  // ホバー時にサイズ変更
  // .on()にhoverを引数として書いても動作しない。
  // →.mouseenter()と.mouseleave()を記述。
  $("#q8").on({mouseenter: function(){
    $(this).addClass("large");
  },mouseleave: function(){
    $(this).removeClass("large");
  }});
  // クリックで配列のアラート表示
  $("#q9 li").on('click', function(){
    const alert = $(this).index();
    alert(alert);
  });
  // Q10をクリックしてQ11を操作
  $("#q10 li").on('click', function(){
    const alert = $(this).index();
    // .eq()：エレメントの集合から指定したポジションのエレメントだけを取り出す。
    $("#q11 li").eq(alert).addClass("large-text");
  });
  });