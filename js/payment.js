let inputNumeroCartao = document.querySelector("#numeroCartao");
let inputValidade = document.querySelector("#validade");
let inputCvv = document.querySelector("#cvv");
let inputCpfTitular = document.querySelector("#cpfTitular");



// verifica se o cpf tem um númerro valido - begin

const verificarCpf = () => {
        let soma = 0;
        let resto = 0;

        if (inputCpfTitular.value == "00000000000") {
            inputCpfTitular.setAttribute("class", "form-control is-invalid");
            return;
        }
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(inputCpfTitular.value.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(inputCpfTitular.value.substring(9, 10))) {
            inputCpfTitular.setAttribute("class", "form-control is-invalid");
            return;
        }

        soma = 0;

        for (let i = 1; i <= 10; i++) {
            soma += parseInt(inputCpfTitular.value.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(inputCpfTitular.value.substring(10, 11))) {
            inputCpfTitular.setAttribute("class", "form-control is-invalid");
            return;
        }
        inputCpfTitular.setAttribute("class", "form-control is-valid");



    }
    // verifica se o cpf tem um númerro valido - end




//  eventos de validação - begin


inputCvv.addEventListener("input", () => {
    if (isNaN(inputCvv.value)) {
        inputCvv.value = inputCvv.value.slice(0, -1);
    }
    if (inputCvv.value.length > 3) {
        inputCvv.value = inputCvv.value.substring(0, 3);
    } else if (inputCvv.value.length < 3) {
        inputCvv.setAttribute("class", "form-control is-invalid");
    } else {
        inputCvv.setAttribute("class", "form-control is-valid");
    }
})


inputNumeroCartao.addEventListener("input", () => {

    if (isNaN(inputNumeroCartao.value)) {
        inputNumeroCartao.value = inputNumeroCartao.value.slice(0, -1);
    }
    if (inputNumeroCartao.value.length < 16) {
        inputNumeroCartao.setAttribute("class", "form-control is-invalid");
    } else if (inputNumeroCartao.value.length > 16) {
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0, 16);
    } else {
        inputNumeroCartao.setAttribute("class", "form-control is-valid");
    }

})

inputCpfTitular.addEventListener("input", () => {

    if (isNaN(inputCpfTitular.value)) {
        inputCpfTitular.value = inputCpfTitular.value.slice(0, -1);
    }
    if (inputCpfTitular.value.length < 11) {
        inputCpfTitular.setAttribute("class", "form-control is-invalid");
    } else if (inputCpfTitular.value.length > 11) {
        inputCpfTitular.value = inputCpfTitular.value.substring(0, 11);
    } else {
        verificarCpf();
    }

})

//  eventos de validação - end