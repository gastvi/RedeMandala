let inputNumeroCartao = document.querySelector("#numeroCartao");
let inputValidade = document.querySelector("#validade");
let inputCvv = document.querySelector("#cvv");
let inputCpfTitular = document.querySelector("#cpfTitular");







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

// inputValidade.addEventListener("input", () => {


//     if (isNaN(inputValidade.value)) {
//         inputValidade.value = inputValidade.value.slice(0, -1);
//     }
//     if (inputValidade.value.length > 5) {
//         inputValidade.value = inputValidade.value.substring(0, 5);
//     } else if (inputValidade.value.length < 5) {
//         inputValidade.setAttribute("class", "form-control is-invalid");
//     } else {
//         inputValidade.setAttribute("class", "form-control is-valid");
//     }

// })

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
        inputCpfTitular.setAttribute("class", "form-control is-valid");
    }

})

//  eventos de validação - end