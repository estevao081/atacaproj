function closeCookie() {
    document.getElementById('cookieBanner').style.display = 'none';
}

function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.cssText = 'display:flex; flex-direction:column; position:fixed; top:72px; left:0; right:0; background:var(--amarelo); padding:16px 24px; gap:4px; z-index:998; border-bottom:3px solid var(--vermelho);';
    }
}

// Fechar menu ao clicar em link
document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.style.display = 'none';
    });
});