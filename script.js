const btn = document.getElementById('tema');
const body = document.body;

// Verifica se o usuário já tinha um tema salvo
if (localStorage.getItem('tema') === 'dark') {
    body.classList.add('dark-mode');
}

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a preferência no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }
});
