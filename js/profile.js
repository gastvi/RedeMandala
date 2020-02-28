let inputCpf = document.querySelector("#cpf");
let inputCep = document.querySelector("#cep");
let selectEstado = document.querySelector("#estado");
let inputEndereco = document.querySelector("#endereco");
let selectCidade = document.querySelector("#cidade");
let inputBairro = document.querySelector("#bairro");



// api de localidades do ibge para popular o select - begin

const popularEstados = () => {
    let config = {
        method: "GET"
    };

    let resposta = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`, config).then((resposta) => {
        return resposta.json();
    }).then((estados) => {
        estados.map((estado) => {
            const option = document.createElement("option");

            option.setAttribute("value", estado.sigla);
            option.setAttribute("id", estado.id);
            option.textContent = estado.nome;

            selectEstado.appendChild(option);
        });
    })


}

const buscarCidades = () => {

    let config = {
        method: "GET"
    };

    let nodeCidades = selectCidade.childNodes;

    [...nodeCidades].map((node) => {
        return node.remove();
    });


    let optId = selectEstado.selectedOptions[0].id;


    let resposta = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${optId}/municipios
    `, config).then(resposta => {
        return resposta.json();
    }).then(cidades => {

        selectCidade.removeAttribute("disabled");


        cidades.map(cidade => {



            const option = document.createElement("option");

            option.setAttribute("value", cidade.nome);
            option.textContent = cidade.nome;

            selectCidade.appendChild(option);

        })
    })

}

selectEstado.addEventListener("change", buscarCidades);

// api de localidades do ibge para popular o select - end

// popular select estados - begin
popularEstados();
// popular select estados - end

//  consumir api do cep - begin
const buscarCep = () => {

        let config = {
            method: "GET"
        };

        let resposta = fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`, config).then((resposta) => {
            return resposta.json();
        }).then((json) => {
            if (json.erro) {
                return inputCep.setAttribute("class", "form-control is-invalid");
            }
            inputCep.setAttribute("class", "form-control is-valid");
            inputEndereco.value = json.logradouro;
            inputBairro.value = json.bairro;
            selectEstado.value = json.uf;
            buscarCidades();
            selectCidade.value = json.localidade;

        })

    }
    //  consumir api do cep - end

// verifica se o cpf tem um númerro valido - begin

const verificarCpf = () => {
        let soma = 0;
        let resto = 0;

        if (inputCpf.value == "00000000000") {
            inputCpf.setAttribute("class", "form-control is-invalid");
            return;
        }
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(inputCpf.value.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(inputCpf.value.substring(9, 10))) {
            inputCpf.setAttribute("class", "form-control is-invalid");
            return;
        }

        soma = 0;

        for (let i = 1; i <= 10; i++) {
            soma += parseInt(inputCpf.value.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(inputCpf.value.substring(10, 11))) {
            inputCpf.setAttribute("class", "form-control is-invalid");
            return;
        }
        inputCpf.setAttribute("class", "form-control is-valid");



    }
    // verifica se o cpf tem um númerro valido - end

//  eventos de validação - begin

inputCep.addEventListener("input", () => {
    if (isNaN(inputCep.value)) {
        inputCep.value = inputCep.value.slice(0, -1);
    }
    if (inputCep.value.length > 8) {
        inputCep.value = inputCep.value.substring(0, 8);
    } else if (inputCep.value.length == 8) {
        buscarCep();
    }
})

inputCpf.addEventListener("input", () => {

    if (isNaN(inputCpf.value)) {
        inputCpf.value = inputCpf.value.slice(0, -1);
    }
    if (inputCpf.value.length < 11) {
        inputCpf.setAttribute("class", "form-control is-invalid");
    } else if (inputCpf.value.length > 11) {
        inputCpf.value = inputCpf.value.substring(0, 11);
    } else {
        verificarCpf();
    }

})

//  eventos de validação - end