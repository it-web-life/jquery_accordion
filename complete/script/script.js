$(function() {
  // 全てのアコーディオン要素を取得
  $('.js-accordion').each(function(index, elm) {
    // アコーディオンのコンテンツ要素
    var $accordion = $(elm);
    // アコーディオンの開閉トリガー要素
    var trigger = $accordion.data('accordion');
    var $trigger = $(trigger);

    // アコーディオンの初期の開閉状態を更新する
    if ($accordion.hasClass('is-open')) {
      $accordion.show();
    } else {
      $accordion.hide();
    }

    // アコーディオンのトリガーがクリックされたとき
    $trigger.on('click', function() {
      // アコーディオン表示をトグルする
      if ($trigger.hasClass('is-open')) {
        // アコーディオンを閉じる
        $trigger.removeClass('is-open');
        $accordion.removeClass('is-open');
        $accordion.slideUp();
      } else {
        // アコーディオンを開く
        $trigger.addClass('is-open');
        $accordion.addClass('is-open');
        $accordion.slideDown();
      }
    });
  });
});
