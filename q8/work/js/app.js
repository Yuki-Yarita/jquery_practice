$(function(){
  let searchWord;
  let pageCount = 1;

  // API
	//変数settingsに設定情報などを格納
  const settings = {
	//実行するURL。実行するURLのことをエンドポイントという
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
		//サーバーに送るメソッド
    "method": "GET",
  }

  function displayResult(e){
    $.each(e[0].items, function(h, i){
      let info = '<class li="lists-item"><p>タイトル：' + i.title + '</p><p>著者：' + i["dc:creator"] + '</p></li>';
      $(".lists").prepend(info);
    });
  }

  $(".search-btn").on('click', function(){
    searchWord = $("#search-input").val();
    console.log(searchWord);

	// Ajaxの実行
	// .doneが通信成功した時の処理。"response"が引数となっていて通信した結果を受け取っている。
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
  // .failが通信に失敗した時の処理。"err"にサーバーから送られてきたエラー内容を受け取っている。
    }).fail(function (err) {
      displayError(err)
    });
  });
});