const form = document.getElementById('form');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    let numeroA = parseFloat(document.getElementById('numero-a').value);
    let numeroB = parseFloat(document.getElementById('numero-b').value);

    if (numeroA < numeroB) {
        mensagem.textContent = 'O número B: '+ numeroB + ' é maior que o número A: ' + numeroA + ', legal!';
        mensagem.style.color = 'green';
    } else { 
        mensagem.textContent = 'O número B : ' + numeroB + ' não é maior que o número A: ' + numeroA + '.';
        mensagem.style.color = 'red';
    }
});





