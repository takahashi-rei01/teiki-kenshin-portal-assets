(function () {
  'use strict';

  window.addEventListener(
    'load',
    function () {

      setTimeout(
        function () {

          if (
            document.getElementById(
              'receiptNoticeOpenBtn'
            )
          ) return;

          const button =
          document.createElement(
            'button'
          );

          button.type='button';

          button.id=
          'receiptNoticeOpenBtn';

          button.textContent=
          '📄 添付条件を確認';

          button.onclick=
          function(){

            if(
              typeof
              showReceiptNotice
              ===
              'function'
            ){

              showReceiptNotice();

            }

          };

          const target =
          document.querySelector(
            '[data-field-code="attachment_notice_button"]'
          );

          if(target){

            target.innerHTML='';

            target.appendChild(
              button
            );

          }

          const style=
          document.createElement(
            'style'
          );

          style.innerHTML=`

          #receiptNoticeOpenBtn{

            padding:
              8px 14px;

            font-size:
              13px;

            font-weight:
              bold;

            font-family:

              "メイリオ",
              Meiryo,

              "Hiragino Sans",
              "ヒラギノ角ゴシック",

              "Yu Gothic",
              "游ゴシック",

              "Noto Sans JP",

              sans-serif;

            color:#fff;

            background:
              linear-gradient(
                180deg,
                #ff9800,
                #f57c00
              );

            border:none;

            border-radius:
              999px;

            cursor:pointer;

            box-shadow:
              0 3px 8px
              rgba(
                0,
                0,
                0,
                0.25
              );

          }

          `;

          document.head
          .appendChild(
            style
          );

        },

        1000

      );

    }

  );

})();