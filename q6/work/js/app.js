$(function(){
  // change：要素の中身が変更された際にイベント処理を実行
  $(".select-box").on('change', function(){
    const selectBox = $(this).val();
    const foodList = $(".food-list li");
    // セレクトボックスで「すべて」が選択された場合
    if("all" === selectBox){
      foodList.show();
    // セレクトボックスで「すべて」以外が選択された場合
    }else{
      // each：ループ処理
      // each(A, function(B, C){});
      // A：ループ要素。ループしたい配列を記述。
      // B：ループカウンタ。何回目のループであるかの数字が入る。1回目なら「0」
      // C：個別要素。Aのループ要素から分解された1行のデータが入る。
      $.each(foodList, function(count, add){
        // data：カスタムデータ属性（data-*）を取得
        const categoryType = $(add).data("category-type");
        // セレクトボックスの値とカテゴリの値が一致なら表示、不一致なら非表示
        if(selectBox === categoryType){
          $(add).show();
        }else{
          $(add).hide();
        }
      });
    };
  });
});