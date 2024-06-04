$(function() {
	$.ajax({
		url: '../news.html' //読み込むファイルを指定
	})
	.then(
		// 通信成功時の処理
		function(html) {
			$(html).find('#news-area').each(function(){　//外部HTMLの読み込みたい部分を指定
				$('#top-info').html($(this).html()); //読み込んだ外部HTMLを表示するエリアを指定
				return false;
			});
			$('dl dt:gt(0), dl dd:gt(0),dl dd:gt(1)').remove(); //2件目以降の dt,dd を削除
		});
});