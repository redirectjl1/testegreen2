const nomes = ['João R',
    'Fernanda A',
    'Amauri O',
    'Carlos M',
    'Maria F',
    'Camila D',
    'Fernanda M',
    'Pedro B',
    'Jorge L',
    'Andressa E',
    'Lucas S',
    'Bruno G',
    'Matheus F',
    'Guilherme S',
    'Vinicius P',
    'Felipe G',
    'Carlos O',
    'Julia B',
    'Gabriel M'
];

let count = 0;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function mostrarPopUpAleatorio() {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('nomeAleatorio').innerHTML = `<img src="/images/check-mark-icon.png" alt="check mark icon image" /> <p><strong>${nomeAleatorio}</strong>. acabou de GANHAR com a <strong>Falha na plataforma!</strong></p>`;

    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').style.animation = 'slideDown 0.5s ease forwards';

    const tempoExibicao = Math.random() * randomIntFromInterval(15000, 30000);

    setTimeout(() => {
        fecharPopUp();
    }, 5000);

    setTimeout(() => {
        fecharPopUp(true);
    }, 5000 + tempoExibicao);

    count++;
}

function fecharPopUp(aleatorio = false) {
    document.getElementById('popup').style.animation = 'slideUp 0.5s ease forwards';

    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('popup').style.animation = '';

        if (aleatorio) {
            mostrarPopUpAleatorio();
        }
    }, 500);
}

if (count > 0) {
    mostrarPopUpAleatorio();
} else {
    setTimeout(() => {
        mostrarPopUpAleatorio()
    }, randomIntFromInterval(7000, 10000))
}


