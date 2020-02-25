let inputEmail = document.getElementById('emailUsuario');
let inputSenha = document.getElementById('senhaUsuario');
let inputConfirmarSenha = document.getElementById('confirmarSenhaUsuario');
let inputNome = document.getElementById('nomeUsuario');


// ---------------- Validando Senha ------------------
inputConfirmarSenha.addEventListener('keyup', (event)=>{
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setAttribute('class', 'form-control is-invalid')
        inputSenha.setAttribute('class','form-control is-invalid')
    }else{
        inputConfirmarSenha.setAttribute('class', 'form-control is-valid')
        inputSenha.setAttribute('class','form-control is-valid')
    }
});