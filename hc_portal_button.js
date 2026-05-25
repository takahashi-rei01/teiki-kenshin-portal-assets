(function () {
  'use strict';

  const portalLinks = [
    {
      key: 'hc-receipt',
      label: '領収書を提出する',
      description: '受診後に発行された領収書のPDFを提出してください。',
      className: 'receipt-btn'
    },
    {
      key: 'hc-result',
      label: '健診結果を提出する',
      description: '健康診断結果のPDFを提出してください。',
      className: 'result-btn'
    },
    {
      key: 'hc-faq',
      label: 'よくある質問を見る',
      description: '提出前に迷いやすい内容を確認できます。',
      className: 'faq-btn'
    }
  ];

  function customizeLinks() {
    let changed = false;

    document.querySelectorAll('a[href]').forEach(function (link) {
      const matchedLink = portalLinks.find(function (item) {
        return link.href.indexOf(item.key) !== -1;
      });

      if (!matchedLink) return;

      link.textContent = matchedLink.label;
      link.setAttribute('aria-label', matchedLink.label);
      link.classList.add('hc-btn', matchedLink.className);

      const card = link.closest('.kv-card-record');
      if (card) {
        card.classList.add('hc-portal-card');
        card.setAttribute('data-hc-card', matchedLink.key);

        if (!card.querySelector('.hc-card-description')) {
          const description = document.createElement('p');
          description.className = 'hc-card-description';
          description.textContent = matchedLink.description;
          link.parentNode.insertBefore(description, link);
        }
      }

      changed = true;
    });

    return changed;
  }

  function applyPortalLayout() {
    const changed = customizeLinks();

    const outerArea = document.querySelector('.kv-records-index-content');
    const cardArea = document.querySelector('.ui.stackable.cards.kv-card-records');

    if (outerArea) outerArea.classList.add('hc-portal-content');
    if (cardArea) cardArea.classList.add('hc-portal-cards');

    return changed;
  }

  window.addEventListener('load', function () {
    let count = 0;

    const timer = setInterval(function () {
      count += 1;

      const done = applyPortalLayout();
      if (done || count >= 10) clearInterval(timer);
    }, 300);
  });
})();
