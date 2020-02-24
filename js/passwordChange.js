let inputSenhaAtual = document.querySelector("#senhaAtual");
let inputNovaSenha = document.querySelector("#novaSenha");
let inputConfirmSenha = document.querySelector("#confirmSenha");


inputConfirmSenha.addEventListener("input", () => {
    if (inputConfirmSenha.value != inputNovaSenha.value && inputConfirmSenha.value != "") {
        inputConfirmSenha.setAttribute("class", "form-control is-invalid");
    } else if (inputNovaSenha.value == inputConfirmSenha.value && inputConfirmSenha.value != "") {
        inputConfirmSenha.setAttribute("class", "form-control is-valid");
    } else {
        inputConfirmSenha.setAttribute("class", "form-control");
    }
})

inputNovaSenha.addEventListener("input", () => {
    if (inputNovaSenha.value != inputConfirmSenha.value && inputConfirmSenha.value != "") {
        inputConfirmSenha.setAttribute("class", "form-control is-invalid");
    } else if (inputNovaSenha.value == inputConfirmSenha.value && inputConfirmSenha.value != "") {
        inputConfirmSenha.setAttribute("class", "form-control is-valid");

    } else {
        inputConfirmSenha.setAttribute("class", "form-control");

    }
})