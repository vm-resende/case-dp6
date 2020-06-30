// Importando analytics.js
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// Definindo a propriedade receberá os dados
ga('create', 'UA-12345-6', 'auto');

// Evento para envio de Visualização de Página
ga('send', 'pageview', location.pathname);


// Função para o item "Entre em Contato" do menu
function entreEmContato() {
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'entre_em_contato',
    eventLabel: 'link_externo'
  });
}

// Função para o item "Download PDF" do menu
function downloadPdf() {
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'download_pdf',
    eventLabel: 'download_pdf'
  });
}

// Função para o evento customizado dos botões da página analise.html
function eventoCustomizado(conteudo) {
  ga('send', 'event', {
    eventCategory: 'analise',
    eventAction: 'ver_mais',
    eventLabel: conteudo
  });
}

// Função para o evento de preenchumento de cada um dos campos do formulário
function preencheCampo(campo) {
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: campo,
    eventLabel: 'preencheu'
  });
}

// Função para o evento de envio do formulário
function enviaFormulario() {
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: 'enviado',
    eventLabel: 'enviado'
  })
}
