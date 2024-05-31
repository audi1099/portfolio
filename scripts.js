function setLanguage(language) {
    document.documentElement.lang = language;
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru]');
    elements.forEach(element => {
        if (language === 'en') {
            element.textContent = element.getAttribute('data-lang-en');
        } else if (language === 'ru') {
            element.textContent = element.getAttribute('data-lang-ru');
        }
    });
}

// Установить язык по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ru');
});
