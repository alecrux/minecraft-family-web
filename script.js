let currentLanguage = localStorage.getItem('language') || 'en';
let translations = {};

// Load translations
async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        translations = await response.json();
        setLanguage(currentLanguage);
        setupLanguageToggle();
    } catch (error) {
        console.error('Failed to load translations:', error);
    }
}

// Set the language and update all text
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Setup language toggle button
function setupLanguageToggle() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
}

// Toggle language between en and fr
function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadTranslations);
