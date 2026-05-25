(function () {
  'use strict';

  let isFirstOpen = true;

  window.showReceiptNotice = function () {

    if (
      document.getElementById(
        'receiptNoticeOverlay'
      )
    ) return;

    const modal =
      document.createElement(
        'div'
      );

    let bodyHtml = '';

    if (isFirstOpen) {

      bodyHtml = `

      <h2>
        【健診結果提出について】
      </h2>

      <div class="notice-message">

        健診結果には提出条件があります。<br><br>

        <strong>
        「📄 添付条件を確認」
        </strong>

        ボタンを押して内容を確認してから添付してください。

      </div>

      `;

      isFirstOpen = false;

    }

    else {

      bodyHtml = `

      <h2>
        【健診結果提出条件】
      </h2>

      <h3>
        ■提出形式
      </h3>

      <p class="important-pdf">

        PDF形式のみ提出可

      </p>

      <p class="warning">

        JPEG / PNG / HEIC /
        写真撮影データは提出不可

      </p>

      <h3>
        ■スキャン条件
      </h3>

      <p class="scan-list">

        ・カラー<br>

        ・300～400dpi<br>

        ・文字が鮮明に読める状態<br>

        ・健診結果全体が確認できる状態<br>

        ・氏名、受診日、
        判定欄、検査結果数値が
        確認できる状態<br>

        ・四隅欠けなし

      </p>

      <h3>
        ■両面・複数枚の場合
      </h3>

      <p>

        <strong>

        両面・複数枚の場合は、
        1つのPDFへまとめて
        提出してください。

        </strong>

      </p>

      <p>

        ※ページ順を整え、
        欠落ページがないことを
        確認してください。<br>

        ※裏面がある場合は
        裏面も含めて
        提出してください。

      </p>

      <div class="footer">

        添付内容に不備がある場合、
        再提出をお願いする場合があります。

      </div>

      `;

    }

    modal.innerHTML = `

    <div id="receiptNoticeOverlay">

      <div id="receiptNoticeModal">

        <div id="receiptNoticeBody">

          ${bodyHtml}

        </div>

        <div id="receiptNoticeFooter">

          <button id="receiptNoticeBtn">

            閉じる

          </button>

        </div>

      </div>

    </div>

    `;

    document.body.appendChild(
      modal
    );

    document
      .getElementById(
        'receiptNoticeBtn'
      )
      .onclick=function(){

      document
        .getElementById(
          'receiptNoticeOverlay'
        )
        .remove();

    };

  };

  window.addEventListener(
    'load',
    function(){

      const style=
      document.createElement(
        'style'
      );

      style.innerHTML=`

      #receiptNoticeOverlay{

        position:fixed;

        inset:0;

        background:
          rgba(
            0,
            0,
            0,
            0.5
          );

        z-index:99999;

        font-family:

          "メイリオ",
          Meiryo,

          "Hiragino Sans",
          "ヒラギノ角ゴシック",

          "Yu Gothic",
          "游ゴシック",

          "Noto Sans JP",

          sans-serif;

        display:flex;

        justify-content:center;

        align-items:center;

        padding:12px;

      }

      #receiptNoticeModal{

        background:#fff;

        width:90%;

        max-width:650px;

        max-height:85vh;

        border-radius:10px;

        box-shadow:
          0 4px 15px
          rgba(
            0,
            0,
            0,
            0.2
          );

        display:flex;

        flex-direction:column;

        overflow:hidden;

      }

      #receiptNoticeBody{

        padding:25px;

        overflow-y:auto;

        flex:1;

      }

      h2{

        text-align:center;

        font-size:22px;

        border-bottom:
          2px solid
          #e0e0e0;

        padding-bottom:12px;

      }

      .notice-message{

        text-align:center;

        font-size:18px;

        line-height:1.8;

      }

      .notice-message strong{

        color:#f57c00;

        font-size:20px;

      }

      h3{

        font-size:19px;

      }

      .important-pdf{

        border:
          2px solid
          #d93025;

        background:
          #fff3f3;

        color:#d93025;

        font-size:18px;

        font-weight:bold;

        padding:12px;

      }

      .warning{

        color:#d93025;

        font-size:17px;

        font-weight:bold;

      }

      .scan-list{

        line-height:1.9;

      }

      .footer{

        margin-top:20px;

        font-weight:bold;

      }

      #receiptNoticeFooter{

        padding:10px;

        border-top:
          1px solid
          #ddd;

      }

      #receiptNoticeBtn{

        width:100%;

        padding:10px;

        font-size:14px;

        font-weight:bold;

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

        background:#6c757d;

        border:none;

        border-radius:8px;

        cursor:pointer;

      }

      #receiptNoticeBtn:hover{

        background:#5a6268;

      }

      @media(
        max-width:768px
      ){

        #receiptNoticeModal{

          width:94%;

          max-height:90vh;

        }

        #receiptNoticeBody{

          padding:18px;

        }

        h2{

          font-size:19px;

        }

        .notice-message{

          font-size:15px;

        }

        .notice-message strong{

          font-size:16px;

        }

        h3{

          font-size:17px;

        }

        .important-pdf{

          font-size:16px;

        }

        .warning{

          font-size:15px;

        }

        #receiptNoticeBtn{

          padding:9px;

          font-size:13px;

        }

      }

      `;

      document.head
      .appendChild(
        style
      );

      showReceiptNotice();

    }

  );

})();