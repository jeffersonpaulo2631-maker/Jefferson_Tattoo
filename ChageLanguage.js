function changeLanguage(language) {
  // 1. Salvar o idioma selecionado
  localStorage.setItem('language', language);

  // 2. Redirecionar para a página atual para recarregar o conteúdo no novo idioma
  window.location.href = window.location.href;
}
const translations = {
  'pt-BR': {
    'title': 'Jefferson Tattoo - Arte na Pele',
    'welcome': 'Bem-vindo ao meu site',
    // ... outras traduções
  },
  'en-US': {
    'title': 'Jefferson Tattoo - Art on Skin',
    'welcome': 'Welcome to my website',
    // ... outras traduções
  },
  // ... outras traduções
};
function translatePage() {
  const language = localStorage.getItem('language') || 'pt-BR'; // Idioma padrão: português

  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[language][key];

    if (translation) {
      element.textContent = translation;
    }
  });
}
