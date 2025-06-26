const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminiuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminiuiTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha ++;
    }
        numeroSenha.textContent = tamanhoSenha;
}
